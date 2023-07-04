import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

import { chartConfig } from './chartConstants';

ChartJS.register(ArcElement, Tooltip);

interface DonutChartProps {
  chartData: {
    percent?: number;
    count: number;
    country: string;
    source?: string;
  }[];
}

export const DoughnutChart = ({ chartData }: DonutChartProps) => {
  const dataList = chartData?.map((dataPoint) => dataPoint?.percent);
  const labels = chartData?.map(
    (dataItem) => dataItem.country || dataItem.source
  );
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataList,
        backgroundColor: chartConfig.backgroundColor,
      },
    ],
  };
  return <Doughnut data={data} />;
};
