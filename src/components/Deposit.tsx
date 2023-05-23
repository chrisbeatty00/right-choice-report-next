import styles from "@right-choice/styles/Deposit.module.css";
import type { Transaction } from "../types";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-CA", { dateStyle: "long" });

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const thing = currencyFormatter.resolvedOptions().maximumFractionDigits;

const formatCurrency = (amount: string) =>
  currencyFormatter.format(parseInt(amount, 10));

function Deposit({ transactions = [] }: { transactions: Transaction[] }) {
  console.log(
    transactions.map((t) => [t.attributes.type, t.attributes.contactName])
  );

  return (
    <>
      <h1>Deposit:</h1>
      <table cellSpacing={0} cellPadding={0} className={styles.table}>
        <tbody>
          <tr>
            <th>Bank Account</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Receive Int.</th>
            <th>Held By</th>
            <th>Received From</th>
          </tr>
          {transactions
            .filter(
              (transaction) =>
                transaction.attributes.type === "TrustDepositTransaction"
            )
            .map((transaction) => (
              <tr key={transaction.id}>
                <td>Real Estate Trust</td>
                <td>{formatDate(transaction.attributes.createdAt)}</td>
                <td>{formatCurrency(transaction.attributes.amount)}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{transaction.attributes.contactName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Deposit;
