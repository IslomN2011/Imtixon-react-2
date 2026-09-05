import { useParams } from 'react-router-dom'
import './productdetails.css'
import { products, products2 } from '../../mock'
import Header from '../../components/header/Header'
import { addToCart } from '../../utils/cart'

const Productdetailes = () => {
  const { id } = useParams()
  const product = [...products, ...products2].find((item) => item.id === Number(id))

  if (!product) {
    return <h2>Mahsulot topilmadi</h2>
  }

  return (
    <div><Header/>
    <div className="product-page">

        
      <div className="product-box">
        <div className="thumbs">
          <div className="thumb active">
                <img src={product.image} alt="Thumbnail 1" />
              </div>
          <div className="thumb">
            <img src={product.image} alt="Thumbnail 2" />
          </div>
          <div className="thumb">
            <img src={product.image} alt="Thumbnail 3" />
          </div>
          <div className="thumb">
            <img src={product.image} alt="Thumbnail 4" />
          </div>
        </div>

        <div className="big-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="info">
          <h2 className="name">{product.title}</h2>

          <div className="colors-box">
            <p className="label">Rangi</p>
            <div className="colors">
              <div className="color-dot active" style={{ backgroundColor: '#8b6f47' }}></div>
              <div className="color-dot" style={{ backgroundColor: '#1a1a1a' }}></div>
              <div className="color-dot" style={{ backgroundColor: '#4a6b8a' }}></div>
              <div className="color-dot" style={{ backgroundColor: '#d4c5b9' }}></div>
            </div>
          </div>

          <div className="price-box">
            <div className="price">
              <span className="current">{product.price}</span>
              <del className="old-price">{product.oldPrice}</del>
            </div>
          </div>

          <div className="sizes-box">
            <p className="label">O'lchamlari</p>
            <div className="sizes">
              <button className="size">37</button>
              <button className="size">38</button>
              <button className="size">39</button>
              <button className="size">40</button>
              <button className="size">41</button>
              <button className="size">42</button>
              <button className="size">43</button>
              <button className="size">44</button>
            </div>
          </div>

          <button className="add" onClick={() => addToCart(product)}>Savatga</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productdetailes
