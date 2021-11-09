import App from '../../app.json'
import Color from '../Constants/Color'

const Dot = (props) => {
  const { size } = props
  const diameter = size === 'small' ? 20 : (size === 'medium' ? 50 : 75)
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: Color.primary,
      height: diameter,
      width: diameter,
      borderRadius: '50%',
      boxShadow: `0 0 3px 7px ${Color.primary}`,
      ...props.style
    }}/>
  )
}

const Component = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
        textAlign: 'center'
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

      <Dot
        size='medium'
        style={{
          bottom: 10,
          left: 0,
          transform: 'translateX(20vw)'
        }}
      />

      <Dot
        size='medium'
        style={{
          bottom: 15,
          left: 0,
          transform: 'translateX(85vw)'
        }}
      />

      <Dot
        size='big'
        style={{
          top: 0,
          right: 0,
          transform: 'translate(50%, 45vh)'
        }}
      />

      <Dot
        size='big'
        style={{
          top: 0,
          left: 0,
          transform: 'translate(40vw, -50%)'
        }}
      />

      <Dot
        size='small'
        style={{
          top: 0,
          left: 0,
          transform: 'translate(20vw, 60vh)'
        }}
      />

      <Dot
        size='small'
        style={{
          top: 0,
          left: 0,
          transform: 'translate(70vw, 85vh)'
        }}
      />

      <Dot
        size='small'
        style={{
          top: 0,
          left: 0,
          transform: 'translate(75vw, 50vh)'
        }}
      />
    </div>
  )
}

export default Component