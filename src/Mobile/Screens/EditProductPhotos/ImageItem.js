import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { useState } from 'react'

const Component = props => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
      }}
    >
      <img
        src={props.src}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          bottom: 0,
          objectFit: 'cover'
        }}
      />

      <div style={{
        position: 'absolute',
        top: 5,
        right: 5
      }}>
      <IconButton size="small" onClick={handleClick}>
        <MoreVert style={{ color: 'white' }} />
      </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Set as main photo</MenuItem>
        <MenuItem onClick={handleClose}>Select</MenuItem>
      </Menu>
    </div>
  )
}

export default Component