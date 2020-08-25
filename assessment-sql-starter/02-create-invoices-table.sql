CREATE TABLE invoices (
  id SERIAL PRIMARY KEY NOT NULL,
  invoice_number VARCHAR(20) UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL,
  paid_on TIMESTAMP,
  customer_id INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
