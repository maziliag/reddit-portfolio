import React, {useEffect, useState} from 'react';
import SearchBox from './searchBox';
import search from "../media/search.png"

function Header (props) {
//__________Updating search results______________________________
const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);

const updateSearch = e => {
    props.setDisplaySearch(true);
    setSearchQuery(e.target.value);
}

let searchQueryToUse = searchQuery;

searchQueryToUse.replace(/\s/g, '')
console.log(searchQuery)

useEffect(() => {
    getSearch();
}, [searchQuery])

const getSearch = async () => {
    let response = await fetch(
        `https://www.reddit.com/search.json?q=${searchQuery}`
        );
    let json = await response.json();

    setSearchResults(json.data.children);
}

//__________Search bar______________________________

    let style = "searchBoxDiv";
    if(props.displaySearch){
        style += "Display";
    } 

//__________Handlers______________________________

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTopic(searchQuery);
        props.setDisplaySearch(false);
        setSearchQuery("");
    }

    const onSelect = () => {
        props.setDisplaySearch(!props.displaySearch);
    }

    if(searchQuery === ""){
        props.setDisplaySearch(false);
    }

    return(
        <div className="HeaderDiv">
            <h1 className="headerElement">RedditLite</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <img src={search} />
                <input
                    id="myInput"
                    placeholder="Search for..."
                    className="search-bar" 
                    type="text" 
                    value={searchQuery}
                    onChange={updateSearch}
                    onClick={onSelect}
                    />                
            </form>
            <div className="headerElement"></div>

            <SearchBox
                setDisplaySearch={props.setDisplaySearch}
                displaySearch={props.displaySearch}
                className={style}
                searchResults={searchResults}
                searchQuery={searchQuery}
                /> 
        </div>
    );
}

export default Header;