CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(

    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    product_price INTEGER(10) default 0,
    department_name VARCHAR (100) NOT NULL,
    item_id INTEGER(10) default 0,
    stock_quantity INTEGER(10) default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Textbook", "Education", 45.00, 1);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("T-shirt", 5.00, "Clothing", 1245, 15);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Fake Hair", 155.00, "Beauty", 27574, 12);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Video Game", 55.00, "Entertainment", 3655, 2);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Beatz by Dre", 155.00, "Entertainment", 1456, 80);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Apple Laptop", 345.00, "Technology", 1123, 1);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Smart T.V.", 455.00, "Entertainment", 9876, 2);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Google Mini", 35.00, "Entertainment", 7865, 4);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("I phone X", 895.00, "Technology", 1278, 1);

INSERT INTO products (product_name, product_price, department_name, item_id, stock_quantity)
VALUES ("Stunna shades", 5.00, "Clothing", 1256, 10);