import { createFragmentContainer } from 'react-relay'
import { ButtonBase } from '@material-ui/core'
import Color from '../Constants/Color'
import graphql from 'babel-plugin-relay/macro'
import Link from '../Components/Link'
import { Menu, MenuItem } from '@material-ui/core'
import { useState } from 'react'
import { useLongPress } from 'use-long-press'

const Component = props => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { href, category, me, highlight, style } = props

  const handleLongPress = useLongPress(me?.isAdmin && category.id ? (e) => {
    setAnchorEl(e.target)
  } : null, { captureEvent: true, cancelOnMovement: true, threshold: 500 })

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem 
          component={Link}
          href={`/category/${category.id}/detail`}
        >
          Edit
        </MenuItem>
      </Menu>
      <ButtonBase
        href={href} 
        component={Link}
        disableRipple
        style={{
          height: '100%'
        }}
        {...handleLongPress}
      >
        

        <div style={{
          width: 118,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          ...style
        }}>
          <img
            alt={category.name}
            src={category.icon?.url}
            style={{
              height: 70 - (highlight ? 6 : 0),
              width: 70 - (highlight ? 6 : 0),
              marginBottom: 10,
              borderRadius: '50%',
              border: highlight ? `3px solid ${Color.primary}` : undefined
            }}
          />
          <span style={{ textAlign: 'center' }}>{category.name}</span>
        </div>
      </ButtonBase>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment CategoryItem_me on User {
      id,
      isAdmin
    }
  `
})