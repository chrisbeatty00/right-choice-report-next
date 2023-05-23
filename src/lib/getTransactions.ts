import transactions from "../transactions";
import type { Transaction } from "../types";

export function getTransactions(dealId: string): Transaction[] {
  const data = transactions.data as unknown;
  return data as Transaction[];
}
