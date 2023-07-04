import styled from 'styled-components';

import { DoughnutChart } from './Charts/Doughnut';
import { DonutSummary } from './DonutSummary';
import Typography from './Typography';
import { Column } from './Column';
import { Row } from './Row';

export type DonutCardProps = {
  title: string;
  chartData: any;
};

export const DonutCard: React.FC<DonutCardProps> = ({ title, chartData }) => (
  <DonutCardContainer>
    <TopCardRow>
      <Row>
        <Typography fontWeight='bold'>{title}</Typography>
        <Typography
          fontWeight='thin'
          fontSize='0.875rem'
          color='primary'
        >
          View full reports
        </Typography>
      </Row>
    </TopCardRow>
    <Row>
      <Column>
        <DonutSummary chartData={chartData} />
      </Column>
      <Column>
        <DoughnutChartWrapper>
          <DoughnutChart chartData={chartData} />
        </DoughnutChartWrapper>
      </Column>
    </Row>
  </DonutCardContainer>
);

const DonutCardContainer = styled.div`
  border: 1px solid #eff1f6;
  border-radius: 0.75rem;
  height: 16.375rem;
  padding: 1.5rem;
  width: 31.25rem;
`;

const TopCardRow = styled.div`
  margin: 0 0 3rem 0;
`;

const DoughnutChartWrapper = styled.div`
  height: 10rem;
  width: 10rem;
`;
