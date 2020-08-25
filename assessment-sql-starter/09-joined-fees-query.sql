SELECT customers.name, invoices.invoice_number, fees.description, fees.amount
FROM fees
JOIN invoices ON (invoices.id = fees.invoice_id)
JOIN customers ON (invoices.customer_id = customers.id)
ORDER BY customers.name;
