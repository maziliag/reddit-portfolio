import React from 'react';
import Post from "./post";

function Feed (props) {
    return (
        <div className="FeedDiv">
            {props.feedList.map(item => (
                <Post 
                    title={item.data.title}
                    link={item.data.permalink}
                    thumbnail={item.data.thumbnail} 
                    subreddit={item.data.subreddit_name_prefixed}
                    upvotes={item.data.ups}
                    comments={item.data.num_comments}
                    author={item.data.author}
                    created={item.data.created}
                    key={Math.random()}
                />
            ))}
        </div>
    );
}
 
export default Feed;