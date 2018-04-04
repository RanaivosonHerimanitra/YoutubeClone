/*
 import toujours avant n'importe quel code!!
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const youtubeAPI_KEY = "AIzaSyC5G7JVOw6qpkheAUlt_nQcCSBVIbV8968"


/*
usage de l'API de recherche de youtube
*/
YTSearch({key: youtubeAPI_KEY, term:"react js"}, function(data) {
  console.log(data);
})

//immutable in es:  const
//jsx dialect of javascript
/*const App = () =>{
  return <div><SearchBar/></div>;
}*/

class App extends Component {
  render () {
    return <div><SearchBar/></div>;
  }
}
// App is a class
// to instantiate it: <App/>

ReactDOM.render(<App/>,document.querySelector(".container"))