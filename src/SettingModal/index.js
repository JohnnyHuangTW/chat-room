import React, { useState } from 'react'
import './index.css'
import { DialogTitle, Dialog, TextField, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { user } from '../service/user'

const SettingModal = props => {
  const { onClose, visible, onSubmit, onCancel } = props
  const [username, setUserName] = useState(user.username())

  const isNewUser = !user.username()

  console.log(username, isNewUser)

  const onSubmitHandler = e => {
    e.preventDefault()
    onSubmit(username)
  }

  return (
    <Dialog
      onClose={onClose}
      open={visible}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogTitle>{isNewUser ? 'WELCOME!' : 'SETTING'}</DialogTitle>
      <form autoComplete="off" className="setting__form">
        <div className="setting__content">
          <PersonIcon style={{ marginRight: '10px' }} />
          <TextField
            className="setting__input"
            id="setting-username"
            placeholder={isNewUser ? 'Enter a name to start' : 'Enter a name'}
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="setting__actions">
          <Button type="submit" disabled={!username} color="primary" onClick={onSubmitHandler}>
            Enter
          </Button>
          {!isNewUser && <Button style={{ color: '#9E9E9E' }} onClick={onCancel}>
            Cancel
          </Button>}
        </div>
      </form>
    </Dialog>
  )
}

export default SettingModal
