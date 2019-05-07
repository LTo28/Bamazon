DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DEC(5,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 'face wash', 'cosmetic',  10.99, 5), ('body wash', 'cosmetic',  8.99, 2), ('book1', 'book',  12.99, 15), ('keyboard', 'electronics',  45.99, 1), ('mouse', 'electronics',  35.99, 2), ('hair spray', 'cosmetic',  5.99, 3)