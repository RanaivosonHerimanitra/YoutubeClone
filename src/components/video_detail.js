import React from 'react'

const VideoDetail = ({video}) => {

    //handling null props
    if (!video ) {
        return <div>Loading videos...</div>
    }
    const title= video.snippet.title
    const desc = video.snippet.description
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail col-md-8">
         <div className="embed-responsive embed-responsive-16by9">
         <iframe src={url} className="embed-responsive-item"></iframe>
         </div>
         <div className="details">

           <div>{title}</div>
           <div>{desc}</div>
         </div>
        </div>
    )

}

export default VideoDetail