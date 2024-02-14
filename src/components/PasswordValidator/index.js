// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Input,
  MsgContent,
  Para,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 ? (
          <MsgContent>Your password must be at least 8 characters</MsgContent>
        ) : (
          ''
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}

export default PasswordValidator
