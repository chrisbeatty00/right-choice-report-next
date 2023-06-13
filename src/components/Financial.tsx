import styles from "@right-choice/styles/Financial.module.css";
import type { FinancialData, TransactionData, Deal } from "../types";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (amount: string | undefined) => {
  if (!amount) return "-";

  const value = parseInt(amount, 10);
  return value === 0 ? "-" : currencyFormatter.format(value);
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
  transactionData = [],
  deal,
}: {
  financialData: FinancialData;
  transactionData: TransactionData;
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
    </>
  );
}

export default Financial;
