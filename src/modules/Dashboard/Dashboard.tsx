import styled from 'styled-components';

import { Sidebar } from '../Sidebar/';
import { Main } from '../Main/';

const Dashboard:React.FC = () => {
  return (
    <DashboardWrapper>
     <Sidebar />
     <Main />
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export default Dashboard