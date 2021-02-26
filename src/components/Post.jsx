import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React from 'react';
import './Post.css';

function Post({
    displatName,username,verified,text,image,avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
            <Avatar  src='https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg'/>
            </div>
            <div className='post__body'>
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Michael Crook 
                            <span > <VerifiedUserIcon className="post__badge"/></span>
                            <span className="post__headeSpecial"> @crookzart</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/3HAYjfeOIQJ7gqq350A/giphy.gif" alt=""/>   
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    ) 
}

export default Post
