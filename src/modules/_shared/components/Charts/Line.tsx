import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

import { getMonthFromDate } from './chartUtils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

type LineChartProps = {
  lineData: any;
};

export const LineChart: React.FC<LineChartProps> = ({ lineData = {} }) => {
  const data = {
    labels: getMonthFromDate(lineData),
    datasets: [
      {
        data: Object.values(lineData),
        borderColor: 'rgba(255, 84, 3, 1)',
      },
    ],
  };
  return <Line data={data} />;
};
