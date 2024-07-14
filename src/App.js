import './App.scss';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import FoodsCategory from './components/FoodsCategory';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFoodsList } from './store/modules/takeaway';

function App() {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchFoodsList())
  }, [dispatch])

  const { foodsList, activeIndex} = useSelector(state => state.foods)

  return (
    <div className="home">
      {/* ナビゲーション */}
      <NavBar />

      {/* メイン */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 商品リスト */}
              {foodsList.map((item, index) => {
                return (
                  activeIndex === index && <FoodsCategory
                    key={item.tag}
                    // 品名リスト
                    name={item.name}
                    // 商品リスト
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* カート */}
      <Cart />
    </div>
  );
}

export default App;
