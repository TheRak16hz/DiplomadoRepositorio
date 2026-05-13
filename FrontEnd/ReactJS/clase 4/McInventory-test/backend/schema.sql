-- Tabla para los tipos de alimento (Categorías)
CREATE TABLE food_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

-- Tabla para el inventario de artículos
CREATE TABLE inventory_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity FLOAT DEFAULT 0.0,
    unit VARCHAR(50) NOT NULL,
    price FLOAT,
    type_id INTEGER REFERENCES food_types(id) ON DELETE SET NULL
);

-- Índices para optimización
CREATE INDEX idx_food_types_name ON food_types(name);
CREATE INDEX idx_inventory_items_name ON inventory_items(name);

-- Inserción de tipos de alimento base (opcional para inicializar)
INSERT INTO food_types (name, description) VALUES 
('Vegetales', 'Hortalizas y verduras frescas'),
('Cárnicos', 'Proteínas animales: hamburguesas, nuggets, etc.'),
('Postres', 'Helados, pasteles y dulces'),
('Panes', 'Diferentes tipos de pan para hamburguesas'),
('Fritos', 'Papas fritas y otros complementos fritos');
