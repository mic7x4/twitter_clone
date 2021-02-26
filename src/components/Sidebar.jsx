import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className="sidebar__twitterIcon"/> 
            <SidebarOption active Icon={HomeOutlinedIcon}  text="Home"/>
            <SidebarOption Icon={SearchOutlinedIcon}  text="Explorer"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon}  text="Notifications"/>
            <SidebarOption Icon={MailOutlineOutlinedIcon}  text="Messages"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon}  text="Bookmarks"/>
            <SidebarOption Icon={ListAltOutlinedIcon}  text="Lists"/>
            <SidebarOption Icon={PersonOutlineOutlinedIcon}  text="Profiles"/>
            <SidebarOption Icon={MoreHorizOutlinedIcon}  text="More"/>

            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
