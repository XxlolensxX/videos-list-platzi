import React from 'react';

const Icon = (props) => {
    const {
        color,
        width,
        heigth
    } = props

    return (
        <svg
        fill={color}
        width={width}
        heigth={heigth}
        viewBox={width}
        >
            {props.children}
        </svg>
    )
}

export default Icon;