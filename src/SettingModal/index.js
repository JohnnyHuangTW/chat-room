import React, { useState } from 'react'
import './index.css'
import { DialogTitle, Dialog, TextField, Button } from '@material-ui/core'

const SettingModal = props => {
  const { onClose, visible, onSubmit } = props
  const [username, setUserName] = useState('')
  const onSubmitHandler = e => {
    e.preventDefault()
    onSubmit(username)
  }

  return (
    <Dialog onClose={onClose} open={visible}>
      <DialogTitle>Welcome!</DialogTitle>
      <form autoComplete="off">
        <div className="setting__content">
          <TextField
            className="setting__input"
            id="setting-username"
            placeholder="Enter a name to start"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="setting__actions">
          <Button
            type="submit"
            disabled={!username}
            variant="contained"
            color="primary"
            onClick={onSubmitHandler}
          >
            Enter
          </Button>
        </div>
      </form>
    </Dialog>
  )
}

export default SettingModal
