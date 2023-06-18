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
  organizationName: string;
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
  sellPrice: string;
};

export type Broker = {
  name: string;
  type: string;
  end: string;
  agent: string;
};

export type Transaction = {
  id: string;
  bankTransaction: "bankTransaction";
  attributes: {
    amount: string;
    contactName: string;
    createdAt: string;
    description: string;
    displayName: string;
    postedAt: string;
    type: "TrustDepositTransaction";
  };
  relationships: {
    bankAccountMapping: {
      data: {
        id: string;
      };
    };
  };
};

export type BankAccountMapping = {
  id: string;
  type: "bankAccountMapping";
  attributes: {
    name: string;
  };
};

export type TransactionData = {
  data: Transaction[];
  included: BankAccountMapping[];
};

export type FinancialData = {
  data?: {
    id: string;
    type: string;
    attributes: {
      listingBonusOrFlatFee: string;
      sellBonusOrFlatFee: string;
      listingOnTheFirstPercent: string;
      sellOnTheFirstPercent: string;
      listTotalNet: string;
      sellTotalNet: string;
      totalNet: string;
      totalTax: string;
      totalGross: string;
    };
  };
};

export type Payout = {
  id: string;
  type: "payout";
  attributes: {
    amount: string;
    paid: boolean;
    payable: boolean;
    payableName: string;
    payeeName: string;
    payeeOrganization: string;
    external: boolean;
    side: "sell" | "list";
  };
};

export type PayoutData = {
  data?: Payout[];
};

export type Split = {
  id: string;
  type: "split";
  attributes: {
    side: "list" | "sell";
    net: "string";
    tax: "string";
    total: "string";
  };
  relationships: {
    dealAccess: {
      data: {
        id: "string";
        type: "dealAccess";
      };
    };
  };
};

export type DealAccess = {
  id: "string";
  type: "dealAccess";
  attributes: {
    role: "agent" | "outside_brokerage";
    side: "list" | "sell";
    profileId: number;
    dealId: number;
  };
};

export type SplitData = {
  data: Split[];
  included: DealAccess[];
};
