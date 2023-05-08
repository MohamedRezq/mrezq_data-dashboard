export interface StatsCardProps {
  title: string;
  value: string;
  valueType: string;
  subValues: {
    subValue: string;
    subValueState: string;
    subTitle: string;
  }[];
}
