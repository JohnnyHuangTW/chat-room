import React from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = ({ username, message }) => {
  const isUser = username === message.username
  return (
    <div className="message">
      {!isUser && <label className="message__label">{message.username}</label>}
      <Card className={`card ${isUser && 'card__user'}`}>
        <CardContent className="card__content">
          <Typography>
            {/* {username !== message.username && `${message.username}: `} */}
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Message
