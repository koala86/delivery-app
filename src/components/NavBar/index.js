import './index.scss'

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="menu">
        <div className="menu-item active">
          注文<span className="menu-active-bar"></span>
        </div>
        <div className="menu-item">
          評判<span className="menu-comment">1796</span>
        </div>
        <div className="menu-item">店舗</div>
      </div>

      <div className="menu-search">
        <div className="menu-form">
          <div className="menu-search-icon"></div>
          <div className="menu-search-text">メニュを入力してください</div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
