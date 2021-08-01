import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert, LensOutlined, CheckCircleOutline } from '@material-ui/icons'
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

  const toggleCheck = () => {
    const { id } = props.image
    props.setSelectedIds(prev => {
      if(prev.includes(id)) {
        return prev.filter(x => x !== id)
      }
      return [...prev, id]
    })
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
      }}
      onClick={props.selectedIds.length === 0 ? undefined : toggleCheck}
    >
      <img
        src={props.image.url}
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
      {props.selectedIds.length === 0 ?
      <IconButton size="small" onClick={handleClick}>
        <MoreVert style={{ color: 'white' }} />
      </IconButton>
      :
      <IconButton size="small">
        {props.selectedIds.includes(props.image.id) ?
        <CheckCircleOutline style={{ color: 'white' }}/>
        :
        <LensOutlined style={{ color: 'white' }}/>
        }
      </IconButton>
      }
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Set as main photo</MenuItem>
        <MenuItem onClick={() => {
          props.setSelectedIds(prev => [...prev, props.image.id])
          handleClose()
        }}>Select</MenuItem>
      </Menu>
    </div>
  )
}

export default Component