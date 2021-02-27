import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from '../firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] =  useState('');
    const [tweetImage,setTweetImage] = useState('');

    const inputText = (e)=>{
        setTweetMessage(e.target.value);
    }
    const inputImage = (e)=>{
        setTweetImage(e.target.value)
    }

    const sendTweet = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Black Hustle",
            username:"youngsaucecrook",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:'https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg'
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg'/>
                    <input type='text'
                        placeholder="What's happening?"
                        onChange ={inputText}
                    />
                </div>
                    <input type="text"
                    onChange = {inputImage}
                    className="tweetbox__imageInput"
                    placeholder="Enter image URL"/>
                <Button type='submit' onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
