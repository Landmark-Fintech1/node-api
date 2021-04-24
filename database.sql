CREATE DATABASE api_db;
CREATE USER 'api_user'@'%' IDENTIFIED WITH mysql_native_password BY 'api_pass_123';
GRANT ALL ON api_db.* TO 'api_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE api_db;

CREATE TABLE products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO products (name) VALUES ('Product 1'),
('Product 2'),
('Product 3'),
('Product 4'),
('Product 5'),
('Product 6');

-- UPDATE products SET name = 'Product six' WHERE id = 6;
-- DELETE FROM products WHERE id = 3;

-- DROP DATABASE api_db;
-- DROP USER api_user;
