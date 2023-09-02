import { pipe } from "fp-ts/lib/function";
import { pay } from "./payment-example";
import { Account } from "./types";
import * as E from "fp-ts/Either"

const accountAbdallah: Account = { balance: 5200, frozen: false };
const accountAhmed: Account = { balance: 3900, frozen: false };

console.log(pipe(accountAbdallah, pay(1000), E.match((error) => `${error.type}`, (account) => `Success, Account current balance: $${account.balance}`)))
console.log(pipe(accountAhmed, pay(5000), E.match((error) => `Failed, type of Error: ${error.type}`, (account) => `Success, Account current balance: $${account.balance}`)))
