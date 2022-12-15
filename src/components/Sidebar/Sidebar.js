import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import './Sidebar.css'
import Features from './Features';
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
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { userChannel } from '../../features/appSlice';

function Sidebar() {
    const [channels, setChannels] = useState([])
    const dispatch=useDispatch()
    const currentUser = auth.currentUser
    const getFirstName = () => {
        const fullName = currentUser.displayName.split(' ')
        const firstName = fullName[0]
        return firstName
    }
    const createChannel = () => {
        const promptValue = prompt('Enter Channel Name')
        if(promptValue.length<3 || promptValue===null){
            alert('Please enter a valid value')
        }else{
            const newChannelName = promptValue.toLocaleLowerCase().replace(/ /g, '-')
            addDoc(collection(db, `Slack/${newChannelName}/messages`), {
                try: 'Test message'
            })
            .then(()=>{
                addDoc(collection(db,'Channels'),{
                    channelName: newChannelName
                })
            })
            .then(()=>{
                alert('Channel created successfully!')
            })
        }
    }
    const getChannelName=(channelName)=>{
        //dispatch channel to feed component
        dispatch(userChannel(channelName))
    }
    useEffect(() => {
        onSnapshot((collection(db, 'Channels')), (snapshot) => {
            setChannels(snapshot.docs.map((doc) => (
                {
                    data: doc.data(),
                    id: doc.id
                }
            )))
        })
        console.log(channels)
        //eslint-disable-next-line
    }, [])
    return (
        <div className='Sidebar'>
            {/* Slack HQ Name */}
            <div className='workspace-info'>
                <div className='slack-name'>
                    <p className='slack-hq'>{`${getFirstName()}'s HQ`}</p>
                    <div>
                        <span className='circle-icon'><CircleIcon className='active-status' /></span>
                        <span className='slack-hq'>{currentUser.displayName}</span>
                    </div>
                </div>
                <CreateIcon className='create-message' />
            </div>
            {/* Features */}
            <div className='sidebar-features'>
                <Features Icon={ChatIcon} featureName={'Threads'} />
                <Features Icon={InboxIcon} featureName={'Messages & Reactions'} />
                <Features Icon={DraftsIcon} featureName={'Saved Items'} />
                <Features Icon={BookmarkIcon} featureName={'Channel Browser'} />
                <Features Icon={PeopleIcon} featureName={'People & user group'} />
                <Features Icon={AppsIcon} featureName={'App'} />
                <Features Icon={FileCopyIcon} featureName={'File Browser'} />
                <Features Icon={KeyboardArrowUpIcon} featureName={'Show Less'} />
            </div>
            {/* Channels Down*/}
            <div className='sidebar-features'>
                <Features Icon={KeyboardArrowDownIcon} featureName={'Channels'} />
            </div>
            {/* Channel List */}
            <div className='sidebar-features'>
                <div onClick={createChannel}><Features Icon={AddIcon} featureName={'Add Channel'} /></div>
                <div className="channel-list">
                    <Features Icon={TagIcon} featureName={'Slack'} />
                    {
                        channels.map(({ id, data: { channelName } }) => (
                            <Features 
                            key={id}
                            channelID={id}
                            Icon={TagIcon} 
                            featureName={channelName}
                            onClickGetChannelName={getChannelName}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar