export const dashboardDepartmentDefault = () => {
  return {
    statsCards: [
      {
        title: "Renewals",
        value: 0,
        valueType: "stats",
        subValues: [
          {
            subValue: 0,
            subValueState: "negative",
            subTitle: "Pending",
          },
          {
            subValue: 0,
            subValueState: "normal",
            subTitle: "Upcoming",
          },
          // {
          //   subValue: 0,
          //   subValueState: "positive",
          //   subTitle: "Renewed",
          // },
        ],
      },
      {
        title: "Per User Spent",
        value: 0, // "$2k"
        valueType: "value",
        subValues: [
          {
            subValue: 0, // "10"
            subValueState: "negative",
            subTitle: "Wasted",
          },
          {
            subValue: 0, // "$200"
            subValueState: "positive",
            subTitle: "Utilised",
          },
        ],
      },
      // {
      //   title: "Give Data",
      //   value: 0,
      //   valueType: "stats",
      //   subValues: [
      //     {
      //       subValue: 0,
      //       subValueState: "negative",
      //       subTitle: "Pending",
      //     },
      //     {
      //       subValue: 0,
      //       subValueState: "normal",
      //       subTitle: "Upcoming",
      //     },
      //     {
      //       subValue: 0,
      //       subValueState: "positive",
      //       subTitle: "Renewed",
      //     },
      //   ],
      // },
    ],
    chartsData: [
      {
        value: 0, // 4249
        subValues: [],
        chartSeries: [0], // [30, 25, 25, 10]
        xData: [""],
      },
      {
        value: 0, // 2478
        subValues: [
          {
            subValue: 0, // "$78"
            subTitle: "HR", // "HR"
          },
          {
            subValue: 0, // "$78"
            subTitle: "HR", // "HR"
          },
          {
            subValue: 0, // "$78"
            subTitle: "HR", // "HR"
          },
        ],
        chartSeries: [
          {
            name: "Human R.", // name: "Finance"
            data: [250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
          {
            name: "Marketing", // name: "Finance"
            data: [250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
          {
            name: "Finance", // name: "Finance"
            data: [250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
        ],
        xData: ["Aug"], // ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
      },
      {
        value: 0, // 4249
        subValues: [],
        chartSeries: [0], // [30, 25, 25, 10]
        xData: [""],
      },
      {
        value: 120, // 4249
        apps: [],
      },
      {
        "Cr. Card": {
          total: 0,
          apps: [
            {
              title: "Office",
              payment: "Anually",
              verified: true,
            },
          ],
        },
        "De. Card": {
          total: 0,
          apps: [
            {
              title: "Office",
              payment: "Anually",
              verified: true,
            },
          ],
        },
      },
      {
        value: 0, // 4249
        subValues: [],
        chartSeries: [10], // [30, 25, 25, 10]
        xData: [""],
      },
    ],
  };
};
