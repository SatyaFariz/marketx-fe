import { ButtonBase } from '@material-ui/core'
import { LOGO_URL, ERROR_ILLUSTRATION_URL } from '../Constants'
import Link from '../Components/Link'

const Component = props => {
  const { error } = props
  return (
    <div style={{
      height: '100%',
      width: '100%',
      position: 'fixed',
      left: 0,
      right: 0,
      overflow: 'hidden'
    }}>
      
      <div style={{
        height: '100%',
        overflow: 'hidden auto',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          <div style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexGrow: 1
          }}>
            <ButtonBase
              component={Link}
              href='/'
              disableRipple
            >
              <img
                alt="marketx-logo"
                src={LOGO_URL}
                style={{
                  height: 24
                }}
              />
            </ButtonBase>

            <div style={{
              marginTop: 40
            }}>
              {error.status &&
              <>
                <h4 style={{
                  fontSize: 48,
                  margin: 0
                }}>
                  {error.status}
                </h4>
                
                <h6 style={{ margin: 0, fontSize: 20 }}>
                  {error.status?.toString() === '404' ? 'Halaman tidak ditemukan!' : 'Oops... Error!!!'}
                </h6>
              </>
              }
            </div>

            <div style={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'column'
            }}>
              <img
                alt="Illustration not found"
                src={ERROR_ILLUSTRATION_URL}
                style={{
                  width: 250,
                  height: 250,
                  marginBottom: 15
                }}
              />
              {!error.status &&
              <h6 style={{ margin: 0, fontSize: 20 }}>
                Oops... Error!!!
              </h6>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component