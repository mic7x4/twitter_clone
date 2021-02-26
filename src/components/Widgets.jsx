import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" className="" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1364637822888607745'}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="MicCrook" options={{height: 400}}/>
                <TwitterShareButton 
                    url={'https://www.facebook.com/CrookzArt'} 
                    options={{ text: '#reactjs is awesome', via: 'MicCrook' }}
                />
            </div>
        </div>
    )
}

export default Widgets 
