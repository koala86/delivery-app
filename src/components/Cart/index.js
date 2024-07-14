import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartList } = useSelector(state => state.foods)
  const totalPrice = cartList.reduce((a,c) => a + c.price * c.count,0)

  const cart = []
  return (
    <div className="cartContainer">
      {/* オーバレイヤー visible追加で表示できる */}
      <div
        className={classNames('cartOverlay')}
      />
      <div className="cart">
        {/* fill fill追加でカート表示を切り替える*/}
        {/* カート数量 */}
        <div className={classNames('icon', cartList.length > 0 && 'fill')}>
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* カート金額 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice}
            </span>
          </div>
          <span className="text">配送料見込み ¥100</span>
        </div>
        {/* 支払い or 〜から */}
        {cartList.length > 0 ? (
          <div className="goToPreview">支払い</div>
        ) : (
          <div className="minFee">¥2000から</div>
        )}
      </div>
      {/* visible追加で divを表示 */}
      <div className={classNames('cartPanel')}>
        <div className="header">
          <span className="text">カート</span>
          <span className="clearCart">
            カートクリア
          </span>
        </div>

        {/* カートリスト */}
        <div className="scrollArea">
          {cart.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
