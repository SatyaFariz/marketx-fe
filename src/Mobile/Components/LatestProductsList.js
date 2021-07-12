

const products = [
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  },
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  },
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  },
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  },
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  },
  {
    name: 'Toyota Innova',
    image: 'https://www.cumi.id/media/items-photos/42be6a1fe5ca56c562e35975974ffc18-m.jpg',
    price: 'Rp600.000 / day'
  }
]
const Component = props => {
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
    }}>
      <h1 style={{
        fontSize: 24,
        // lineHeight: 27,
        fontWeight: 'bold',
      }}>Newest Additions</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: 20,
        gridRowGap: 15
      }}>
        {products.map((item, i) => {
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', aspectRatio: 1, borderRadius: 10, marginBottom: 10 }}
              />
              <span style={{
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 5
              }}>{item.name}</span>
              <span style={{
                fontSize: 16
              }}>{item.price}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component