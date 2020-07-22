import React, { useState, useEffect } from 'react'
import '../App.css';

function SearchBar (props) {

const [Query, setQuery] = useState('');
const [Images, setImages] = useState({});

const inputChange = (event) => {
	const Query = event.target.value;
    setQuery (Query);
    getImages (Query);
};

const getImages = async () => {
  let response = await fetch(`https://pixabay.com/api/?key=17564121-870a14721f28b8246a1c9583d&q=${Query}`);
  let result = await response.json()
  setImages(result.hits);
  return result;
}

const renderImages = () => {
	if (Object.keys(Images).length && Images.length) {
	return (
		<div className="results-container">
			{Images.map((result) => {
			return (
				<div className="image-wrapper">
				<div className="imge-box"> 
				<a key={result.id} href={result.pageURL} > <img className="image" src={result.webformatURL} alt={result.user}/></a>
				<div className="image-infos"> {result.tags } </div></div> 
				</div>
			);
			})}
		</div>
	);
  	}
	else
    return (
    	<div className="noimage-container"> <h1>no images to display</h1> </div> )
};

useEffect(() => { }, [Query])

return (
    <div>
    <label htmlFor="search-input" className="search-label"> 
    <input 
    	type="text"
        value= {Query}
        name="query"
        id="search-input"
        placeholder="search image..." 
        onChange={inputChange} />
        <i className="fa fa-search search-icon"/>
    </label>
    { renderImages () }
    </div>
  )
}

export default SearchBar;