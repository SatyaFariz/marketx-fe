import { Button, CircularProgress } from '@material-ui/core'

const Component = props => {
  const {
    label,
    loading,
    disabled,
    icon,
    thick,
    onClick,
    ...rest
  } = props
  const style = thick ? { ...(props.style || {}), paddingTop: 10, paddingBottom: 10 } : props.style
  return (
    <Button 
      {...rest}
      onClick={loading ? () => {} : onClick}
      variant="contained"
      disableElevation
      disabled={disabled}
      style={style}
      color="primary"
    >
      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          visibility: loading ? 'hidden' : undefined
        }}>
          {icon}
          <span style={{ 
            marginLeft: icon ? 5 : 0, 
            textTransform: 'none',
            letterSpacing: 0 
          }}>{label}</span>
        </div>

        {loading &&
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgress size={18} style={{ color: 'white' }}/>
        </div>
        }
      </div>
    </Button>
  )
}

export default Component