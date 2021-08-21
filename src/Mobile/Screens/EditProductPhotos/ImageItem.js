import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert, LensOutlined, CheckCircleOutline } from '@material-ui/icons'
import { useState } from 'react'

const Component = props => {
  const [anchorEl, setAnchorEl] = useState(null)

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

  const onImageClick = () => {
    if(props.selectedIds.length > 0) {
      toggleCheck()
    }
  }

  // const longPressEvent = useLongPress(toggleCheck, onImageClick)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
      }}
      // {...longPressEvent}
      onClick={onImageClick}
    >
      <img
        src={props.image.url}
        alt={props.image.url}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          bottom: 0,
          objectFit: 'cover'
        }}
      />
      {/* {props.image.display === 1 &&
      <div style={{
        position: 'absolute',
        top: 5,
        left: 5
      }}>
        <IconButton size="small">
          <Star style={{ color: 'white' }} />
        </IconButton>
      </div>
      } */}

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
        {!props.isMain &&
        <MenuItem onClick={() => {
          props.updateMainImage()
          handleClose()
        }}>Set as main photo</MenuItem>
        }
        <MenuItem onClick={() => {
          props.setSelectedIds(prev => [...prev, props.image.id])
          handleClose()
        }}>Select</MenuItem>
      </Menu>
    </div>
  )
}

export default Component