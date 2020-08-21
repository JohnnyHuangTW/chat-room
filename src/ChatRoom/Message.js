import React, { forwardRef, Fragment } from 'react'
import moment from 'moment'
import './Message.css'
import { Card, CardContent, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const avatarColors = [
  '#DD6031',
  '#F15152',
  '#7B886F',
  '#474B24',
  '#4A051C',
  '#FF6B6C',
  '#8E936D',
  '#0C7C59',
  '#16BAC5',
  '#B0413E',
  '#EA526F',
  '#17BEBB'
]

const avatarNameGenerator = name => {
  const splitName = name.split(' ')
  const firstChar = splitName[0].charAt(0).toUpperCase()
  const secChar = splitName[1] && splitName[1].charAt(0).toUpperCase() || ""
  return firstChar + secChar
}

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username
  const date = message.timestamp && message.timestamp.toDate()
  const avatarColor = avatarColors[(message.username.length * 5) % 12]
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    avatar: {
      color: theme.palette.getContrastText(avatarColor),
      backgroundColor: avatarColor
    }
  }))

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      {!isUser ? (
        <Fragment>
          <Avatar className={useStyles().avatar}>
            {avatarNameGenerator(message.username) || 'UU'}
          </Avatar>
          <div className="message__wrapper">
            <div className="message__title">
              <div className="message__name">{message.username || 'Unknown User'}</div>
              <div className="message__timestamp">{moment(date).format('LT').toString()}</div>
            </div>
            <Card className="message__card">
              <CardContent className="card__content">
                <Typography>{message.text}</Typography>
              </CardContent>
            </Card>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Card className="message__card card__user">
            <CardContent className="card__content">
              <Typography>{message.text}</Typography>
            </CardContent>
          </Card>
          <div className="message__timestamp">{moment(date).format('LT').toString()}</div>
        </Fragment>
      )}
    </div>
  )
})

export default Message
