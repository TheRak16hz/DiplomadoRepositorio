const API_URL = "http://localhost:8000";

export const getItems = async () => {
  const response = await fetch(`${API_URL}/items/`);
  return response.json();
};

export const createItem = async (item) => {
  const response = await fetch(`${API_URL}/items/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const updateItem = async (id, item) => {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const deleteItem = async (id) => {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const getFoodTypes = async () => {
  const response = await fetch(`${API_URL}/food-types/`);
  return response.json();
};

export const createFoodType = async (foodType) => {
  const response = await fetch(`${API_URL}/food-types/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(foodType),
  });
  return response.json();
};
