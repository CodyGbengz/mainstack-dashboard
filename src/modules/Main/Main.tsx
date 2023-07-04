import styled from 'styled-components';

import { ConditionRenderComponent } from '../_shared/components/ConditionRender';
import { InfoIcon } from '../_shared/components/Icons/InfoIcon';
import { LineChart } from '../_shared/components/Charts/Line';
import { DonutCard } from '../_shared/components/DonutCard';
import Typography from '../_shared/components/Typography';
import Shimmer from '../_shared/components/Shimmer';

import { useFetch } from '../_shared/hooks/useFetch';
import { DashboardData } from '../_shared/@types';

const url = 'https://fe-task-api.mainstack.io/';

const MainContent: React.FC = () => {
  const dashboardData: DashboardData = useFetch(url);
  const { graph_data, top_locations, top_sources } = dashboardData;

  return (
    <MainContentContainer>
      <HeaderTopRow>
        <Typography fontWeight='bold'>Dashboard</Typography>
      </HeaderTopRow>
      <Row>
        <Column>
          <Typography
            fontWeight='extrabold'
            fontSize='1.5rem'
          >
            Good morning, Blessing ⛅️
          </Typography>
          <Typography
            fontWeight='thin'
            fontSize='0.875rem'
          >
            Check out your dashboard summary
          </Typography>
        </Column>
        <Column2>
          <Typography
            fontWeight='thin'
            fontSize='0.875rem'
            color='primary'
          >
            View analytics
          </Typography>
        </Column2>
      </Row>
      <DurationRow>
        <Pills>
          <Typography fontSize='0.875rem'>1 Day</Typography>
        </Pills>
        <Pills>
          <Typography fontSize='0.875rem'>3 Days</Typography>
        </Pills>
        <Pills>
          <Typography fontSize='0.875rem'>7 Days</Typography>
        </Pills>
        <Pills>
          <Typography fontSize='0.875rem'>30 Days</Typography>
        </Pills>
        <Pills active={true}>
          <Typography
            fontSize='0.875rem'
            color='primary'
          >
            All Time
          </Typography>
        </Pills>
        <Pills>
          <Typography fontSize='0.875rem'>Custom Date</Typography>
        </Pills>
      </DurationRow>
      <ConditionRenderComponent renderIf={!dashboardData}>
        <Shimmer
          height={50}
          width={100}
        />
      </ConditionRenderComponent>
      <LineGraphContainer>
        <Row>
          <Column>
            <Typography fontWeight='bold'>Page Views</Typography>
            <Typography
              fontWeight='thin'
              fontSize='0.875rem'
            >
              All time
            </Typography>
            <Typography
              fontSize='3rem'
              fontWeight='extrabold'
            >
              500
            </Typography>
          </Column>
          <Column2>
            <InfoIcon />
          </Column2>
        </Row>
        <LineChart lineData={graph_data.views} />
      </LineGraphContainer>
      <Row gap='1.5rem'>
        <DonutCard
          chartData={top_locations}
          title='Top Locations'
        />
        <DonutCard
          chartData={top_sources}
          title='Top Referral Source'
        />
      </Row>
    </MainContentContainer>
  );
};

const MainContentContainer = styled.div`
  margin-left: 19rem;
  padding: 1rem 3rem;
  overflow: hidden;
  width: 100%;
`;

const HeaderTopRow = styled.div`
  margin-bottom: 2.8rem;
`;

interface RowProps {
  gap?: string;
}

const Row = styled.div<RowProps>`
  gap: ${(props) => props.gap ?? 'normal'};
  justify-content: space-between;
  flex-flow: row nowrap;
  display: flex;
`;

const Column = styled.div`
  flex-flow: column wrap;
  display: flex;
  gap: 1rem;
`;

const Column2 = styled.div`
  flex-flow: column wrap;
  justify-content: center;
  display: flex;
`;
const DurationRow = styled.div`
  flex-flow: row nowrap;
  margin: 0.5rem 0;
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
`;

const Pills = styled.div<{ active?: boolean }>`
  border: 1px solid ${(props) => (props.active ? '#FF5403' : '#eff1f6')};
  background: ${(props) => (props.active ? '#FFDDCD' : '#fff')};
  border-radius: 6.25rem;
  padding: 0.75rem 1rem;
`;

const LineGraphContainer = styled.div`
  border: 1px solid #eff1f6;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 2rem 1.5rem;
`;

export default MainContent;
