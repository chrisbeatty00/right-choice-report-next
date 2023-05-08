export type Side = "sell" | "list";

export type Role =
  | "lawyer"
  | "outside_brokerage"
  | "agent"
  | "buyer"
  | "seller";

export type Contact = {
  profileId: number;
  role: Role;
  side: Side;
  name: string;
  email: string;
  firstEmail: string;
  address: Address;
};

export type Address = {
  addressLineOne: string;
  city: string;
  province: string;
  postalCode: string;
};

export type Deal = {
  id: string;
  propertyAddress: string;
  soldAt: string;
  propertyType: string;
  owningSide: string;
  closedAt: string;
  mlsNumber: string;
  fullDealNumber: string;
};
