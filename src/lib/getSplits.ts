import splitData from "../splits";
import accessesData from "../accesses";
import profilesData from "../profiles";
import formatCurrency from "./formatCurrency";

export type Split = {
  id: string;
  name: string;
  organizationName: string | null;
  role: string;
  side: string;
  net: string;
  tax: string;
  total: string;
};

export type Splits = {
  commission: Split[];
  expenses: Split[];
  agents: Split[];
};

export function getSplits(dealId: string): Splits {
  const commission = [] as Split[];

  const splits: Split[] = splitData.data.map((split) => {
    const dealAccess = accessesData.data.find(
      (access) => access.id === split.relationships.dealAccess.data.id
    );

    if (!dealAccess) throw new Error(`Deal access not found: ${dealAccess}`);

    const profile = profilesData.data.find(
      (profile) => profile.id === dealAccess.relationships.profile.data.id
    );

    if (!profile) throw new Error(`Profile not found: ${profile}`);

    return {
      id: split.id,
      name: profile.attributes.name,
      organizationName: profile.attributes.organizationName,
      role: dealAccess.attributes.role,
      side: dealAccess.attributes.side,
      net: formatCurrency(split.attributes.net),
      tax: formatCurrency(split.attributes.tax),
      total: formatCurrency(split.attributes.total),
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
