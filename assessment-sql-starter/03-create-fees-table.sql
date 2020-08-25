
CREATE TABLE fees (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(100) NOT NULL,
  amount NUMERIC(10,3) NOT NULL,
  invoice_id INTEGER NOT NULL,
  FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);
