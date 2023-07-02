import styled from "styled-components";

import { InfoIcon } from "./Icons/infoIcon";
import Typography from "./Typography";
import { DonutCard } from "./DonutCard";

export const MainContent = () => {
  return (
    <MainContentContainer>
      <HeaderTopRow>
        <Typography fontWeight="bold">Dashboard</Typography>
      </HeaderTopRow>
      <Row>
        <Column>
          <Typography fontWeight="extrabold" fontSize="1.5rem">
            Good morning, Blessing
          </Typography>
          <Typography fontWeight="thin" fontSize="0.875rem">
            Check out your dashboard summary
          </Typography>
        </Column>
        <Column2>
          <Typography fontWeight="thin" fontSize="0.875rem" color="#FF5403">
            View analytics
          </Typography>
        </Column2>
      </Row>
      <DurationRow>
        <Pills>
          <Typography fontSize="0.875rem">1 Day</Typography>
        </Pills>
        <Pills>
          <Typography fontSize="0.875rem">3 Days</Typography>
        </Pills>
        <Pills>
          <Typography fontSize="0.875rem">7 Days</Typography>
        </Pills>
        <Pills>
          <Typography fontSize="0.875rem">30 Days</Typography>
        </Pills>
        <Pills active={true}>
          <Typography fontSize="0.875rem" color="#FF5403">
            All Time
          </Typography>
        </Pills>
        <Pills>
          <Typography fontSize="0.875rem">Custom Date</Typography>
        </Pills>
      </DurationRow>
      <LineGraphContainer>
      <Row>
        <Column>
        <Typography fontWeight="bold">Page Views</Typography>
        <Typography fontWeight="thin" fontSize="0.875rem">
          All time
        </Typography>
        </Column>
        <Column2>
        <InfoIcon />
        </Column2>
      </Row>
      </LineGraphContainer>
      <Row gap='1.5rem'>
        <DonutCard></DonutCard>
        <DonutCard></DonutCard>
      </Row>
    </MainContentContainer>
  );
};

const MainContentContainer = styled.div`
  padding: 1rem 3rem;
  width: 75%;
`;

const HeaderTopRow = styled.div`
  margin-bottom: 2rem;
`;

interface RowProps {
    gap?: string;
}

const Row = styled.div<RowProps>`
  justify-content: space-between;
  flex-flow: row nowrap;
  display: flex;
  gap: ${(props) => props.gap ?? 'normal'}
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

interface PillProp {
  active?: boolean;
}

const Pills = styled.div<PillProp>`
  border-radius: 6.25rem;
  border: 1px solid ${(props) => (props.active ? "#FF5403" : "#eff1f6")};
  padding: 0.75rem 1rem;
  background: ${(props) => (props.active ? "#FFDDCD" : "#fff")};
`;

const LineGraphContainer = styled.div`
  border: 1px solid #eff1f6;
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  width: 63.5rem;
  height: 36rem;
`;
