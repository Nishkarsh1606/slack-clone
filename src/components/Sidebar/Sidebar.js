import React from 'react'
import Features from './Features';
import './Sidebar.css'
import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import ChatIcon from '@mui/icons-material/Chat';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import TagIcon from '@mui/icons-material/Tag';

function Sidebar() {
    return (
        <div className='Sidebar'>
            {/* Slack HQ Name */}
            <div className='workspace-info'>
                <div className='slack-name'>
                    <p className='slack-hq'>Nishkarsh' HQ</p>
                    <div>
                    <span className='circle-icon'><CircleIcon className='active-status'/></span>
                    <span className='slack-hq'>Nishkarsh Srivastava</span>
                    </div>
                </div>
                <CreateIcon className='create-message'/>
            </div>
            {/* Features */}
            <div className='sidebar-features'>
                <Features Icon={ChatIcon} featureName={'Threads'}/>
                <Features Icon={InboxIcon} featureName={'Messages & Reactions'}/>
                <Features Icon={DraftsIcon} featureName={'Saved Items'}/>
                <Features Icon={BookmarkIcon} featureName={'Channel Browser'}/>
                <Features Icon={PeopleIcon} featureName={'People & user group'}/>
                <Features Icon={AppsIcon} featureName={'App'}/>
                <Features Icon={FileCopyIcon} featureName={'File Browser'}/>
                <Features Icon={KeyboardArrowUpIcon} featureName={'Show Less'}/>
            </div>
            {/* Channels Down*/}
            <div className='sidebar-features'>
            <Features Icon={KeyboardArrowDownIcon} featureName={'Channel'}/>
            </div>
            {/* Channel List */}
            <div className='sidebar-features'>
            <Features Icon={AddIcon} featureName={'Add Channel'}/>
            <Features Icon={TagIcon} featureName={'General'}/>
            </div>
        </div>
    )
}

export default Sidebar