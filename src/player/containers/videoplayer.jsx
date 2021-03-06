import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoplayerlayout.jsx';
import Video from '../components/video.jsx';
import Title from '../components/title.jsx';
import PlayPause from '../components/play-pause.jsx';

class VideoPlayer extends Component {
    state = {
        pause: true,
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title="Titulo del video"
                />
                <PlayPause 
                pause={this.state.pause}
                handleClick={this.togglePlay}
                />
                <Video 
                autoPlay={this.props.autoplay}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;