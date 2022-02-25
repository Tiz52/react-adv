import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShopingCart } from '../hooks/useShopingCart';
import { products } from '../data/products';



export const ShopingPage = () => {

	const { shopingCart, onProductCartChange } = useShopingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr/>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap'
				}}>
					
				{
					products.map ( product => (
						
						<ProductCard 
							key={product.id}
							product={product}
							className ='bg-dark'
							onChange= {onProductCartChange }
							value={shopingCart[product.id]?.count || 0 }
						>
							<ProductImage className='custom-image'/>
							<ProductTitle className='text-white text-bold'/>
							<ProductButtons className='custom-buttons'/>
						</ProductCard>

						
					))
				}

			</div>

			<div className='shoping-cart'>
				{
					Object.entries(shopingCart).map(([ key, product ]) => (
						<ProductCard 
							key={key}
							product={product}
							value = {product.count}
							className ='bg-dark text-white'
							style={{ width: '100px' }}
							onChange={onProductCartChange}
						>
							<ProductImage className='custom-image'/>
							<ProductButtons 
								className='custom-buttons'
								style={{
									display: 'flex',
									justifyContent: 'center'
								}}
							/>
						</ProductCard>
					))
				}
			</div>

		</div>
	);
};