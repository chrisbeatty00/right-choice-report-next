import styles from "@right-choice/styles/Financial.module.css";
import type { FinancialData, TransactionData, Deal } from "../types";
import type { Splits, Split } from "../lib/getSplits";
import cx from "classnames";
import { CSSProperties } from "react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (amount: string | undefined) => {
  if (!amount) return "-";

  const value = parseFloat(amount);
  return value === 0 ? "-" : currencyFormatter.format(value).replace(/^\$/, "");
};

const formatSplit = (split: Split): Split => ({
  ...split,
  list: formatCurrency(split.list),
  sell: formatCurrency(split.sell),
  subtotal: formatCurrency(split.subtotal),
  tax: formatCurrency(split.tax),
  total: formatCurrency(split.total),
});

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

function IncomeTable({ splits }: { splits: Splits }) {
  const [commission] = splits.commission;
  return (
    <table className={styles.financial}>
      <tbody>
        <HeadingRow />
        <FinancialRow split={formatSplit(commission)} />
        <TitleRow title="Expenses" />
        {splits.expenses.map(formatSplit).map((split) => (
          <FinancialRow
            key={split.id}
            split={{
              ...split,
              name:
                (split.side === "list" ? "Referral-" : "") +
                split.organizationName,
            }}
          />
        ))}
        <FinancialRow
          split={{ name: "Base Office Commission" } as Split}
          borderTop="thin"
        />
        <TitleRow title="Agents" />
        {splits.agents.map(formatSplit).map((split) => (
          <FinancialRow key={split.id} split={split} />
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

function FinancialRow({
  split,
  borderTop,
}: {
  split: Partial<Split>;
  borderTop?: "thin" | "heavy" | undefined;
}) {
  const { name, sell, list, subtotal, tax, total } = split;

  const borders = {
    thin: "1px solid black",
    heavy: "3px solid black",
  };

  const style: CSSProperties = {};
  if (borderTop) {
    style.borderTop = borders[borderTop];
  }

  return (
    <tr>
      <td>{name}</td>
      <td className={styles.currency} style={style}>
        {list}
      </td>
      <td className={styles.currency} style={style}>
        {sell}
      </td>
      <td className={styles.currency} style={style}>
        {subtotal}
      </td>
      <td className={styles.currency} style={style}>
        {tax}
      </td>
      <td className={styles.currency} style={style}>
        {total}
      </td>
    </tr>
  );
}

function TitleRow({ title }: { title: string }) {
  return (
    <tr>
      <th colSpan={6}>{title}</th>
    </tr>
  );
}

function HeadingRow() {
  return (
    <tr>
      <th>Income</th>
      <th>Listing</th>
      <th>Selling</th>
      <th>Sub-Total</th>
      <th>HST</th>
      <th>Total</th>
    </tr>
  );
}

export default Financial;
