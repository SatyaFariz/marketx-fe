import App from '../../app.json'

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
    </div>
  )
}

export default Component