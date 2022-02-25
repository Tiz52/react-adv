import { off } from 'process';
import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShopingCart = () => {

	const [ shopingCart, setShopingCart ] = useState<{[key:string]: ProductInCart}>({});

	const onProductCartChange = ({ count, product }:{count: number, product: Product}) => {

		
		setShopingCart(oldShopingCart => {

			if(count===0){
				const { [product.id]:toDelete, ...rest } =oldShopingCart;
				return rest;
			}

			return {
				...oldShopingCart,
				[product.id]: { ...product, count }
				
			};
				

		});
	};


	return { shopingCart, onProductCartChange };

};