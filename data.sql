USE rentify;

-- Inserting an initial seller user
INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES
('John', 'Doe', 'john@example.com', '1234567890', '$2a$10$7Q0/SVGYYzNvgT98/oiuwO7BNHLf9Q0.X5N5IXaMK01/lBbT0bqaC', 'SELLER'); -- password: password

-- Inserting initial properties
INSERT INTO properties (place, area, bedrooms, bathrooms, nearby_hospitals, nearby_colleges, user_id) VALUES
('Downtown', '1200 sqft', 3, 2, 'City Hospital', 'City College', 1),
('Uptown', '1500 sqft', 4, 3, 'Uptown Hospital', 'Uptown College', 1);

-- Inserting an initial buyer user
INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES
('Jane', 'Smith', 'jane@example.com', '0987654321', '$2a$10$7Q0/SVGYYzNvgT98/oiuwO7BNHLf9Q0.X5N5IXaMK01/lBbT0bqaC', 'BUYER'); -- password: password
