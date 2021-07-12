
const Component = props => {
  const { active } = props
  return (
    <div style={{
      display: active ? undefined : 'none',
      backgroundColor: 'pink',
      height: '100%'
    }}>

    </div>
  )
}

export default Component