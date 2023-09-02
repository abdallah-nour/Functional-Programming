import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { Account, AccountFrozenError, Cart, NotEnoughBalanceError } from "./types";

export const pay = (amountToPay: number) =>
  (account: Account): E.Either<
    AccountFrozenError | NotEnoughBalanceError, Account
  > => {
    if (account.frozen)
      return E.left(Errors.AccountFrozen)
    else if (account.balance < amountToPay)
      return E.left(Errors.NotEnoughBalance);
    else
      return E.right({
        ...account,
        balance: account.balance - amountToPay,
      });
  }

export const checkout = (cart: Cart) => (account: Account) => pipe(account, pay(cart.total));

export const Errors: {
  [key in AccountFrozenError['type'] | NotEnoughBalanceError['type']]:
  AccountFrozenError | NotEnoughBalanceError
} = {
  "AccountFrozen": { type: "AccountFrozen", message: "can't pay with frozen account" },
  "NotEnoughBalance": { type: "NotEnoughBalance", message: "can't pay with frozen account" }
}
