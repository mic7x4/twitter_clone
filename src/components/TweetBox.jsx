import { Button, Avatar } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg'/>
                    <input type="text" placeholder="What's happening?"/>
                </div>
                    <input type="text" 
                    className="tweetbox__imageInput"
                    placeholder="Enter image URL"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
