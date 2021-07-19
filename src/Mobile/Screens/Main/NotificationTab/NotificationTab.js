import { HEADER_HEIGHT } from '../../../Constants'

const Component = props => {
  const { active } = props
  return (
    <div style={{
      display: active ? undefined : 'none',
      backgroundColor: 'white',
      marginBottom: 68
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0
      }}>
        <h1 style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 500,
          textAlign: 'center'
        }}>Notification</h1>
      </div>

      <div style={{
        marginTop: 64
      }}>
        {new Array(100).fill(null).map((item, i) => {
          return (
            <div style={{
              paddingLeft: 15,
              paddingTop: 10,
              paddingBottom: 10,
              paddingRight: 15,
              display: 'flex',
              flexDirection: 'row',
              borderBottom: '1px solid #f1f1f1'
            }}>
              <img
                src="https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg"
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 15
                }}
              />

              <div>
                <p style={{ margin: 0 }}>Masa penyewaan akan berakhir besok. Mohon barang dikembalikan sesuai waktu pengembalian</p>
                <p style={{
                  fontSize: 11,
                  color: 'grey',
                  marginTop: 10
                }}>17 November 2020, 02:00</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component