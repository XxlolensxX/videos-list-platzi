import React from 'react';
import Media from './media';
import  './playlist.css';

const Playlist = (props) => {
        return(
            <div className="Playlist">
                {
                props.playlist.map((item) => {
                    return (
                        <Media 
                        {...item} 
                        key={item.id}
                        handleOpenModal={props.handleOpenModal}
                        />
                )
                    })
                }
            </div>
        )  
    }

export default Playlist;