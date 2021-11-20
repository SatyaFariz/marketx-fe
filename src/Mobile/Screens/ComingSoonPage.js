import App from '../../app.json'
import Color from '../Constants/Color'
import Logo from '../../assets/marketx_logo.jpg'

const thisYear = new Date().getFullYear()

const Component = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        marginTop: 25
      }}>
        <img
          alt="Market X logo"
          src={Logo}
          style={{
            height: 80
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
        textAlign: 'center',
        zIndex: 999999,
        flexGrow: 1
      }}>
        <h1 style={{
          margin: 0,
          marginBottom: 10
        }}>Desktop Version Under Development</h1>
        <p style={{
          margin: 0,
          color: 'rgb(83, 100, 113)'
        }}>
          {App.name} versi desktop masih dalam tahap pengembangan. Untuk sementara waktu Anda dapat menggunakan browser untuk mobile.
        </p>
      </div>

      <div style={{
        backgroundColor: Color.primary,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <span style={{ color: 'white' }}>Copyright © {App.year_founded}{App.year_founded === thisYear ? '' : ` - ${thisYear}`} {App.name}</span>
      </div>
    </div>
  )
}

export default Component