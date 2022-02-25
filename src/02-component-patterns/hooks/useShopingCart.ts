import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShopingCart = () => {

	const [ shopingCart, setShopingCart ] = useState<{[key:string]: ProductInCart}>({});

	const onProductCartChange = ({ count, product }:{count: number, product: Product}) => {
		
		setShopingCart(oldShopingCart => {

			const productInCart: ProductInCart = oldShopingCart[product.id] || { ...product, count: 0 };

			if(Math.max(productInCart.count + count, 0) > 0){
				productInCart.count += count;
				return {
					...oldShopingCart,
					[product.id]: productInCart
				};
			}


			const { [product.id]:toDelete, ...rest } = oldShopingCart;

			return {
				...rest
			};
				

		});
	};


	return { shopingCart, onProductCartChange };

};