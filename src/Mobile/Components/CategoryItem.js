import { createFragmentContainer } from 'react-relay'
import { DIVIDER_COLOR } from '../Constants'
import { ButtonBase } from '@material-ui/core'
import Color from '../Constants/Color'
import graphql from 'babel-plugin-relay/macro'
import Link from '../Components/Link'
import useAppContext from '../hooks/useAppContext'
import { useState, useEffect } from 'react'
import { useLongPress } from 'use-long-press'

const Component = props => {
  const { href, category, highlight, style } = props
  return (
    <ButtonBase 
      href={href} 
      component={Link}
      disableRipple
      style={{
        height: '100%'
      }}
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