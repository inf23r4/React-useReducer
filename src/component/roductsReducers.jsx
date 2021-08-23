import types from "./types"
const initialProductState ={
    products: [
        { id: 1, title: "Product #1"},
        { id: 2, title: "Product #2"},
    ],
    carts: [
        { id: 1, title:"Product #1", quantity: 1 }
    ],
    activeProduct: { id: 2, title: "Product #2" },
}

const productReducer = (state, action) =>{
    switch(action.type){
        case types.productShow:
            return {
                ...state,
                activeProduct: action.payload,
            }
        case types.addToCart:
            const newCart = action.payload;
            const cartContainCart = state.carts.find(cart => cart.id === newCart.id
            )
            return cartContainCart
            ? {...state,
                carts: state.carts.map(cart =>
                    cart.id === newCart.id
                    ? {...cart, quantity: cart.quantity+1}
                    : cart
                    )}
            : {
                ...state,
                    carts:[
                        ...state.carts,
                        {...action.payload, quantity:1}
                    ]
            }
        case types.removeFromCart:
            return{
                ...state,
                carts: state.carts.filter(cart => cart.id !== action.payload)
            }
        case types.removeOneFromCart:{
            const cartDelete = state.carts.find(cart => cart.id === action.payload)
            console.log(cartDelete)
            return cartDelete.quantity > 1
            ?{
                ...state,
                carts: state.carts.map(cart => 
                    cart.id === action.payload
                    ?{...cart, quantity: cart.quantity-1}
                    : cart
                )
            }
            :{
                ...state,
                carts: state.carts.filter(cart => cart.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export {initialProductState}
export default productReducer;