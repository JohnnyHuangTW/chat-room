import React from 'react'
import './Messages.css'
import Message from './Message'

const messages = [
  { username: 'user1', text: 'test message 1' },
  { username: 'user1', text: 'test message 2' },
  { username: 'user1', text: 'test message 3' },
  { username: 'user1', text: 'test message 4' }
]

const Messages = () => {
  return (
    <div className="messages">
      {messages.map(message => (
        <Message username={'123'} message={message} />
      ))}
    </div>
  )
}

export default Messages
