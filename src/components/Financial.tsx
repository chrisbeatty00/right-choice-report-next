import styles from "@right-choice/styles/Financial.module.css";
import type { FinancialData, TransactionData, SplitData, Deal } from "../types";
import type { Splits } from "../lib/getSplits";
import cx from "classnames";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (amount: string | undefined) => {
  if (!amount) return "-";

  const value = parseFloat(amount);
  return value === 0 ? "-" : currencyFormatter.format(value).replace(/^\$/, "");
};

const calculateRates = (
  listOnTheFirstPercent: string | undefined,
  sellOnTheFirstPercent: string | undefined
) => {
  if (!listOnTheFirstPercent || !sellOnTheFirstPercent) return ["-", "-"];

  const list = parseFloat(listOnTheFirstPercent);
  const sell = parseFloat(sellOnTheFirstPercent);

  const listRate = `${list - sell}%`;
  const sellRate = `${sell}%`;

  return [listRate, sellRate];
};

function Financial({
  financialData = {},
  transactionData,
  splits,
  deal,
}: {
  financialData: FinancialData;
  transactionData: TransactionData;
  splits: Splits;
  deal: Deal;
}) {
  const listFlatFee = formatCurrency(
    financialData?.data?.attributes?.listingBonusOrFlatFee
  );
  const sellFlatFee = formatCurrency(
    financialData?.data?.attributes.sellBonusOrFlatFee
  );

  const [listRate, sellRate] = calculateRates(
    financialData?.data?.attributes.listingOnTheFirstPercent,
    financialData?.data?.attributes.sellOnTheFirstPercent
  );

  const accountsReceivableTransaction = transactionData.data.find(
    (transaction) => {
      return (
        transaction.attributes.type === "TrustDepositTransaction" &&
        transaction.relationships.bankAccountMapping.data.id === "915"
      );
    }
  );

  return (
    <>
      <div className={styles.heading}>
        <div>
          <h1>Financial:</h1>
          <span style={{ fontWeight: "bold" }}>Selling Price:</span>
          <span style={{ paddingLeft: "1em" }}>
            {formatCurrency(deal.sellPrice)}
          </span>
        </div>
        <div>
          <table className={styles.feeTable}>
            <tbody>
              <tr>
                <th>List Flat Fee:</th>
                <td colSpan={3}>{listFlatFee}</td>
              </tr>
              <tr>
                <th>Sell Flat Fee:</th>
                <td colSpan={3}>{sellFlatFee}</td>
              </tr>
              <tr>
                <th>List Rate:</th>
                <td colSpan={3}>{listRate}</td>
              </tr>
              <tr>
                <th>Sell Rate:</th>
                <td>{sellRate}</td>
                <th>A/R:</th>
                <td>
                  {formatCurrency(
                    accountsReceivableTransaction?.attributes.amount
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <IncomeTable {...financialData.data?.attributes} splits={splits} />
    </>
  );
}

function IncomeTable({
  listTotalNet,
  sellTotalNet,
  totalNet,
  totalTax,
  totalGross,
  splits,
}: {
  listTotalNet?: string | undefined;
  sellTotalNet?: string | undefined;
  totalNet?: string | undefined;
  totalTax?: string | undefined;
  totalGross?: string | undefined;
  splits: Splits;
}) {
  return (
    <table className={styles.financial}>
      <tbody>
        <tr>
          <th>Income</th>
          <th>Listing</th>
          <th>Selling</th>
          <th>Sub-Total</th>
          <th>HST</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>Commission</td>
          <td className={styles.currency}>{formatCurrency(listTotalNet)}</td>
          <td className={styles.currency}>{formatCurrency(sellTotalNet)}</td>
          <td className={styles.currency}>{formatCurrency(totalNet)}</td>
          <td className={styles.currency}>{formatCurrency(totalTax)}</td>
          <td className={styles.currency}>{formatCurrency(totalGross)}</td>
        </tr>
        <tr>
          <th colSpan={6}>Expenses</th>
        </tr>
        {splits.expenses.map((split) => (
          <tr key={split.id}>
            <td>
              {split.side === "list" ? "Referral-" : ""}
              {split.organizationName}
            </td>
            <td className={styles.currency}>-</td>
            <td className={styles.currency}>{split.net}</td>
            <td className={styles.currency}>{split.net}</td>
            <td className={styles.currency}>{split.tax}</td>
            <td className={styles.currency}>{split.total}</td>
          </tr>
        ))}
        {splits.expenses.length > 0 && (
          <tr>
            <td>Base Office Commission</td>
            <td className={styles.borderTop}></td>
            <td className={styles.borderTop}></td>
            <td className={styles.borderTop}></td>
            <td className={styles.borderTop}></td>
            <td className={styles.borderTop}></td>
          </tr>
        )}
        <tr>
          <th colSpan={6}>Agents</th>
        </tr>
        {splits.agents.map((split) => (
          <tr key={split.id}>
            <td>{split.name}</td>
            <td className={styles.currency}>{split.net}</td>
            <td className={styles.currency}>-</td>
            <td className={styles.currency}>{split.net}</td>
            <td className={styles.currency}>{split.tax}</td>
            <td className={styles.currency}>{split.total}</td>
          </tr>
        ))}
        {splits.agents.length > 0 && (
          <tr>
            <td></td>
            <td className={styles.borderBottomHeavy}></td>
            <td className={cx(styles.currency, styles.borderBottomHeavy)}>-</td>
            <td className={cx(styles.currency, styles.borderBottomHeavy)}>-</td>
            <td className={cx(styles.currency, styles.borderBottomHeavy)}>-</td>
            <td className={cx(styles.currency, styles.borderBottomHeavy)}>-</td>
          </tr>
        )}
        <tr>
          <th colSpan={6}>Net to Office</th>
        </tr>
      </tbody>
    </table>
  );
}

export default Financial;
