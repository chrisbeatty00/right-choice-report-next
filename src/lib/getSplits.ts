import splitData from "../splits";
import accessesData from "../accesses";
import profilesData from "../profiles";
import financialData from "../financials";

export type Split = {
  id: string;
  name: string;
  organizationName: string | null;
  role: string;
  side: string;
  list: string;
  sell: string;
  subtotal: string;
  tax: string;
  total: string;
};

export type Splits = {
  commission: Split[];
  expenses: Split[];
  agents: Split[];
};

export function getSplits(dealId: string): Splits {
  const commission = getComissions(dealId);

  const splits: Split[] = splitData.data.map((split) => {
    const dealAccess = accessesData.data.find(
      (access) => access.id === split.relationships.dealAccess.data.id
    );

    if (!dealAccess) throw new Error(`Deal access not found: ${dealAccess}`);

    const profile = profilesData.data.find(
      (profile) => profile.id === dealAccess.relationships.profile.data.id
    );

    if (!profile) throw new Error(`Profile not found: ${profile}`);

    const { side, role } = dealAccess.attributes;

    return {
      id: split.id,
      name: profile.attributes.name,
      organizationName: profile.attributes.organizationName,
      role,
      side,
      sell:
        role === "outside_brokerage" || side === "sell"
          ? split.attributes.net
          : "0",
      list:
        side === "list" && role !== "outside_brokerage"
          ? split.attributes.net
          : "0",
      subtotal: split.attributes.net, // TODO: This could the sum of sell + list
      tax: split.attributes.tax,
      total: split.attributes.total, // TODO: This could be a sum also but it could be better to use the server value
    };
  });

  const expenses = getExpenses(splits);
  const agents = getAgents(splits);

  return {
    commission,
    expenses,
    agents,
  };
}

function getComissions(dealId: string): Split[] {
  return [
    {
      id: "commission",
      name: "Commission",
      list: financialData.data.attributes.listTotalNet,
      sell: financialData.data.attributes.sellTotalNet,
      subtotal: financialData.data.attributes.totalNet,
      tax: financialData.data.attributes.totalTax,
      total: financialData.data.attributes.totalGross,
      organizationName: "",
      role: "",
      side: "",
    },
  ];
}

function getExpenses(allSplits: Split[]): Split[] {
  return allSplits
    .filter((split) => split.role === "outside_brokerage")
    .sort((a, b) => a.side.localeCompare(b.side))
    .reverse();
}

function getAgents(allSplits: Split[]): Split[] {
  return allSplits
    .filter((split) => split.role === "agent")
    .sort((a, b) => a.side.localeCompare(b.side))
    .reverse();
}
