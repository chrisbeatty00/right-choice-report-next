import styles from "@right-choice/styles/Deposit.module.css";
import type { TransactionData } from "../types";

const TRUST_ACCOUNT_ID = 916;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-CA", { dateStyle: "long" });

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (amount: string) =>
  currencyFormatter.format(parseInt(amount, 10));

function Deposit({ transactionData }: { transactionData: TransactionData }) {
  const trustAccountMapping = transactionData.included.find((included) => {
    return (
      included.type === "bankAccountMapping" &&
      included.id === TRUST_ACCOUNT_ID.toString()
    );
  });

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
          {transactionData.data
            .filter(
              (transaction) =>
                transaction.attributes.type === "TrustDepositTransaction" &&
                transaction.relationships.bankAccountMapping.data.id ===
                  TRUST_ACCOUNT_ID.toString()
            )
            .map((transaction) => (
              <tr key={transaction.id}>
                <td>{trustAccountMapping?.attributes.name}</td>
                <td>{formatDate(transaction.attributes.createdAt)}</td>
                <td>{formatCurrency(transaction.attributes.amount)}</td>
                <td></td>
                <td>The Right Choice Brokerage Ltd</td>
                <td>{transaction.attributes.contactName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Deposit;
