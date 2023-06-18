import Head from "next/head";
import styles from "@right-choice/styles/Deal.module.css";
import Property from "../../components/Property";
import Contacts from "../../components/Contacts";
import type {
  Contact,
  Deal,
  TransactionData,
  FinancialData,
  SplitData,
} from "../../types.js";
import { getContacts } from "../../lib/getAddress.js";
import OutsideBrokers from "../../components/OutsideBrokers";
import Deposit from "../../components/Deposit";
import Financial from "../../components/Financial";
// data
import deal from "../../deal.js";
import transactions from "../../transactions.js";
import financials from "../../financials.js";
import splits from "../../splits.js";

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

function getTransactions(dealId: string): TransactionData {
  return transactions as unknown as TransactionData;
}

function getFinancials(dealId: string): FinancialData {
  return financials as unknown as FinancialData;
}

function getSplits(dealId: string): SplitData {
  return splits as unknown as SplitData;
}

export function getStaticProps() {
  const deal = getDeal(FULL_DEAL_NUMBER);
  const contacts = fetchContacts(deal.id);
  const transactionData = getTransactions(deal.id);
  const financialData = getFinancials(deal.id);
  const splitData = getSplits(deal.id);

  return {
    props: {
      deal,
      contacts,
      transactionData,
      financialData,
      splitData,
    },
  };
}

type DealProps = {
  deal: any;
  contacts: Record<string, Contact>;
  transactionData: TransactionData;
  financialData: FinancialData;
  splitData: SplitData;
};

export default function DealReport({
  deal,
  contacts = {},
  transactionData = {
    data: [],
    included: [],
  },
  financialData = {},
  splitData = {},
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
          <Deposit transactionData={transactionData} />
          <hr className={styles.separator} />
          <Financial
            financialData={financialData}
            deal={deal}
            transactionData={transactionData}
            splitData={splitData}
          />
        </div>
      </main>
    </>
  );
}
