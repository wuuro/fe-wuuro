const headerStyle = {
  display: 'flex',
  'flex-direction': 'row',
  height: '80px'
}

const containerStyle = {
  display: 'flex',
  padding: '0px 20px'
}

const imgStyle = {
  height: '80px',
  width: '180px',
  verticalAlign: 'middle',
  borderStyle: 'none',
  padding: '10px 0px'
}

const Header = () => (
  <div>
    <header style={headerStyle}>
      <div style={containerStyle}>
        <img style={imgStyle} src="/static/images/logo_wuuro.png" alt="" />
      </div>
    </header>
  </div>
)

export default Header
