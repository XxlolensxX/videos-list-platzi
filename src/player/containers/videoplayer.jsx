import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoplayerlayout.jsx';
import Video from '../components/video.jsx';
import Title from '../components/title.jsx';

class VideoPlayer extends Component {
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title="Titulo del video"
                />
                <Video 
                autoPlay={true}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;