import styles from "@right-choice/styles/Contacts.module.css";
import { Side, Role, Contact, Address } from "../types";
import toNoCase from "to-no-case";

export type ContactProps = {
  contacts: Contact[];
};

const formatAddress = (address: Address) => {
  if (address) {
    const { addressLineOne, city, province, postalCode } = address;

    if (addressLineOne && city && province && postalCode) {
      return `${addressLineOne}, ${city}, ${province}, ${postalCode}`;
    }
  }
};

function Contacts({ contacts = [] }: ContactProps) {
  return (
    <>
      <div>
        <h1>Contacts:</h1>
      </div>
      <table className={styles.table} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <th>Type</th>
            <th className={styles.small}>End</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
          {Object.values(contacts).map((contact) => (
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
