import React from 'react';
import './play-pause.css';

//iconos
import Play from '../../icons/components/play.jsx';
import Pause from '../../icons/components/pause.jsx';

const PlayPausa = (props) => (
    <div className="PlayPause">
        {
            props.pause ?
                <button
                className="PlayPause__play"
                onClick={props.handleClick}
                >
                    <Play width={30} heigth={30} color="white" />
                </button>
            :
                <button
                className="PlayPause__pause"
                onClick={props.handleClick}
                >
                    <Pause width={30} heigth={30} color="white" />
                </button>
        }
    </div>
)

export default PlayPausa;