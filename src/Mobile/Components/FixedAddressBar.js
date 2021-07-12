
const Component = ({ children }) => {
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
        {children}
      </div>
    </div>
  )
}

export default Component