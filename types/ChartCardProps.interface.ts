export interface ChartCardProps {
  title: string;
  subTitle: string;
  value: number;
  subValues: {
    subValue: string;
    subTitle: string;
  }[];
  chartType: string;
  chartSeries: any[];
  xData: any[];
}
