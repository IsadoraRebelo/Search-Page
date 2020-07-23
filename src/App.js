import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [Query, setQuery] = useState('');
  const [Images, setImages] = useState([]);

// Future update, pagination.
/*  const [pageNumber, setpageNumber] = useState(1);
  const [prevPage, setprevPage] = useState({});
  const [nextPage, setnextPage] = useState({}); */


useEffect(() => {
	async function getImages() {
		let response = await fetch(`https://pixabay.com/api/?key=17564121-870a14721f28b8246a1c9583d&q=${Query}`);
		let result = await response.json()
		setImages(result.hits);
	}
	getImages();
}, [Query]);

const inputChange = (event) => {
	const Query = event.target.value;
	setQuery (Query);
};

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
    return ( <div className="noimage-container"> <h1>no images to display</h1> </div> )
};

  return (
	<div> 
	<header className="container-header"> 
	<a href="https://pixabay.com/" className="pixabay-logo"> </a>
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
    <h2> Image Search </h2>
	</header>
	{ renderImages () } 
	<h2 className="madeby">
	This page was made by Isadora Rebelo <br></br> 
	you can sneak peek on the code <a href="https://github.com/IsadoraRebelo/Search-Page">clicking here</a>. 
	</h2> </div>
	
  );
}

export default App;
