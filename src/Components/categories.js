import React from "react";
import forza from "../media/forza.png"
import dogecoin from "../media/dogecoin.png"
import webdev from "../media/webdev.jpg"
import music from "../media/music.png"
import hacking from "../media/hacking.jpg"
 
function Categories (props) {

    const onTopicChange = (e) => {
        e.preventDefault()
        props.setTopic(e.target.value)
        console.log("submitted")
    } 

    return (
        <div className="CategoriesDiv">
            <div className="categories">
                <h2>Categories</h2>
            </div>
            <button value="Music" type="button"
                onClick={onTopicChange}><img src={music}/>
                <span>/r/Music</span>
                    </button>
            <button value="webdev" 
                onClick={onTopicChange}>
                    <img src={webdev}/>
                    <span>r/Webdev/</span></button>
            <button value="Forza" 
                onClick={onTopicChange}>
                    <img src={forza}/>
                    <span>r/Forza/</span></button>
            <button value="Hacking" 
                onClick={onTopicChange}>
                    <img src={hacking}/>
                    <span>r/Hacking/</span></button>
            <button value="dogecoin" 
                onClick={onTopicChange}>
                    <img src={dogecoin}/>
                    <span>r/Dogecoin/</span></button>
        </div>
    );
}
 
export default Categories;