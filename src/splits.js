module.exports = {
  data: [
    {
      id: "273842",
      type: "split",
      attributes: {
        side: "list",
        createdAt: "2021-08-31T08:34:30.006-03:00",
        updatedAt: "2021-08-31T11:16:19.524-03:00",
        overrideAmount: null,
        overridePercent: "75.0",
        taxOverridePercent: null,
        endOverride: null,
        ends: "0.5",
        award: "0.0",
        awardOverride: null,
        net: "6525.0",
        tax: "978.75",
        taxOverrideAmount: null,
        paidTotal: "7503.75",
        total: "7503.75",
      },
      relationships: {
        dealAccess: {
          data: {
            id: "1049927",
            type: "dealAccess",
          },
        },
      },
    },
    {
      id: "273901",
      type: "split",
      attributes: {
        side: "list",
        createdAt: "2021-08-31T11:15:15.814-03:00",
        updatedAt: "2021-08-31T11:16:19.554-03:00",
        overrideAmount: null,
        overridePercent: "25.0",
        taxOverridePercent: null,
        endOverride: null,
        ends: "0.5",
        award: "0.0",
        awardOverride: null,
        net: "2175.0",
        tax: "326.25",
        taxOverrideAmount: null,
        paidTotal: "2501.25",
        total: "2501.25",
      },
      relationships: {
        dealAccess: {
          data: {
            id: "1050199",
            type: "dealAccess",
          },
        },
      },
    },
    {
      id: "273902",
      type: "split",
      attributes: {
        side: "sell",
        createdAt: "2021-08-31T11:15:48.776-03:00",
        updatedAt: "2021-08-31T11:16:19.561-03:00",
        overrideAmount: null,
        overridePercent: null,
        taxOverridePercent: null,
        endOverride: null,
        ends: "1.0",
        award: "0.0",
        awardOverride: null,
        net: "8700.0",
        tax: "1305.0",
        taxOverrideAmount: null,
        paidTotal: "10005.0",
        total: "10005.0",
      },
      relationships: {
        dealAccess: {
          data: {
            id: "1049929",
            type: "dealAccess",
          },
        },
      },
    },
  ],
  included: [
    {
      id: "1049927",
      type: "dealAccess",
      attributes: {
        createdAt: "2021-08-31T08:34:29.988-03:00",
        dealId: 158012,
        owner: true,
        permission: "read",
        profileId: 212649,
        role: "agent",
        side: "list",
        updatedAt: "2021-08-31T11:16:19.551-03:00",
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        profile: {
          data: {
            id: "212649",
            type: "profile",
          },
        },
        team: {
          data: {
            id: "361",
            type: "team",
          },
        },
      },
    },
    {
      id: "1050199",
      type: "dealAccess",
      attributes: {
        createdAt: "2021-08-31T11:14:58.704-03:00",
        dealId: 158012,
        owner: null,
        permission: "read",
        profileId: 226038,
        role: "outside_brokerage",
        side: "list",
        updatedAt: "2021-08-31T11:16:19.559-03:00",
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        profile: {
          data: {
            id: "226038",
            type: "profile",
          },
        },
        team: {
          data: null,
        },
      },
    },
    {
      id: "1049929",
      type: "dealAccess",
      attributes: {
        createdAt: "2021-08-31T08:35:38.536-03:00",
        dealId: 158012,
        owner: null,
        permission: "read",
        profileId: 260676,
        role: "outside_brokerage",
        side: "sell",
        updatedAt: "2021-08-31T11:16:19.566-03:00",
      },
      relationships: {
        deal: {
          data: {
            id: "158012",
            type: "deal",
          },
        },
        profile: {
          data: {
            id: "260676",
            type: "profile",
          },
        },
        team: {
          data: null,
        },
      },
    },
  ],
};
