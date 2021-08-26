import { Button, CircularProgress } from '@material-ui/core'

const Component = props => {
  const {
    label,
    loading,
    disabled,
    icon,
    ...rest
  } = props
  return (
    <Button 
      {...rest}
      variant="contained"
      disableElevation
      disabled={disabled || loading}
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
          <CircularProgress size={18} style={{ color: 'grey' }}/>
        </div>
        }
      </div>
    </Button>
  )
}

export default Component