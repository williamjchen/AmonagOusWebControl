import React from 'react'
import styled from 'styled-components'
import Image from './Image'

import black from '../images/black.png'
import blue from '../images/blue.png'
import brown from '../images/brown.png'
import cyan from '../images/cyan.png'
import green from '../images/green.png'
import lime from '../images/lime.png'
import orange from '../images/orange.png'
import pink from '../images/pink.png'
import purple from '../images/purple.png'
import red from '../images/red.png'
import white from '../images/white.png'
import yellow from '../images/yellow.png'

import black_dead from '../images/black_dead.png'
import blue_dead from '../images/blue_dead.png'
import brown_dead from '../images/brown_dead.png'
import cyan_dead from '../images/cyan_dead.png'
import green_dead from '../images/green_dead.png'
import lime_dead from '../images/lime_dead.png'
import orange_dead from '../images/orange_dead.png'
import pink_dead from '../images/pink_dead.png'
import purple_dead from '../images/purple_dead.png'
import red_dead from '../images/red_dead.png'
import white_dead from '../images/white_dead.png'
import yellow_dead from '../images/yellow_dead.png'

const colours = {
    black: '#72808B',
    cyan: '#68B4A7',
    green: '#4E885D',
    orange: '#E2A45B',
    pink: '#F59CD8',
    purple: '#A171DF',
    yellow: '#E0E05B',
    lime: '#90DB84',
    red: '#DD6867',
    white: '#B3BED2',
    brown: '#A07E58',
    blue: '#576AD4'
}

const alive_images = {
    black: black,
    cyan: cyan,
    green: green,
    orange: orange,
    pink: pink,
    purple: purple,
    yellow: yellow,
    lime: lime,
    red: red,
    white: white,
    brown: brown,
    blue: blue
}

const dead_images = {
    black: black_dead,
    cyan: cyan_dead,
    green: green_dead,
    orange: orange_dead,
    pink: pink_dead,
    purple: purple_dead,
    yellow: yellow_dead,
    lime: lime_dead,
    red: red_dead,
    white: white_dead,
    brown: brown_dead,
    blue: blue_dead
}


function PlayerIcon({name, colour, alive, onClick}) {
    const PlayerImage = styled(Image)`
        vertical-align: middle;
        height: 2em;
        width: auto;
        margin-right: 1em;
    `
    
    const PlayerButton = styled.button`
        font-family: 'Raleway', sans-serif;
        font-size: 1em;
        color: white;
        border:none;
        background-color: ${colours[colour]};
        width: 8em;
        border-radius: 1.5em;
        padding: 0.6em 0.75em;
        filter: ${alive ? '' : 'brightness(0.6)'};
        margin:1em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:focus, button:active {
            outline: none;
        }

        &:hover {
            filter: brightness(70%);
        }
    `
    return (
        <PlayerButton onClick={onClick}>
            <PlayerImage src={alive?alive_images[colour]:dead_images[colour]}/>
            {name}
        </PlayerButton>
    )
}
  
export default PlayerIcon;