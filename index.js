const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const filePath = path.join(__dirname, 'data.csv');

let balance = 0;
let maxTransaction = { id: null, monto: 0 };
let transactionCount = { creditCard: 0, debitCard: 0 };

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    const { id, tipo, monto } = row;
    const amount = parseFloat(monto);

    if (tipo === 'Crédito') {
      balance += amount;
      transactionCount.creditCard++;
    } else if (tipo === 'Débito') {
      balance -= amount;
      transactionCount.debitCard++;
    }

    if (amount > maxTransaction.monto) {
      maxTransaction = { id, monto: amount };
    }
  })
  .on('end', () => {
    console.log('Reporte de Transacciones');
    console.log('---------------------------------------------');
    console.log(`Balance Final: ${balance.toFixed(2)}`);
    console.log(`Transacción de Mayor Monto: ID ${maxTransaction.id} - ${maxTransaction.monto.toFixed(2)}`);
    console.log(`Conteo de Transacciones: Crédito: ${transactionCount.creditCard} Débito: ${transactionCount.debitCard}`);
  })
  .on('error', (err) => {
    console.error('Error al leer el archivo:', err.message);
  });
