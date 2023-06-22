import { useState, useEffect } from "react";
//---------------------Components---------------------------------------------//
import StatsCard from "@/components/molecules/StatsCard/StatsCard";
import ChartCard from "@/components/molecules/ChartCard/ChartCard";
import periodsData from "../../public/assets/json/months.json";
import { quickbooksDefault } from "../../public/assets/json/quickbooksDefault";
import DashboardTemplate from "../../components/templates/DashboardTemplate";
import { quickbooksSyncData } from "@/actions/quickbooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { dateFormatter } from "@/helpers/dateFormatter";
import { setPageLoading } from "@/redux/features/loading/loadingSlice";
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
const Home = () => {
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const [dashboardData, setDashboardData] = useState(quickbooksDefault());
  const [fetchError, setFetchError] = useState(false);
  //-------------------------------------------------------------------------//
  const periods = periodsData;
  //-------------------------------------------------------------------------//
  const currentDashboardPeriod = useSelector(
    (state: RootState) => state.dashboardPeriod.currentPeriod
  );
  //-------------------------------------------------------------------------//
  useEffect(() => {
    dispatch(setPageLoading(true));
    quickbooksSyncData(user.info.organizationId).then((response) => {
      if (response && response.status === 200) setDashboardData(response.data);
      else setFetchError(true);
    });
    dispatch(setPageLoading(false));
  }, []);

  // 0 --> Last Month
  // 1 --> Last 3 Months
  // 2 --> Last 6 Months
  // 3 --> Last Year
  // 4 --> Last 5 Years
  return (
    <DashboardTemplate date={date} periods={periods}>
      <>
        {fetchError && (
          <div className="w-full my-3 flex text-center items-center justify-center text-xs text-red-500">
            Error connecting to Alpha Saas. Please reload the page !
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {dashboardData[currentDashboardPeriod].statsCards.map(
            (item: any, i: number) => (
              <StatsCard
                key={`${item.title}-${item.value}-${i}`}
                title={item.title}
                value={
                  i === 2 ? `$${Math.round(item.value / 1000)}k` : item.value
                }
                valueType={item.valueType}
                subValues={item.subValues}
              />
            )
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3">
          {dashboardData[currentDashboardPeriod].chartsData.map(
            (item: any, i: number) => (
              <div
                key={`${item.title}-${item.value}-${i}`}
                className={`${
                  i % 2 === 0 ? "col-span-2" : "col-span-1"
                } mb-10 w-full`}
              >
                <ChartCard
                  title={item.title}
                  subTitle={item.subTitle}
                  value={item.value}
                  subValues={item.subValues}
                  chartType={item.chartType}
                  chartSeries={item.chartSeries}
                  xData={item.xData}
                />
              </div>
            )
          )}
        </div>
      </>
    </DashboardTemplate>
  );
};

export default Home;
