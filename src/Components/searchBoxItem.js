import React from "react";

function SearchBoxItem (props) {
    
    const handleClick = () => {
        window.open(`https://www.reddit.com/${props.link}`, "_blank")
    }

    let trimmedTitle = props.title.substring(0, 35);

    if(props.title.length > 35){
        trimmedTitle += "..."
    }

    return( 
            <div className="searchBoxItem" onClick={handleClick}>          
                <p> {trimmedTitle} </p>
            </div>
        
    );
}

export default SearchBoxItem;