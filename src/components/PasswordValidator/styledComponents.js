// Style your elements here
import styled from 'styled-components'
// import {MainContainer, NameInput, MsgContent, Para} from './styledComponents'

export const MainContainer = styled.div`
background-color: #24263c;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`

export const PasswordValidatorContainer = styled.div`
background-color: #383a4e;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 10px;
padding: 30px;
`

export const Heading = styled.h1`
font-size: 35px;
color: #ffffff;
margin-bottom: 0px;
font-family: Roboto;
`
export const Para = styled.p`
color: #f8fafc;
font-size: 12px;
margin-bottom: 20px;

`
export const Input = styled.input`
background-color: #edeeff;
outline: none;
border-style: none;
padding: 6px;
margin-top:20px;
margin-bottom: 2px;
width: 90%;
`

export const MsgContent = styled.p`
color: #ef4444;
margin-top:2px;
font-size: 10px;
`
