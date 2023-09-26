import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

const initialState: any = {
  home: {
    mainInterval: "All Time",
    homeStats: [
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
      {
        title: "Total apps",
        value: 0,
        valueType: "stats",
        subValues: [
          {
            subValue: 0,
            subValueState: "positive",
            subTitle: "free",
          },
          {
            subValue: 0,
            subValueState: "positive",
            subTitle: "paid",
          },
        ],
      },
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
    ],
    homeChart_1: {
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
    homeChart_2: {
      value: 0, // 4249
      subValues: [
        {
          subValue: 0, // "$1200"
          subTitle: "_", // "G Suite"
        },
        {
          subValue: 0, // "$1200"
          subTitle: "_", // "G Suite"
        },
        {
          subValue: 0, // "$1200"
          subTitle: "_", // "G Suite"
        },
        {
          subValue: 0, // "$1200"
          subTitle: "_", // "G Suite"
        },
      ],
      chartSeries: [10], // [30, 25, 25, 10]
      xData: ["Atlassian"],
    },
    homeChart_3: {
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
      ],
      chartSeries: [
        {
          name: "Used",
          data: [100, 100, 100, 100, 100, 100], // [1100, 700, 550, 1300, 520, 850]
        },
        {
          name: "Unused",
          data: [100, 100, 100, 100, 100, 100], // [120, 300, 520, 90, 350, 450]
        },
      ],
      xData: ["Marketing", "Finance", "HR", "IT", "Engineering", "R&D"], // ["Marketing", "Finance", "HR", "IT", "Engineering", "R&D"]
    },
  },
  department: {
    mainInterval: "All Time",
    selectedDepartment: "All Employees",
    departmentChart_1_Interval: "All Time",
    departmentChart_2_Interval: "All Time",
    departmentChart_4_AppCategory: "paid",
    departmentChart_5_PaymentType: "Cr. Card",
    departmentChart_6_Interval: "All Time",
    departmentCard: {
      title: "", // "All Employees"
      totalSpend: 0, // 10,000
      increasePercent: 0,
      apps: [] /* {
        logo: "/assets/img/Intuit_QuickBooks_logo.svg",
        title: "Quick Books",
        url: "",
      } */,
      users: [] /* {
        avatar: "/assets/img/user.png",
        name: "Mohamed",
      } */,
    },
    departmentStats: [
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
    departmentChart_1: {
      value: 0, // 4249
      subValues: [],
      chartSeries: [30, 25, 25, 10], // [30, 25, 25, 10]
      xData: ["Office", "GitHub", "Atlassian", "Zoho"], // ["Office", "GitHub", "Atlassian", "Zoho"]
    },
    departmentChart_2: [
      {
        budget: 0, // 0
        spent: 0, // 0
      },
      {
        budget: 0, // 0
        spent: 0, // 0
      },
      {
        budget: 0, // 0
        spent: 0, // 0
      },
    ],
    departmentChart_3: {
      value: 0, // 4249
      subValues: [],
      chartSeries: [0], // [30, 25, 25, 10]
      xData: [""],
    },
    departmentChart_4: {
      value: 0, // 4249
      apps: [],
    },
    departmentChart_5: {
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
    departmentChart_6: {
      value: 0, // 4249
      chartSeries: [10], // [30, 25, 25, 10]
      xData: [""],
    },
  },
  integration: {
    selectedCategories: [],
    selectedAppsByCategories: [],
    allAppsByCategories: [],
  },
  orgDepartments: [],
};
//----------------------------------------------------------------------------------//
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setOrgDepartments: (state: any, action: PayloadAction<any>) => {
      state.orgDepartments = action.payload;
      return;
    },
    setHomeInterval: (state: any, action: PayloadAction<string>) => {
      state.home.mainInterval = action.payload;
      return;
    },
    setDepartmentMainInterval: (state: any, action: PayloadAction<string>) => {
      state.department.mainInterval = action.payload;
      return;
    },
    setSelectedDepartment: (state: any, action: PayloadAction<string>) => {
      state.department.selectedDepartment = action.payload;
      return;
    },
    setDepartmentChart_1_Interval: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.departmentChart_1_Interval = action.payload;
      return;
    },
    setDepartmentChart_2_Interval: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.departmentChart_2_Interval = action.payload;
      return;
    },
    setDepartmentChart_4_AppCategory: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.departmentChart_4_AppCategory = action.payload;
      return;
    },
    setDepartmentChart_5_PaymentType: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.departmentChart_5_PaymentType = action.payload;
      return;
    },
    setDepartmentChart_6_Interval: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.departmentChart_6_Interval = action.payload;
      return;
    },
    setHomeStats: (state: any, action: PayloadAction<any>) => {
      state.home.homeStats = action.payload;
      return;
    },
    setHomeChart_1: (state: any, action: PayloadAction<any>) => {
      state.home.homeChart_1 = action.payload;
      return;
    },
    setHomeChart_2: (state: any, action: PayloadAction<any>) => {
      state.home.homeChart_2 = action.payload;
      return;
    },
    setHomeChart_3: (state: any, action: PayloadAction<any>) => {
      state.home.homeChart_3 = action.payload;
      return;
    },
    setDepartmentStats: (state: any, action: PayloadAction<any>) => {
      state.department.departmentStats = action.payload;
      return;
    },
    setDepartmentChart_1: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_1 = action.payload;
      return;
    },
    setDepartmentChart_2: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_2 = action.payload;
      return;
    },
    setDepartmentChart_3: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_3 = action.payload;
      return;
    },
    setDepartmentChart_4: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_4 = action.payload;
      return;
    },
    setDepartmentChart_5: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_5 = action.payload;
      return;
    },
    setDepartmentChart_6: (state: any, action: PayloadAction<any>) => {
      state.department.departmentChart_6 = action.payload;
      return;
    },
    setDepartmentTotalAppsCategory: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.department.totalAppsCategory = action.payload;
      return;
    },
    setDepartmentPaymentType: (state: any, action: PayloadAction<string>) => {
      state.department.paymentType = action.payload;
      return;
    },
    setSelectedCategories: (state: any, action: PayloadAction<any>) => {
      state.integration.selectedCategories = action.payload;
      return;
    },
    setSelectedAppsByCategories: (state: any, action: PayloadAction<any>) => {
      state.integration.selectedAppsByCategories = action.payload;
      return;
    },
    setAllAppsByCategories: (state: any, action: PayloadAction<any>) => {
      state.integration.allAppsByCategories = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setOrgDepartments,
  setHomeInterval,
  setDepartmentMainInterval,
  setSelectedDepartment,
  setHomeStats,
  setHomeChart_1,
  setHomeChart_2,
  setHomeChart_3,
  setDepartmentChart_1,
  setDepartmentChart_2,
  setDepartmentChart_3,
  setDepartmentChart_4,
  setDepartmentChart_5,
  setDepartmentChart_6,
  setDepartmentPaymentType,
  setDepartmentStats,
  setDepartmentChart_1_Interval,
  setDepartmentChart_2_Interval,
  setDepartmentChart_4_AppCategory,
  setDepartmentChart_5_PaymentType,
  setDepartmentChart_6_Interval,
  setSelectedCategories,
  setSelectedAppsByCategories,
  setAllAppsByCategories,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
