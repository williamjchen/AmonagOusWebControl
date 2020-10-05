import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import PlayerIcon from './components/PlayerIcon'
import Text from './components/Text'

const OuterDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const InnerDiv = styled.div`
    justify-content: center;
    text-align: center;
    align-self: center;
    align-items: center;
    width: 45em;
    max-width: 100%;
`

const PlayerDiv = styled.div`
    width: 25em;
    margin: 2em auto;
`

function Game({name, players, sendUpdateAlive, mute, unmute, reset}) {
    return (
        <OuterDiv>
            <InnerDiv>
                <div>
                    <Text style={{fontSize:'3em'}}>Connected to <span style={{color:'grey'}}>{name}</span></Text>
                    <div>
                        <Button style={{fontSize:'2em', margin: '0 0.5em 0 0'}} onClick={mute}>Mute</Button>
                        <Button style={{fontSize:'2em', margin: '0 0 0.5em 0'}} onClick={unmute}>Unmute</Button>
                    </div>
                    <Button style={{fontSize:'2em'}} onClick={reset}>Reset</Button>
                </div>
                <PlayerDiv>
                    {players.map(p => (
                        <PlayerIcon 
                            name={p.name} 
                            colour={p.colour}
                            alive={p.alive}
                            onClick={() => {sendUpdateAlive(p.colour, !p.alive)}}
                        />
                    ))}
                </PlayerDiv>
            </InnerDiv>
        </OuterDiv>
    )
}
  
export default Game;