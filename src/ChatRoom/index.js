import React from 'react'
import './index.css'
import Header from './Header'
import Messages from './Messages'
import InputField from './InputField'
import Paper from '@material-ui/core/Paper'

const ChatRoom = () => {
  return (
    <Paper className="chatroom" variant="outlined" square>
      <Header />
      <Messages />
      <InputField />
    </Paper>
  )
}

export default ChatRoom
