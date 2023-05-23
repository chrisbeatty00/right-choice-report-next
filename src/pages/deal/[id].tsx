import Head from "next/head";
import styles from "@right-choice/styles/Deal.module.css";
import deal from "../../deal.js";
import accesses from "../../accesses.js";
import transactions from "../../transactions.js";
import Property from "../../components/Property";
import Contacts from "../../components/Contacts";
import type { Contact, Deal, Transaction } from "../../types.js";
import { getContacts } from "../../lib/getAddress.js";
import OutsideBrokers from "../../components/OutsideBrokers";
import Deposit from "../../components/Deposit";

const FULL_DEAL_NUMBER = "419-2021-0305";

export function getStaticPaths() {
  return { paths: [], fallback: false };
}

function fetchContacts(dealId: string): Contact[] {
  return getContacts() as Contact[];
}

function getDeal(fullDealNumber: string): Deal {
  return {
    id: deal.id,
    ...deal.attributes,
  };
}

export function getTransactions(dealId: string): Transaction[] {
  const data = transactions.data as unknown;
  return data as Transaction[];
}

export function getStaticProps() {
  const deal = getDeal(FULL_DEAL_NUMBER);
  const contacts = fetchContacts(deal.id);
  const transactions = getTransactions(deal.id);

  return {
    props: {
      deal,
      contacts,
      transactions,
    },
  };
}

type DealProps = {
  deal: any;
  contacts: Record<string, Contact>;
  transactions: Transaction[];
};

export default function DealReport({
  deal,
  contacts = {},
  transactions = [],
}: DealProps) {
  if (!deal || !contacts) {
    return <div>nothing</div>;
  }

  return (
    <>
      <Head>
        <title>Deal Report</title>
      </Head>
      <main>
        <div>
          <h1 className={styles.heading}>The Right Choice Realty</h1>
          <Property deal={deal} />
          <Contacts contacts={contacts} />
          <OutsideBrokers contacts={contacts} />
          <hr className={styles.separator} />
          <Deposit transactions={transactions} />
        </div>
      </main>
    </>
  );
}
