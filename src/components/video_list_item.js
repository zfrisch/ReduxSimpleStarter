import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageURL = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	return ( 
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div className="videolist media">
		<div className="media-left">
		<img src={imageURL} alt="Video" className="media-object" /></div>
		<div className="media-body">
		<div className="media-heading">{videoTitle}</div>
		</div>
		</div>
		</li>
		);
};

export default VideoListItem;