USE sqlreact;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    price DECIMAL(10,2),
    quantity INT,
    name VARCHAR(45),
    describe VARCHAR(150), 
    PRIMARY KEY (id)
)
INSERT INTO users(userName, password, createdAt, updatedAt)
VALUES('John', 'yoyo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO products(name, description, price, quantity, createdAt, updatedAt)
VALUES('Toy Horse', 'Collectors item for serious hobbiests', 95, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Micro Power Generators', 'Experiment At Your Own Risk...', 44, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Robotic Biceps', 'If youre feeling weak give these a go', 88, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hovering Computer Mouse', 'Why not?', 25, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);