const cartKey = 'cart'

export const getCart = () => {
  const savedCart = localStorage.getItem(cartKey)

  if (!savedCart) {
    return []
  }

  try {
    return JSON.parse(savedCart)
  } catch {
    return []
  }
}

const saveCart = (cart) => {
  localStorage.setItem(cartKey, JSON.stringify(cart))
}

export const addToCart = (product) => {
  const cart = getCart()
  const oldProduct = cart.find((item) => item.id === product.id)

  if (oldProduct) {
    oldProduct.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart(cart)
}

export const changeQuantity = (id, number) => {
  const cart = getCart()
    .map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + number }
      }

      return item
    })
    .filter((item) => item.quantity > 0)

  saveCart(cart)
  return cart
}

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id)
  saveCart(cart)
  return cart
}
