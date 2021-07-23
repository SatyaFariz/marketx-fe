import { LOGO_URL } from '../../Constants'
import { TextField, Button } from '@material-ui/core'
import Color from '../../Constants/Color'
import Link from '../../Components/Link'

const Component = props => {
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30
    }}>
      <img
        alt="twitter"
        src={LOGO_URL}
        style={{
          height: 38,
          width: 38
        }}
      />

      <h1 style={{
        marginTop: 30,
        marginBottom: 10
      }}>Log in to RentX</h1>

      <TextField
        variant="outlined"
        label="Phone Number"
        fullWidth
        style={{
          marginTop: 10,
          marginBottom: 10
        }}
      />

      <Button
        variant="contained"
        style={{
          marginTop: 10,
          marginBottom: 10,
          textTransform: 'none',
          height: 44
        }}
        disableElevation
        fullWidth
      >
        Log in
      </Button>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 20
      }}>
        <Link
          href='/register'
          style={{ color: Color.link }}
        >
        <span>Create an account</span>
        </Link>
        
      </div>
    </div>
  )
}

export default Component