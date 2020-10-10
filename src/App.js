import React from 'react';
import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';

import Menu from './menu'
import Game from './game'


function App() {
  const [ connectCode, setConnectCode ] = useState('')
  const [ connected, setConnected] = useState(false)
  const [ name, setName ] = useState('')
  const [ socket, setSocket ] = useState(io('http://67.205.150.186:80'))
  const [ players, setPlayers ] = useState([])


  function connect(){
    const nsocket = io('http://67.205.150.186:80')

    nsocket.on('connect', () => {
      nsocket.emit('join', connectCode)
    })

    nsocket.on('connected', data => {
      const { state, name } = JSON.parse(data)
      setConnected(state)
      setName(name)
    })

    nsocket.on('updatePlayers', data => {
      setPlayers(data['players'])
    })

    nsocket.on('end', () => {
      setConnected(false)
      nsocket.close()
      setSocket(io('localhost:8080'))
    })
  }

  function sendUpdateAlive(colour, alive){
    socket.emit('switchAlive', JSON.stringify({
      code : connectCode,
      colour: colour,
      alive: alive
    }))
  }

  function mute(){
    socket.emit('setMute', connectCode)
  }

  function unmute(){
    socket.emit('unMute', connectCode)
  }

  function reset(){
    socket.emit('Reset', connectCode)
  }

  if(connected){
    return(
      <Game
        name={name}
        players={players}
        sendUpdateAlive={sendUpdateAlive}
        mute={mute}
        unmute={unmute}
        reset={reset}
      />
    )
  }else{
    return(
      <Menu
        connectCode={connectCode}
        setConnectCode={setConnectCode}
        connect={connect}
      />
    )
  }
}

export default App;