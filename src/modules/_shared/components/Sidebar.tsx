import styled from 'styled-components'

import { MainStackLogo } from "./Icons/Logo";
import Typography from './Typography';
import { DashboardIcon } from './Icons/DashboardIcon';
import { EditIcon } from './Icons/EditIcon';
import { GroupIcon } from './Icons/GroupIcon';
import { HourglassIcon } from './Icons/HourglassIcon';
import { DeleteIcon } from './Icons/DeleteIcon';
import { AddPhotoIcon } from './Icons/AddPhotoIcon';
import { SubscriptionsIcon } from './Icons/SubscriptionsIcon';
import { FilePresent } from './Icons/FilePresentIcon';
import { AlarmIcon } from './Icons/AlarmIcon';

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <MainStackLogo />
            </SidebarHeader>
            <SidebarBody>
                <ul>
                    <li>
                        <DashboardIcon />
                        <Typography color='#FF5403'>Dashboard</Typography>
                    </li>
                    <li>
                        <EditIcon />
                        <Typography color='#4D5760'>Item 1</Typography>
                    </li>
                    <li>
                        <GroupIcon />
                        <Typography color='#4D5760'>Item 2</Typography>
                    </li>
                    <li>
                        <HourglassIcon />
                        <Typography color='#4D5760'>Item 3</Typography>
                    </li>
                </ul>
                <span>
                    <Typography fontSize='0.75rem' color='#4D5760'fontWeight='thin'>OTHERS 1</Typography>
                </span>
                <ul>
                <li>
                        <AddPhotoIcon />
                        <Typography color='#4D5760'>Item 4</Typography>
                    </li>
                    <li>
                        <DeleteIcon />
                        <Typography color='#4D5760'>Item 5</Typography>
                    </li>
                </ul>
                <span>
                    <Typography fontSize='0.75rem' color='#4D5760'fontWeight='thin'>OTHER 2</Typography>
                </span>
                <ul>
                <li>
                        <SubscriptionsIcon />
                        <Typography color='#4D5760'>Item 6</Typography>
                    </li>
                    <li>
                        <FilePresent />
                        <Typography color='#4D5760'>Item 7</Typography>
                    </li>
                    <li>
                        <AlarmIcon />
                        <Typography color='#4D5760'>Item 8</Typography>
                    </li>
                </ul>
            </SidebarBody>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    border-right: 1px solid #EFF1F6;
    flex-flow: row nowrap;
    height: 56.25rem;
    display; flex;
    width: 19rem;
`

const SidebarHeader = styled.div`
    padding: 2rem 0 0 2.4rem;
`

const SidebarBody = styled.div`
    ul {
        list-style-type: none;
    }

    li {
        margin-bottom: 1.25rem;
        flex-flow: row nowrap;
        display: flex;
        gap: 1rem;
    }

    span {
        margin: 1.5rem 0;
        p { padding-left: 2.8rem }
    }
`