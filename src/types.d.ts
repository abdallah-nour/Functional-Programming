export type Account = Readonly<{
  balance: number
  frozen: boolean
}>;

export type Item = Readonly<{
  name: string
  price: number
}>;

export type Cart = Readonly<{
  items: Item[]
  total: number
}>;

export type AccountFrozenError = Readonly<{ type: "AccountFrozen", message: string }>
export type NotEnoughBalanceError = Readonly<{ type: "NotEnoughBalance", message: string }>