import styled from 'styled-components';
import Typography from './Typography';
import { Row } from './Row';

export const DonutCard = () => (
    <DonutCardContainer>
        <Row>
            <Typography fontWeight="bold">Top Locations</Typography>
            <Typography fontWeight="thin" fontSize="0.875rem" color="#FF5403">View full reports</Typography>
        </Row>
        <Row>

        </Row>
    </DonutCardContainer>
)

const DonutCardContainer = styled.div`
  border: 1px solid #EFF1F6;
  border-radius: 0.75rem;
  height: 20.375rem;
  padding: 1.5rem;
  width: 31.25rem;
`