export interface ChartCardProps {
  title: string;
  subTitle: string;
  value: number;
  subValues: {
    subValue: number;
    subTitle: string;
  }[];
  chartType: string;
  chartSeries: any[];
  xData: any[];
}
