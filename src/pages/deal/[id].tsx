import Head from "next/head";
import styles from "@right-choice/styles/Deal.module.css";
import deal from "../../deal.js";
import accesses from "../../accesses.js";
import profiles from "../../profiles.js";
import Property from "../../components/Property";
import Contacts from "../../components/Contacts";
import type { Contact, Deal } from "../../types.js";
import { getContacts } from "../../lib/getAddress.js";
import OutsideBrokers from "../../components/OutsideBrokers";

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

export function getStaticProps() {
  const deal = getDeal(FULL_DEAL_NUMBER);
  const contacts = fetchContacts(deal.id);

  return {
    props: {
      deal,
      contacts,
    },
  };
}

type DealProps = {
  deal: any;
  contacts: Record<string, Contact>;
};

export default function DealReport({ deal, contacts = {} }: DealProps) {
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
        </div>
      </main>
    </>
  );
}
