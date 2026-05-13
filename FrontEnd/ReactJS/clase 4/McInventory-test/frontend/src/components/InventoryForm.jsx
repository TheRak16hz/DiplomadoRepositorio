import { useState, useEffect } from "react";
import { getFoodTypes, createItem, updateItem } from "../api";

const InventoryForm = ({ onSave, selectedItem, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    unit: "",
    price: 0,
    type_id: "",
  });
  const [foodTypes, setFoodTypes] = useState([]);
  const [prevSelectedItem, setPrevSelectedItem] = useState(null);

  // Patrón: Ajustar el estado durante el renderizado (recomendado por React en lugar de useEffect)
  if (selectedItem !== prevSelectedItem) {
    setPrevSelectedItem(selectedItem);
    if (selectedItem) {
      setFormData({
        ...selectedItem,
        price: selectedItem.price || 0,
      });
    } else {
      setFormData({
        name: "",
        quantity: 0,
        unit: "",
        price: 0,
        type_id: foodTypes.length > 0 ? foodTypes[0].id : "",
      });
    }
  }

  useEffect(() => {
    let isMounted = true;
    const loadTypes = async () => {
      try {
        const data = await getFoodTypes();
        if (isMounted) {
          setFoodTypes(data);
          // Si es un nuevo artículo y no hay tipo seleccionado, poner el primero
          if (!selectedItem && data.length > 0) {
            setFormData(prev => ({ ...prev, type_id: data[0].id }));
          }
        }
      } catch (error) {
        console.error("Error loading food types:", error);
      }
    };

    loadTypes();
    return () => { isMounted = false; };
  }, [selectedItem]); // Recargar si cambia el item o al montar

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que tengamos un tipo seleccionado
    if (!formData.type_id) {
      alert("Por favor seleccione un tipo de alimento");
      return;
    }

    try {
      if (selectedItem) {
        await updateItem(selectedItem.id, formData);
      } else {
        await createItem(formData);
      }
      onSave();
      clearSelection();
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Error al guardar el artículo");
    }
  };

  const handleNumericChange = (field, value) => {
    const numValue = value === "" ? 0 : parseFloat(value);
    setFormData({ ...formData, [field]: numValue });
  };

  return (
    <div className="form-container">
      <h3>{selectedItem ? "Editar Artículo" : "Agregar Artículo"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Ej. Papas Fritas"
          />
        </div>
        <div className="form-group">
          <label>Cantidad</label>
          <input
            type="number"
            step="0.01"
            value={formData.quantity}
            onChange={(e) => handleNumericChange("quantity", e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Unidad (kg, uds, etc.)</label>
          <input
            type="text"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            required
            placeholder="Ej. kg"
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => handleNumericChange("price", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tipo de Alimento</label>
          <select
            value={formData.type_id}
            onChange={(e) => setFormData({ ...formData, type_id: e.target.value ? parseInt(e.target.value) : "" })}
            required
          >
            <option value="">Seleccione un tipo</option>
            {foodTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="button-group">
          <button type="submit" className="btn-save">
            {selectedItem ? "Actualizar" : "Guardar"}
          </button>
          {selectedItem && (
            <button type="button" className="btn-cancel" onClick={clearSelection}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
