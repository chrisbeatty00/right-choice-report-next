import splits from "../splits";
import accesses from "../accesses";
import profiles from "../profiles";
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

export function getSplits(dealId: string): Split[] {
  const expenses = splits.data
    .map((split) => {
      const dealAccess = accesses.data.find(
        (access) => access.id === split.relationships.dealAccess.data.id
      );

      if (!dealAccess) throw new Error("Deal access not found");

      const profile = profiles.data.find(
        (profile) => profile.id === dealAccess.relationships.profile.data.id
      );

      if (!profile) throw new Error("Profile not found");

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
    })
    .filter((split) => split.role === "outside_brokerage")
    .sort((a, b) => a.side.localeCompare(b.side))
    .reverse();

  return expenses;
}
