import styles from "@right-choice/styles/Contacts.module.css";
import type { Contact } from "../types";
import toNoCase from "to-no-case";
import cx from "classnames";

type Props = {
  contacts: Record<string, Contact>;
};

function OutsideBrokers({ contacts }: Props) {
  console.dir(contacts);
  return (
    <>
      <div>
        <h1>Outside Brokers:</h1>
      </div>
      <table className={styles.table} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <th style={{ width: "22%" }}>Type</th>
            <th style={{ width: "10%" }} className={styles.small}>
              End
            </th>
            <th style={{ width: "32%" }}>Name</th>
            <th style={{ width: "40%" }}>Agent</th>
          </tr>
          {Object.values(contacts)
            .filter((contact) => contact.role === "outside_brokerage")
            .filter((contact) => contact.side === "sell")
            .map((contact) => (
              <tr key={contact.name}>
                <td className={styles.capitalize}>{toNoCase(contact.role)}</td>
                <td className={cx(styles.center, styles.capitalize)}>
                  {contact.side.charAt(0)}
                </td>
                <td>{contact.organizationName}</td>
                <td>{contact.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default OutsideBrokers;
