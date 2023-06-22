export interface StatsCardProps {
  title: string;
  value: number;
  valueType: string;
  subValues: {
    subValue: number;
    subValueState: string;
    subTitle: string;
  }[];
}
