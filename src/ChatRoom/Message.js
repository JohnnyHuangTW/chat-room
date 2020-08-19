import React from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = ({ username, message }) => {
  return (
    <div className="message">
      <label className="message__label">{message.username}</label>
      <Card className="card">
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
