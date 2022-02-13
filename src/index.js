const { statement } = require("./statment");
const invoices = require("./assets/invoices.json");
const play = require("./assets/play.json");

for (let invoice of invoices) {
  console.log(statement(invoice, play));
}
