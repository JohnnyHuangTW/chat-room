import React, { useState } from 'react'
import './InputField.css'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    }
  }
})

const InputField = () => {
  const classes = useStyles()
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: append message
    setInput('')
  }
  return (
    <div className="input">
      <form className="input__form">
        <FormControl className="input__form__formControl">
          <TextField
            placeholder="Enter a message"
            InputProps={{ classes }}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </FormControl>
        <IconButton type="submit" disabled={!input} onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
      </form>
    </div>
  )
}

export default InputField
