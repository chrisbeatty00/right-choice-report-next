import styles from "@right-choice/styles/Contacts.module.css";
import { Contact, Address } from "../types";
import toNoCase from "to-no-case";

export type ContactProps = {
  contacts: Record<string, Contact>;
};

const formatAddress = (address: Address) => {
  if (address) {
    const { addressLineOne, city, province, postalCode } = address;

    if (addressLineOne && city && province && postalCode) {
      return `${addressLineOne}, ${city}, ${province}, ${postalCode}`;
    }
  }
};

const sort = (a: Contact, b: Contact) => {
  if (a.side < b.side) {
    return 1;
  }
  if (a.side > b.side) {
    return -1;
  }
  return 0;
};

function Contacts({ contacts = {} }: ContactProps) {
  return (
    <>
      <div>
        <h1>Contacts:</h1>
      </div>
      <table className={styles.table} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <th style={{ width: "22%" }}>Type</th>
            <th style={{ width: "10%" }} className={styles.small}>
              End
            </th>
            <th style={{ width: "32%" }}>Name</th>
            <th style={{ width: "40%" }}>Address</th>
          </tr>
          {Object.values(contacts)
            .filter((contact) => contact.role !== "outside_brokerage")
            .filter((contact) => contact.role !== "agent")
            .sort(sort)
            .map((contact) => (
              <tr key={contact.profileId}>
                <td className={styles.capitalize}>{toNoCase(contact.role)}</td>
                <td className={styles.center}>
                  {contact.side === "list" ? "L" : "B"}
                </td>
                <td>{contact.name}</td>
                <td>{formatAddress(contact.address)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Contacts;
