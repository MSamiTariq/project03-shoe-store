export default (state, action) =>{
    switch(action.type){
        case 'ADD_ITEMS': {
            let cartItems = [...state.cartItems];
            let id = action.payload;
            let cartItemIndex = cartItems.findIndex(x => x.id === Number(id))

            if(cartItemIndex === -1){
                let shoeItem = state.Data.find(x => x.id === Number(id))
                cartItems.push(shoeItem)
                shoeItem.count = 1
            }
            else{
                cartItems[cartItemIndex].count++
            }


            return{
                ...state,
                cartCount: state.cartCount + 1,
                cartItems: [...cartItems]
            }
        }

        case 'REMOVE_ITEMS': {
            let cartItems = [...state.cartItems];
            console.log(action.payload)
            let ids = [...action.payload];
            let idsToDelete = ids.map(x => x.dataIndex);

            let newCartItems = cartItems.filter((x, index) => !idsToDelete.includes(index));
            let newCartCount = newCartItems.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);

            return {
                ...state,
                cartItems: [...newCartItems],
                cartCount: newCartCount,
            }
        }

        case 'MINUS_ITEMS': {
            let cartItems = [...state.cartItems];
            let id = action.payload;
            let cartItemIndex = cartItems.findIndex(x => x.id === Number(id))

            if(cartItemIndex !== -1){
                cartItems[cartItemIndex].count--
            }


            return{
                ...state,
                cartCount: state.cartCount - 1,
                cartItems: [...cartItems]
            }
        }
        case 'REMOVE_OBJECT' :{
            let cartItems = [...state.cartItems];
            let ids = action.payload;
            let newCart = cartItems.filter(object => object.id !== ids.id)
            let newCartCount = newCart.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
            // console.log(newCart);

            return{
                ...state,
                cartCount: newCartCount,
                cartItems: [...newCart],
            }

        }
        case 'EMPTY_CART': {
            return{
                ...state,
                cartItems: [],
                cartCount: 0
            }
        }
    }
}