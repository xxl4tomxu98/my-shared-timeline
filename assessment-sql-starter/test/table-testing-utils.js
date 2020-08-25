const { Client } = require('pg');
const { expect } = require('chai');

module.exports.testCharacterVaryingColumn = async (client, tableName, columnName, length, nullable, isUnique) => {
  const { rows } = await client.query(`
    select c.data_type as "dataType", c.is_nullable as "isNullable", c.character_maximum_length as "maxLength", tc.constraint_type as "constraintType"
    from information_schema.columns c
    left join information_schema.constraint_column_usage ccu ON (ccu.column_name = c.column_name and ccu.table_name = c.table_name)
    left join information_schema.table_constraints tc on (ccu.constraint_name = tc.constraint_name)
    where c.table_name = $1
    and c.column_name = $2
  `, [tableName, columnName]);

  for (let row of rows) {
    const { dataType, isNullable, maxLength, constraintType } = row;
    const checkNull = nullable ? isNullable === 'YES' : isNullable === 'NO';
    const checkUnique = !isUnique || constraintType === 'UNIQUE';

    if (dataType === 'character varying' && checkNull && maxLength === length && checkUnique) {
      return true;
    }
  }
  return false;
}

module.exports.testNumeric = async (client, tableName, columnName, precision, scale, nullable) => {
  const { rows } = await client.query(`
    select c.data_type as "dataType", c.is_nullable as "isNullable", c.numeric_precision as "numericPrecision", c.numeric_scale as "numericScale"
    from information_schema.columns c
    left join information_schema.constraint_column_usage ccu ON (ccu.column_name = c.column_name and ccu.table_name = c.table_name)
    left join information_schema.table_constraints tc on (ccu.constraint_name = tc.constraint_name)
    where c.table_name = $1
    and c.column_name = $2
  `, [tableName, columnName]);

  for (let row of rows) {
    const { dataType, isNullable, numericPrecision, numericScale } = row;
    const checkNull = nullable ? isNullable === 'YES' : isNullable === 'NO';

    if (dataType === 'numeric' && checkNull && precision === numericPrecision && scale === numericScale) {
      return true;
    }
  }
  return false;
}

module.exports.testTimestamp = async (client, tableName, columnName, nullable) => {
  const { rows } = await client.query(`
    select c.data_type as "dataType", c.is_nullable as "isNullable"
    from information_schema.columns c
    left join information_schema.constraint_column_usage ccu ON (ccu.column_name = c.column_name and ccu.table_name = c.table_name)
    left join information_schema.table_constraints tc on (ccu.constraint_name = tc.constraint_name)
    where c.table_name = $1
    and c.column_name = $2
  `, [tableName, columnName]);

  for (let row of rows) {
    const { dataType, isNullable } = row;
    const checkNull = nullable ? isNullable === 'YES' : isNullable === 'NO';

    if (dataType.startsWith('timestamp') && checkNull) {
      return true;
    }
  }
  return false;
}

module.exports.testSerialPrimaryKey = async (client, tableName, columnName) => {
  const { rows } = await client.query(`
    select c.data_type as "dataType", c.is_nullable as "isNullable", c.column_default as "defaultValue", tc.constraint_type as "constraintType"
    from information_schema.constraint_column_usage ccu
    join information_schema.columns c ON (ccu.column_name = c.column_name and ccu.table_name = c.table_name)
    join information_schema.table_constraints tc on (ccu.constraint_name = tc.constraint_name)
    where ccu.table_name = $1
    and ccu.column_name = $2
  `, [tableName, columnName])

  for (let row of rows) {
    const { dataType, isNullable, defaultValue, constraintType } = row;
    const nullable = isNullable === 'YES';
    const isPrimaryKey = constraintType === 'PRIMARY KEY';
    const hasDefaultSequence = defaultValue.startsWith('nextval');

    if (dataType === 'integer' && !nullable && isPrimaryKey && hasDefaultSequence) {
      return true;
    }
  }
  return false;
};

module.exports.testForeignKey = async (client, tableName, columnName, otherTableName, otherColumnName, nullable) => {
  const { rows } = await client.query(`
    select c.data_type as "dataType", c.is_nullable as "isNullable", ccu.table_name as "referencedTable", ccu.column_name as "referencedColumn"
    from information_schema.columns c
    join information_schema.table_constraints tc on (c.table_name = tc.table_name)
    join information_schema.key_column_usage kcu ON (kcu.column_name = c.column_name and kcu.table_name = c.table_name)
    join information_schema.constraint_column_usage ccu ON (ccu.constraint_name = kcu.constraint_name)
    where c.table_name = $1
    and c.column_name = $2
    and tc.constraint_type = 'FOREIGN KEY'
  `, [tableName, columnName])

  for (let row of rows) {
    const { dataType, isNullable, referencedTable, referencedColumn } = row;
    const nullable = isNullable === 'YES';

    if (dataType === 'integer' && !nullable && referencedColumn === otherColumnName && referencedTable === otherTableName) {
      return true;
    }
  }
  return false;
}

module.exports.createClient = () => {
  return new Client({
    host: 'localhost',
    user: 'invoice_app',
    database: 'invoice_app_development',
    password: 'invoice_app'
  });
};
