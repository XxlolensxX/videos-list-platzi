import React, { Component } from 'react';
import './video.css';

export default class Video extends Component {
    render() {
        return(
            <video 
            src={this.props.src}
            autoPlay={this.props.autoPlay}
            />
        )
    }
}
