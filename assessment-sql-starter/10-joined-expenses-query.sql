SELECT customers.name, invoices.invoice_number, expenses.description, expenses.number_of_units, expenses.rate
FROM expenses
INNER JOIN invoices ON (invoices.id = expenses.invoice_id)
INNER JOIN customers ON (invoices.customer_id = customers.id)
ORDER BY customers.name;
