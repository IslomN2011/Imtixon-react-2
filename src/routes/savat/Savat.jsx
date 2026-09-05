import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { changeQuantity, getCart, removeFromCart } from '../../utils/cart'
import './Savat.css'

const getPrice = (price) => Number(String(price).replace(/\s/g, ''))

const formatPrice = (price) => `${price.toLocaleString('uz-UZ')} so'm`

const Savat = () => {
  const [cart, setCart] = useState(getCart)
  const total = cart.reduce((sum, item) => sum + getPrice(item.price) * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const updateQuantity = (id, number) => {
    setCart(changeQuantity(id, number))
  }

  const removeItem = (id) => {
    setCart(removeFromCart(id))
  }

  return (
    <>
      <Header />
      <main className="cart-page">
        <h1>Savatda {itemCount} ta tovar bor</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Savat hozircha bo'sh</p>
            <Link to="/">Xarid qilish</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <h2>{item.title}</h2>
                    <p>Artikul: {item.id}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <strong>{formatPrice(getPrice(item.price) * item.quantity)}</strong>
                  <button className="remove" onClick={() => removeItem(item.id)}>x</button>
                </div>
              ))}
            </div>

            <div className="summary">
              <h2>san+one</h2>
              <p><span>Narxi:</span><span>{formatPrice(total)}</span></p>
              <p><span>Chegirma:</span><span>0 so'm</span></p>
              <p><span>Yetkazib berish:</span><span>15 000 so'm</span></p>
              <hr />
              <p className="sum"><span>Jami:</span><strong>{formatPrice(total + 15000)}</strong></p>
              <button className="order">BUYURTMANI TASDIQLASH</button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default Savat
