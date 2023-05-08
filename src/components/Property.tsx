import styles from "@right-choice/styles/Property.module.css";
import type { Deal } from "../types";

enum Side {
  LIST = "list",
  BUY = "sell",
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-CA", { dateStyle: "long" });

function Property({ deal }: { deal: Deal }) {
  const {
    propertyAddress = "",
    soldAt,
    propertyType,
    owningSide,
    closedAt,
    mlsNumber,
    fullDealNumber,
  } = deal;
  return (
    <table className={styles.property}>
      <tbody>
        <tr className={styles.strong}>
          <td>Property:</td>
          <td>{propertyAddress.replace(/, CAN$/, "")}</td>
          <td>Trade Number:</td>
          <td>{fullDealNumber}</td>
        </tr>
        <tr>
          <td>Property Type:</td>
          <td colSpan={3} className={styles.capitalize}>
            {propertyType}
          </td>
        </tr>
        <tr>
          <td>Side:</td>
          <td>{owningSide === Side.LIST ? "Listing" : "Buying"}</td>
          <td>MLS Number:</td>
          <td>{mlsNumber}</td>
        </tr>
        <tr>
          <td>Offer Date:</td>
          <td>{formatDate(soldAt)}</td>
          <td>Close Date:</td>
          <td>{formatDate(closedAt)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Property;
