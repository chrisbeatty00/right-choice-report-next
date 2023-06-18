module.exports = {
  data: [
    {
      id: "288829",
      type: "payout",
      attributes: {
        amount: "6753.37",
        companyPayoutSplitsTax: 0,
        paid: true,
        payable: true,
        payableName: "The Right Choice Realty Ltd.",
        payeeName: "The Right Choice Realty Ltd.",
        payeeOrganizationName: "The Right Choice Brokerage",
        profileBalance: "0.0",
        reference: "Deal: 419-2021-0305",
        side: "list",
        transactedAt: "2021-10-01T16:19:31.568-03:00",
        external: false,
        warnings: [],
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        listing: {
          data: null,
        },
        profile: {
          data: {
            id: "212649",
            type: "profile",
          },
        },
        bankAccount: {
          data: null,
        },
        bankAccountMapping: {
          data: {
            id: "915",
            type: "bankAccountMapping",
          },
        },
        payoutOtherIncomes: {
          data: [],
        },
        payoutDeductions: {
          data: [
            {
              id: "589465",
              type: "payoutDeduction",
            },
          ],
        },
        payoutSplits: {
          data: [
            {
              id: "288572",
              type: "payoutSplit",
            },
          ],
        },
        directPayout: {
          data: null,
        },
      },
    },
    {
      id: "288830",
      type: "payout",
      attributes: {
        amount: "10005.0",
        companyPayoutSplitsTax: 0,
        paid: true,
        payable: true,
        payableName: "Keller Williams Capital Realty",
        payeeName: "Keller Williams Capital Realty",
        payeeOrganizationName: "Keller Williams Capital Realty",
        profileBalance: "0.0",
        reference: "Deal: 419-2021-0305",
        side: "sell",
        transactedAt: "2021-10-01T16:13:21.175-03:00",
        external: true,
        warnings: [],
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        listing: {
          data: null,
        },
        profile: {
          data: {
            id: "260676",
            type: "profile",
          },
        },
        bankAccount: {
          data: null,
        },
        bankAccountMapping: {
          data: {
            id: "915",
            type: "bankAccountMapping",
          },
        },
        payoutOtherIncomes: {
          data: [],
        },
        payoutDeductions: {
          data: [],
        },
        payoutSplits: {
          data: [
            {
              id: "288632",
              type: "payoutSplit",
            },
          ],
        },
        directPayout: {
          data: null,
        },
      },
    },
    {
      id: "288891",
      type: "payout",
      attributes: {
        amount: "2501.25",
        companyPayoutSplitsTax: 0,
        paid: true,
        payable: true,
        payableName: "Coldwell Banker Select",
        payeeName: "Coldwell Banker Select",
        payeeOrganizationName: "Coldwell Banker Select",
        profileBalance: "0.0",
        reference: "Deal: 419-2021-0305",
        side: "list",
        transactedAt: "2021-10-01T16:16:53.611-03:00",
        external: true,
        warnings: [],
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        listing: {
          data: null,
        },
        profile: {
          data: {
            id: "226038",
            type: "profile",
          },
        },
        bankAccount: {
          data: null,
        },
        bankAccountMapping: {
          data: {
            id: "915",
            type: "bankAccountMapping",
          },
        },
        payoutOtherIncomes: {
          data: [],
        },
        payoutDeductions: {
          data: [],
        },
        payoutSplits: {
          data: [
            {
              id: "288633",
              type: "payoutSplit",
            },
          ],
        },
        directPayout: {
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: "212649",
      type: "profile",
      attributes: {
        allowDirectPayout: false,
        annualGoal: "0.0",
        birthday: null,
        boardNumber: null,
        brokerageName: "The Right Choice Brokerage",
        businessNumber: null,
        cellNumber: null,
        corporateActiveAt: null,
        createdAt: "2020-03-12T11:24:32.388-03:00",
        email: "dave@therightchoicerealty.ca",
        faxNumber: null,
        firstEmail: "dave@therightchoicerealty.ca",
        franchiseName: "Independent",
        gdsPin: 106165,
        id: 212649,
        internalId: null,
        licenseNumber: null,
        name: "Dave Watt",
        firstName: "Dave",
        lastName: "Watt",
        officeName: "Main",
        organizationId: 469898,
        organizationName: "The Right Choice Realty Ltd.",
        payableName: "The Right Choice Realty Ltd.",
        payableNameOption: "payable_to_organization_name",
        phoneNumber: "",
        preventXeroSync: true,
        showDealSummary: false,
        taxFiling: true,
        taxNumber: null,
        type: "Agent",
        xeroSyncFrequency: "weekly",
        updatedAt: "2023-03-31T20:01:11.024-03:00",
        advertisingOptOutAt: null,
        landingPage: "deals",
        dailySummaryAt: "2020-03-12T16:00:00.000-03:00",
        dailySummaryLastSentAt: null,
        activeUser: false,
        company: false,
        agentInfosCount: 1,
      },
      relationships: {
        address: {
          data: {
            id: "5177052",
            type: "address",
          },
        },
        organization: {
          data: {
            id: "469898",
            type: "organization",
          },
        },
        xeroContacts: {
          data: [
            {
              id: "77483",
              type: "xeroContact",
            },
          ],
        },
        offices: {
          data: [
            {
              id: "419",
              type: "office",
            },
          ],
        },
        franchises: {
          data: [],
        },
        brokerages: {
          data: [],
        },
      },
    },
    {
      id: "260676",
      type: "profile",
      attributes: {
        allowDirectPayout: false,
        annualGoal: "0.0",
        birthday: null,
        boardNumber: null,
        brokerageName: "Keller Williams Capital Realty",
        businessNumber: null,
        cellNumber: null,
        corporateActiveAt: null,
        createdAt: "2020-07-16T12:06:57.318-03:00",
        email: null,
        faxNumber: null,
        firstEmail: "frontdesk941@kw.com",
        franchiseName: "Independent",
        gdsPin: null,
        id: 260676,
        internalId: null,
        licenseNumber: null,
        name: "Johnathan Drisdelle",
        firstName: "Johnathan",
        lastName: "Drisdelle",
        officeName: "Main",
        organizationId: 214203,
        organizationName: "Keller Williams Capital Realty",
        payableName: "Keller Williams Capital Realty",
        payableNameOption: "payable_to_organization_name",
        phoneNumber: null,
        preventXeroSync: true,
        showDealSummary: false,
        taxFiling: true,
        taxNumber: null,
        type: "Profile",
        xeroSyncFrequency: "weekly",
        updatedAt: "2022-03-21T13:39:52.332-03:00",
        advertisingOptOutAt: null,
        landingPage: null,
        dailySummaryAt: "2020-07-16T20:00:00.000-03:00",
        dailySummaryLastSentAt: null,
        activeUser: false,
        company: false,
        agentInfosCount: 1,
      },
      relationships: {
        address: {
          data: {
            id: "5261716",
            type: "address",
          },
        },
        organization: {
          data: {
            id: "214203",
            type: "organization",
          },
        },
        xeroContacts: {
          data: [],
        },
        offices: {
          data: [],
        },
        franchises: {
          data: [],
        },
        brokerages: {
          data: [],
        },
      },
    },
    {
      id: "226038",
      type: "profile",
      attributes: {
        allowDirectPayout: false,
        annualGoal: "0.0",
        birthday: null,
        boardNumber: null,
        brokerageName: "Coldwell Banker Select",
        businessNumber: null,
        cellNumber: null,
        corporateActiveAt: null,
        createdAt: "2020-04-27T15:33:10.438-03:00",
        email: null,
        faxNumber: null,
        firstEmail: "select@coldwellbanker.ca",
        franchiseName: "Independent",
        gdsPin: null,
        id: 226038,
        internalId: null,
        licenseNumber: null,
        name: "Michelle Hardy",
        firstName: "Michelle",
        lastName: "Hardy",
        officeName: "Main",
        organizationId: 219122,
        organizationName: "Coldwell Banker Select",
        payableName: "Coldwell Banker Select",
        payableNameOption: "payable_to_organization_name",
        phoneNumber: null,
        preventXeroSync: false,
        showDealSummary: false,
        taxFiling: true,
        taxNumber: null,
        type: "Profile",
        xeroSyncFrequency: "weekly",
        updatedAt: "2022-03-21T13:39:45.037-03:00",
        advertisingOptOutAt: null,
        landingPage: null,
        dailySummaryAt: "2020-04-27T20:00:00.000-03:00",
        dailySummaryLastSentAt: null,
        activeUser: false,
        company: false,
        agentInfosCount: 1,
      },
      relationships: {
        address: {
          data: {
            id: "5200233",
            type: "address",
          },
        },
        organization: {
          data: {
            id: "219122",
            type: "organization",
          },
        },
        xeroContacts: {
          data: [],
        },
        offices: {
          data: [],
        },
        franchises: {
          data: [],
        },
        brokerages: {
          data: [],
        },
      },
    },
  ],
};
