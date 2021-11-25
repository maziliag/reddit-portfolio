import React, {useState} from "react";

function Post (props) {

    const thumbImg = props.thumbnail;

    const validLink = /http/g;
    
    const match = thumbImg.match(validLink);

    const handleClick = () => {
        window.open(`https://www.reddit.com/${props.link}`, "_blank")
    }

// Refractor likes
    let smallVotes = props.upvotes;

    if(props.upvotes > 999){
        smallVotes = smallVotes/1000;
        smallVotes = smallVotes.toFixed(1) + "k";
    }

// Refractor comments
let smallComments = props.comments;

if(props.comments > 999){
    smallComments = smallComments/1000;
    smallComments = smallComments.toFixed(1) + "k";
}

// Refractor title
    let trimmedTitle = props.title.substring(0, 170);

    if(props.title.length > 170){
        trimmedTitle += "..."
    }

//Setting post style
let style0 = "outterPostDiv"
let style1 = "PostDiv"
let style2 = "commentSection"
if(!match){
    style0 = "outterPostDivNoImg";
    style1 = "PostDivNoImg";
    style2 = "commentSectionNoImg";
    trimmedTitle = props.title.substring(0, 115);
}
//props.created need to format
    return (
        <div className={style0}>

            <div className="upvotes">
                <p>{smallVotes}</p>
            </div>
            
            <div className="mainBody">
                <div className="subSection">
                    <p>{props.subreddit} Posted by {props.author}</p>
                </div>

                <div className={style1} onClick={handleClick}>
                    <h1>{trimmedTitle}</h1>
                    {match && <div className="PostImg">
                        <img src={thumbImg}></img></div>}
                </div>
                
                <div className={style2}>
                    <p>{smallComments} Comments</p>
                </div>
            </div>
        </div>
    );
}
   
export default Post;  