import React, { forwardRef } from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username
  const date = message.timestamp && message.timestamp.toDate()
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <div>
        {!isUser && <label className="message__label">{message.username || 'Unknown User'}</label>}
        <Card className={`card ${isUser && 'card__user'}`}>
          <CardContent className="card__content">
            <Typography style={{ fontWeight: 'bold' }}>{message.text}</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="message__timestamp">
        {date.getHours()}:{date.getMinutes()}
      </div>
    </div>
  )
})

export default Message
