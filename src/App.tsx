import styled from 'styled-components';

import { MainContent } from "./modules/_shared/components/Main"
import { Sidebar } from "./modules/_shared/components/Sidebar"

function App() {

  return (
    <Dashboard>
     <Sidebar />
     <MainContent />
    </Dashboard>
  )
}

const Dashboard = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export default App
