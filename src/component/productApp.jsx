import { useReducer } from 'react'
import productReducer, { initialProductState } from './roductsReducers'
import style from './style';
import types from './types';

const ProductApp = () => {

    const [productState, dispatch] = useReducer(productReducer, initialProductState)
    const { products, carts, activeProduct } = productState;

    return (
        <div style={style.component}>
            <h1>Products</h1>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <p>{product.title}</p>
                            <button style={style.button} onClick={()=> dispatch({
                                type: types.productShow,
                                payload: product
                            })}>
                                show
                            </button>
                            <button style={style.button} onClick={()=> dispatch({
                                type: types.addToCart,
                                payload: product,
                            })}>
                                add to cart
                            </button>
                        </li>
                    ))}
            </ul>
            <h1>Cart</h1>
            <ul>
                {carts.map(cart =>(
                    <li key={cart.id}>
                   <p style={style.p}>{cart.title} quantity: {cart.quantity}</p> 
            
                    <button style={style.button} onClick={()=> dispatch({
                        type: types.removeFromCart,
                        payload: cart.id,
                    })}>
                        Remove from cart
                    </button>
                    <button style={style.button} onClick={()=> dispatch({
                        type: types.removeOneFromCart,
                        payload: cart.id,
                    })}>
                        Remove One
                    </button>
                </li>
                ))}
            </ul>

            <h2>{activeProduct.title}</h2>
        </div>
    )
}

export default ProductApp;
