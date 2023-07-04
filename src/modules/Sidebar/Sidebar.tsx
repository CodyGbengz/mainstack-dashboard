import styled from 'styled-components';

import { SubscriptionsIcon } from '../_shared/components/Icons/SubscriptionsIcon';
import { ContextMenuIcon } from '../_shared/components/Icons/ContextMenuIcon';
import { HourglassIcon } from '../_shared/components/Icons/HourglassIcon';
import { DashboardIcon } from '../_shared/components/Icons/DashboardIcon';
import { FilePresent } from '../_shared/components/Icons/FilePresentIcon';
import { AddPhotoIcon } from '../_shared/components/Icons/AddPhotoIcon';
import { DeleteIcon } from '../_shared/components/Icons/DeleteIcon';
import { GroupIcon } from '../_shared/components/Icons/GroupIcon';
import { AlarmIcon } from '../_shared/components/Icons/AlarmIcon';
import { MainStackLogo } from '../_shared/components/Icons/Logo';
import { EditIcon } from '../_shared/components/Icons/EditIcon';
import Typography from '../_shared/components/Typography';
import { Avatar } from '../_shared/components/Avatar';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <MainStackLogo />
      </SidebarHeader>
      <SidebarBody>
        <ul>
          <li>
            <DashboardIcon />
            <Typography color='primary'>Dashboard</Typography>
          </li>
          <li>
            <EditIcon />
            <Typography color='grey'>Item 1</Typography>
          </li>
          <li>
            <GroupIcon />
            <Typography color='grey'>Item 2</Typography>
          </li>
          <li>
            <HourglassIcon />
            <Typography color='grey'>Item 3</Typography>
          </li>
        </ul>
        <span>
          <Typography
            fontSize='0.75rem'
            color='grey'
            fontWeight='thin'
          >
            OTHERS 1
          </Typography>
        </span>
        <ul>
          <li>
            <AddPhotoIcon />
            <Typography color='grey'>Item 4</Typography>
          </li>
          <li>
            <DeleteIcon />
            <Typography color='grey'>Item 5</Typography>
          </li>
        </ul>
        <span>
          <Typography
            fontSize='0.75rem'
            color='grey'
            fontWeight='thin'
          >
            OTHER 2
          </Typography>
        </span>
        <ul>
          <li>
            <SubscriptionsIcon />
            <Typography color='grey'>Item 6</Typography>
          </li>
          <li>
            <FilePresent />
            <Typography color='grey'>Item 7</Typography>
          </li>
          <li>
            <AlarmIcon />
            <Typography color='grey'>Item 8</Typography>
          </li>
        </ul>
        <SidebarFooter>
          <UserProfile>
            <Avatar />
            <Typography>Blessing Daniels</Typography>
            <ContextMenuIcon />
          </UserProfile>
        </SidebarFooter>
      </SidebarBody>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
    border-right: 1px solid #EFF1F6;
    position: fixed;
    flex-flow: row nowrap;
    height: 100vh;
    display; flex;
    width: 19rem;
`;

const SidebarHeader = styled.div`
  padding: 2rem 0 0 2.4rem;
  margin-bottom: 2rem;
`;

const SidebarBody = styled.div`
  ul {
    list-style-type: none;
  }

  ul:first-of-type {
    li:first-of-type {
      border-left: 3px solid rgba(255, 84, 3, 1);
      margin-left: -18%;
      padding-left: 18%;
    }
  }

  li {
    margin-bottom: 1.25rem;
    flex-flow: row nowrap;
    display: flex;
    gap: 1rem;
  }

  span {
    margin: 1.5rem 0;
    p {
      padding-left: 2.8rem;
    }
  }
`;

const SidebarFooter = styled.div`
  position: absolute;
  top: 90%;
`;
const UserProfile = styled.div`
  justify-content: space-between;
  flex-flow: row nowrap;
  padding-left: 2.2rem;
  align-items: center;
  width: 14.25rem;
  display: flex;
  height: 2rem;
`;

export default Sidebar;
