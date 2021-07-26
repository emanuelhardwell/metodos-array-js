// El map no modifica el Array,

const numbers = [1, 2, 3, 4, 5];

// multiplicacion
const multiplicacion = numbers.map((number) => {
  return number * 2;
});

// multiplicacion 2
const multiplicacion1 = numbers.map((number) => number * 2);

// console.log(multiplicacion);
// console.log(multiplicacion1);

const orders = [
  {
    customerName: "Emanuel",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Juan",
    total: 70,
    delivered: false,
  },
  {
    customerName: "Josue",
    total: 40,
    delivered: false,
  },
  {
    customerName: "Shalom",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Carlos",
    total: 45,
    delivered: true,
  },
  {
    customerName: "Noe",
    total: 25,
    delivered: true,
  },
];

/* Conseguir todos los nombres */
const names = orders.map((item) => item.customerName);
// console.log(names);

/* Conseguir todos los nombres */
const totals = orders.map((item) => item.total);
// console.log(totals);

/* agergar un nuevo Atributo a los objetos de ORDERS */

const newItemsOrders = orders.map((item) => {
  return {
    ...item,
    iva: (item.total * 16) / 100,
  };
});

// console.log(newItemsOrders);
// console.log("-".repeat(80));
// console.log(orders);

// Map and Filter juntos -- Sumar las entregas hechas
const deliveredTrue = orders
  .map((item) => item.delivered)
  .filter((item) => item === true)
  .reduce((count, item) => count + item, 0);

console.log(deliveredTrue);

// Map and Filter juntos -- Sumar las ordenes mayor a $ 50.00
const totalBig = orders
  .map((item) => item.total)
  .filter((item) => item > 50)
  .reduce((count, item) => count + item, 0);

console.log(totalBig);
