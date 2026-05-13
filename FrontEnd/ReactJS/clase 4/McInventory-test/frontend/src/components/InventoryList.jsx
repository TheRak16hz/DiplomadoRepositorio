import { deleteItem } from "../api";

const InventoryList = ({ items, onEdit, onDeleteSuccess, foodTypes }) => {
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este artículo?")) {
      await deleteItem(id);
      onDeleteSuccess();
    }
  };

  const getTypeName = (typeId) => {
    const type = foodTypes.find((t) => t.id === typeId);
    return type ? type.name : "Desconocido";
  };

  return (
    <div className="list-container">
      <h3>Inventario Actual</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>${item.price}</td>
              <td>{getTypeName(item.type_id)}</td>
              <td>
                <button className="btn-edit" onClick={() => onEdit(item)}>
                  Editar
                </button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No hay artículos en el inventario.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
