import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
import VertDiv from './components/VertDiv'
import CodeInput from './components/CodeInput'
import Button from './components/Button'
import Image from './components/Image'
import Text from './components/Text'

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const InnerDiv = styled.div`
  text-align: center;
  align-self: center;
  align-items: center;
  width: 25em;
  max-width: 100%;
`

const LogoImage = styled(Image)`
  width: 15em;
  height: auto;
`

const ConnectButton = styled(Button)`
  margin-top: 1em;
  font-size: 2.6em;
`

const MenuText = styled(Text)`
  font-size: 2.75em;
`

function Menu({connectCode, setConnectCode, connect}) {
    return (
      <OuterDiv>
        <InnerDiv>
        
            <LogoImage src={logo} />
            <MenuText>AmoangOus <span style={{color:'#ccd753'}}>Web</span></MenuText>
            <CodeInput 
              placeholder={'dogeyefix'} 
              setConnectCode={setConnectCode}
              value={connectCode}
              onInput={i => {
                setConnectCode(i.target.value)
              }}
            />
            <ConnectButton connect={connect} onClick={connect}>connect</ConnectButton>
          
        </InnerDiv>
      </OuterDiv>
    )
}
  
export default Menu;