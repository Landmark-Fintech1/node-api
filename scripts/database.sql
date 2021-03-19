CREATE DATABASE app1;
CREATE USER 'app1_user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL ON app1.* TO 'app1_user'@'%' WITH GRANT OPTION;

USE app1;

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

UPDATE products SET name = 'Product six' WHERE id = 6;

DELETE FROM products WHERE id = 3;

DROP DATABASE app1;
DROP USER app1_user;
