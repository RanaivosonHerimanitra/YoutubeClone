import React from 'react'


const VideoListItem = ({video}) => {
   //console.log(video)
   //one can see it by console logging video...
   const imgURL = video.snippet.thumbnails.default.url
   const title = video.snippet.title

    return (
    <li className="list-group-item">
      <div className="video-list media">
         <div className="media-left">
           <img src = {imgURL} className="media-object"/>
         </div>

         <div className="media-body">
           <div className="media-heading">{title}</div>
         </div>
      </div>
    </li>
    )
}

export default VideoListItem;
