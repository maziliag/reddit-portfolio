import React from "react";
import SearchBoxItem from "./searchBoxItem";

function SearchBox (props) {

    const handleClick = () => {
        props.setDisplaySearch(!props.displaySearch)
    }

    return (
        <div className={props.className} onClick={handleClick}>

            {props.searchResults.map(item => (
                <SearchBoxItem 
                title={item.data.title}
                link={item.data.url}
                key={Math.random()}/>
            ))}

        </div>
    );  
}

export default SearchBox;