import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component {
    getListOfVideos = () => {
        const {videos, onVideoSelect} = this.props;
        return videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>);
    }
    render() {
        return (
            <div className="ui relaxed divided list">
               {this.getListOfVideos()}
            </div>
        );  
    }
}

export default VideoList;