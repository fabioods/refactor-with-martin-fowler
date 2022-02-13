import { statement } from "./statment";
import invoices from "./assets/invoices.json";
import plays from "./assets/play.json";

for (let invoice of invoices) {
  console.log(statement(invoice, plays));
}
