import React from 'react'
import './Header.css'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PersonIcon from '@material-ui/icons/Person'

const Header = ({ onChangeName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickChangeName = () => {
    onChangeName()
    handleClose()
  }

  return (
    <div className="header">
      <div>THE FOOD COURT</div>
      <IconButton aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickChangeName}>
          <PersonIcon style={{ marginRight: '10px' }} />
          Change Name
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Header
