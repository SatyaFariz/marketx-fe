import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { Button, TextField } from '@material-ui/core'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import OTPScreen from '../OTP/OTPScreen'

const Component = props => {
  const { history, queryParams } = useAppContext()

  const showOTPModal = () => {
    history.push(`/profile?mobileNumber=${'082322343005'}`)
  }
  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          zIndex: 1
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>Profile</h1>
        </div>
      </div>
      <div style={{
        marginTop: HEADER_HEIGHT
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '25px 0'
        }}>
          <div style={{
            height: 100,
            width: 100,
            borderRadius: '50%',
            backgroundColor: Color.primary,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 15
          }}>
            <span style={{ textTransform: 'uppercase', fontWeight: 500, fontSize: 40, color: 'white' }}>{'S'}</span>
          </div>

          {/* <Button
            variant="contained"
            disableElevation
            style={{ margin: 0 }}
          >
            Edit
          </Button> */}
          
        </div>

        <div style={{
          padding: '20px 20px',
          paddingTop: 0
        }}>
          <TextField
            // variant="filled"
            label="Name"
            fullWidth
            style={{
              marginBottom: 25
            }}
          />

          <TextField
            // variant="filled"
            label="Mobile Number"
            fullWidth
            style={{
              marginBottom: 25
            }}
          />

          <TextField
            // variant="filled"
            label="Email"
            fullWidth
            style={{
              marginBottom: 25
            }}
          />

          <Button
            disableElevation
            variant="contained"
            fullWidth
            style={{ textTransform: 'none' }}
            onClick={showOTPModal}
          >
            Save
          </Button>
        </div>
      </div>

      {queryParams.mobileNumber &&
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}>
        <OTPScreen/>
      </div>
      }
    </div>
  )
}

export default Component