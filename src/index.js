/*
 import toujours avant n'importe quel code!!
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const youtubeAPI_KEY = "AIzaSyC5G7JVOw6qpkheAUlt_nQcCSBVIbV8968"




//immutable in es:  const
//jsx dialect of javascript
/*const App = () =>{
  return <div><SearchBar/></div>;
}*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {videoList:[],selectedVideo: null}
    /*
     usage de l'API de recherche de youtube
    */
    YTSearch( {key: youtubeAPI_KEY, term:"react js"}, video =>{
       this.setState({videoList: video, selectedVideo:video[0]});
     })
  }

  render () {
    return <div>
      <SearchBar/>
      // la ou on affiche la video courante (en cours)
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
              videos = {this.state.videoList}/>
    </div>;
  }
}
// App is a class
// to instantiate it: <App/>

ReactDOM.render(<App/>,document.querySelector(".container"))