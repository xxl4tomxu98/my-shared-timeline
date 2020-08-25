
SELECT users.full_name,
  merchant_types.type,
  countries.name,
  merchants.merchant_name
FROM users INNER JOIN merchants ON (users.id = merchants.admin_id)
INNER JOIN merchant_types ON (merchants.merchant_type_id = merchant_types.id)
INNER JOIN countries ON (merchants.country_id = countries.id)
ORDER BY merchant_name;
