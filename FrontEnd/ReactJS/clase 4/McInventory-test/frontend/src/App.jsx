import { useState, useEffect } from "react";
import InventoryList from "./components/InventoryList";
import InventoryForm from "./components/InventoryForm";
import { getItems, getFoodTypes, createFoodType } from "./api";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const itemsData = await getItems();
      const typesData = await getFoodTypes();
      setItems(itemsData);
      setFoodTypes(typesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSetup = async () => {
    const types = ["Vegetales", "Cárnicos", "Postres", "Panes", "Fritos"];
    for (const name of types) {
      await createFoodType({ name, description: `Categoría de ${name.toLowerCase()}` });
    }
    fetchData();
  };

  return (
    <div className="app-container">
      <header>
        <h1>McDonald's Inventory</h1>
      </header>

      {foodTypes.length === 0 && (
        <div className="setup-banner">
          <p>La base de datos parece estar vacía de tipos de alimento.</p>
          <button className="btn-setup" onClick={handleSetup}>
            Inicializar Categorías Base
          </button>
        </div>
      )}

      <main className="main-content">
        <InventoryForm
          onSave={fetchData}
          selectedItem={selectedItem}
          clearSelection={() => setSelectedItem(null)}
        />
        <InventoryList
          items={items}
          foodTypes={foodTypes}
          onEdit={setSelectedItem}
          onDeleteSuccess={fetchData}
        />
      </main>
    </div>
  );
}

export default App;
