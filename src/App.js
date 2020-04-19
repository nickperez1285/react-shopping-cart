import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
	// add the given item to the cart

		setCart([...cart, item])
		const newProducts = products.filter(pros => pros.id !== item.id )
		setProducts(newProducts)

	};

	const removeItem = itemID => {

		 const newCart = cart.filter(item => item.id !== itemID)
		 const removedItem = cart.filter(item => item.id === itemID)
		 
		 setProducts([...products, ...removedItem ])
		 setCart(newCart)

		 

	}


return (
<ProductContext.Provider value={{products, addItem}}>
	<CartContext.Provider value = {{cart, removeItem}}>
		<div className="App">
			<Navigation  />
				{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
	</CartContext.Provider>
</ProductContext.Provider>
		);
	}
export default App;