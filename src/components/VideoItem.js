import React from "react";
import './VideoItem.css';

class VideoItem extends React.Component {
    render() {
        const {video, onVideoSelect} = this.props;

        return (
            <div className="video-item item" onClick={() => onVideoSelect(video)}>
                <img className="ui image" 
                    alt={video.snippet.title} 
                    src={video.snippet.thumbnails.medium.url} 
                />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;