import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header = () => {
  return (
    <div className="header">
      <div>CHAT ROOM</div>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}

export default Header
