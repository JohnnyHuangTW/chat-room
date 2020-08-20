import React, { useState, useEffect } from 'react'
import './Messages.css'
import Message from './Message'
import db from '../service/firebase'
import { user } from '../service/user'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const username = user.username()
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => doc.data())
        console.log('fetch new messages', newMessages)
        setMessages(newMessages)
      })
  }, [])

  return (
    <div className="messages">
      {messages.map(
        message =>
          message.timestamp && (
            <Message key={message.username} username={username} message={message} />
          )
      )}
    </div>
  )
}

export default Messages
