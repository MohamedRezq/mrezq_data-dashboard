export const quickbooksDefault = () => {
  return new Array(5).fill({
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
          {
            subValue: 0,
            subValueState: "positive",
            subTitle: "Renewed",
          },
        ],
      },
      {
        title: "Total apps",
        value: 0,
        valueType: "stats",
        subValues: [
          {
            subValue: 0,
            subValueState: "positive",
            subTitle: "Free",
          },
          {
            subValue: 0,
            subValueState: "positive",
            subTitle: "Paid",
          },
        ],
      },
      {
        title: "Total Saas Spent",
        value: 0, // "$2k"
        valueType: "value",
        subValues: [
          {
            subValue: 0, // "10"
            subValueState: "positive",
            subTitle: "Total User",
          },
          {
            subValue: 0, // "$200"
            subValueState: "positive",
            subTitle: "Per user spend",
          },
        ],
      },
    ],
    chartsData: [
      {
        title: "Spend Summary by department",
        subTitle: "Total Spend",
        value: 0, // 2478
        subValues: new Array(3).fill({
          subValue: 0, // "$78"
          subTitle: "HR", // "HR"
        }),
        chartType: "line",
        chartSeries: [
          {
            name: "Human R.", // name: "Finance"
            data: [250, 250, 250, 250, 250, 250, 250, 250, 250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
          {
            name: "Marketing", // name: "Finance"
            data: [250, 250, 250, 250, 250, 250, 250, 250, 250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
          {
            name: "Finance", // name: "Finance"
            data: [250, 250, 250, 250, 250, 250, 250, 250, 250], // [260, 360, 320, 560, 750, 660, 510, 200, 250]
          },
        ],
        xData: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], // ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
      },
      {
        title: "Top 4 Apps by Spend",
        subTitle: "Total Spend",
        value: 0, // 4249
        subValues: new Array(4).fill({
          subValue: 0, // "$1200"
          subTitle: "", // "G Suite"
        }),
        chartType: "pie",
        chartSeries: [10, 10, 10, 10], // [30, 25, 25, 10]
        xData: ["Atlassian", "G Suite", "Hubspot", "Office", ""],
      },
      {
        title: "License Summary",
        subTitle: "Total Wasted Value",
        value: 0, // 2478
        subValues: [
          {
            subValue: 0,
            subTitle: "Total Licenses",
          },
          {
            subValue: 0,
            subTitle: "Used Licenses",
          },
          {
            subValue: 0,
            subTitle: "Unused Licenses",
          },
          {
            subValue: "$0", // "$1200"
            subTitle: "G Suite", // "G Suite"
          },
        ],
        chartType: "bar",
        chartSeries: [
          {
            name: "Data 1",
            data: [100, 100, 100, 100, 100, 100], // [1100, 700, 550, 1300, 520, 850]
          },
          {
            name: "Data 2",
            data: [100, 100, 100, 100, 100, 100], // [120, 300, 520, 90, 350, 450]
          },
        ],
        xData: ["Marketing", "Finance", "HR", "IT", "Engineering", "R&D"], // ["Marketing", "Finance", "HR", "IT", "Engineering", "R&D"]
      },
    ],
  });
};
