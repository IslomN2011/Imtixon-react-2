import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { products, products2} from "../../mock";
import { FaArrowLeft } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../utils/cart";
import Image from "../../assets/image.png"
import Image20 from "../../assets/image20.png"
import Image2 from "../../assets/image2.png"
import group25 from "../../assets/Group25.png"
import group24 from "../../assets/Group24.png"
import group27 from "../../assets/Group27.png"
import group26 from "../../assets/Group26.png"
import "./Home.css";


const Home = () => {
  const navigate = useNavigate()

  const addProduct = (event, product) => {
    event.preventDefault()
    addToCart(product)
  }

  const buyProduct = (event, product) => {
    event.preventDefault()
    addToCart(product)
    navigate('/savat')
  }

  return (
    <div className="home">
      <header>
        <h1>SAN+ONE</h1>
        <nav>
          
        </nav>
        <input type="text" placeholder='' />
        <div className="header-icons">
          <div>UZ</div>
          <Link to="/savat">
          <div><CiShoppingCart /></div></Link>
          <div><CiUser /></div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-box">
          <div className="hero-left">

          <div>

            <h2>Yozgi mavsum uchunyangi ko'rinish</h2>
            <p>Yozgi mavsum uchunyangi ko'rinish</p>
          </div>

          <div className="hero-buttons">
            <button className="main-btn">KO'RISH</button>
            <button className="second-btn">Ro'yhatdan o'tish</button>
          </div>

           </div>

           <div className="hero-right">
            <img src={Image} alt="Featured product" />
           </div>

        </div>
      </section>

      <section className="new-products">
        <div className="title">
          <h3>Yangi mahsulotlar</h3>
          <p>Eng so'nggi mahsulotlarimizni ko'rib chiqing va tanlang</p>
        </div>
      <div className="products">
      {
        products.map((item)=>{
          return(
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card">
                <div className="card-info">
                  <img src={item.image } alt={item.title} className="product-image" />
                  <h3>{item.title}</h3>
                  <div className="price">{item.price}</div>
                  <del className="old-price">{item.oldPrice} </del>
                </div>
                <div className="buttons">
                <button className="buy" onClick={(event) => buyProduct(event, item)}>Sotib olish</button>
                <button className="cart" onClick={(event) => addProduct(event, item)}>Savatga</button>
                </div>
              </div>
            </Link>
          )
        })
      }
      </div>

      <div className="dots">

        <div className="arrow-left">
          <FaArrowLeft />

        </div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="arrow-right">
          <FaLongArrowAltRight />

        </div>
      </div>

      </section>
      <section className="viewed">
        <div className="title">
          <h1>Eng ko'p ko'rilgan mahsulotlar</h1>
          <p>Mijozlarimiz tanlovlariga eng loyiq bo'lgan mahsulotlarimiz</p>
        </div>
        <div className="images">
          <img src={Image20} alt="Popular product" />
          <img src={Image20} alt="Popular product" />
          <img src={Image2} alt="Popular product" />
        </div>


        <div className="controls">
          <div className="arrow-left">
            <FaArrowLeft />

          </div>
          <div className="arrow-right">
            <FaLongArrowAltRight />

          </div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </section>

      <section className="best">
        <div className="title">
          <h1>Eng ko'p ko'rilgan mahsulotlar</h1>
          <p>Eng haridorgir bo'lgan mahsulotlarimizni ko'rib chiqing</p>

        </div>

        
           <div className="products">
      {products2.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            
            <img
              src={item.image }
              alt={item.title}
              className="product-image"
            />

            <h3>{item.title}</h3>

            <div className="price">
              {item.price}
            </div>

            <div className="old-price">
              {item.oldPrice}
            </div>

            <div className="buttons">
              <button className="buy" onClick={(event) => buyProduct(event, item)}>
                Sotib olish
              </button>

              <button className="cart" onClick={(event) => addProduct(event, item)}>
                Savatga
              </button>
            </div>

          </div>
        </Link>
      ))}
        </div>
      </section>

      <footer>
        <div className="footer-box">
          <div className="footer-part">
            <h3>SAN+ONE</h3>
            <p>+998 (88) 413 00 00</p>
            <p>Toshkent Shahar, Birmarsa tumani, Birmarsa ko'cha 12-uy.</p>
          </div>

          <div className="footer-part">
            <h4>BIZ HAQIMIZDA</h4>
            <ul>
              <li><span>KATALOGGA O'TISH</span></li>
              <li><span>Biz haqimizda</span></li>
              <li><span>Shartnoma</span></li>
              <li><span>Jamiyatda</span></li>
            </ul>
          </div>

          <div className="footer-part">
            <h4>ENO KO'P SO'RALGAN</h4>
            <ul>
              <li><span>KATALOGGA O'TISH</span></li>
              <li><span>Yordam</span></li>
              <li><span>Manzil</span></li>
              <li><span>O'zgarishlari</span></li>
            </ul>
          </div>

          <div className="footer-part">
            <h4>HABARLAR</h4>
            <ul>
              <li><span>KATALOGGA O'TISH</span></li>
              <li><span>Yangiliklar</span></li>
              <li><span>Blog</span></li>  
              <li><span>Voqealar</span></li>
            </ul>
          </div>
        </div>

        <div className="social">
          <span className="social-link">Instagram</span>
          <span className="social-link">Facebook</span>
          <span className="social-link">Telegram</span>
        </div>

        <div className="payments">
          <img src={group25} alt="Click" className="payment" />
          <img src={group24} alt="PayMe" className="payment" />
          <img src={group27} alt="UzCard" className="payment" />
          <img src={group26} alt="Humo" className="payment" />
        </div>

        <div className="bottom">
          <p>&copy; 2024 SAN+ONE. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>

    </div>
  )
}

export default Home
