import React, { useState, useEffect, useRef } from 'react'
import './Messages.css'
import Message from './Message'
import db from '../service/firebase'
import { user } from '../service/user'
import FlipMove from 'react-flip-move'

const Messages = () => {
  const [messages, setMessages] = useState([])
  let messagesEnd = useRef(null)
  const username = user.username()
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .limitToLast(50)
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
        // console.log('fetch new messages', newMessages)
        setMessages(newMessages)
        scrollToBottom()
      })
  }, [])

  const scrollToBottom = () => {
    if (messagesEnd.current) messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="messages">
      <FlipMove>
        {messages.map(
          ({ id, data }) =>
            data.timestamp && <Message key={id} username={username} message={data} />
        )}
      </FlipMove>
      <div ref={messagesEnd} id="dummy-scroll-btm" />
    </div>
  )
}

export default Messages
