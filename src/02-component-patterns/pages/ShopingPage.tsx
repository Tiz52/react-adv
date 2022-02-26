import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShopingPage = () => {

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr/>
			<div>				
				<ProductCard 
					key={product.id}
					product={product}
					className ='bg-dark'
					initialValues={{
						count: 4,
						maxCount: 10,
					}}
				>
					{
						({ reset, increaseBy, isMaxCountReached, count }) => 
							(
								<>
									<ProductImage className='custom-image'/>
									<ProductTitle className='text-white text-bold'/>
									<ProductButtons className='custom-buttons'/>

									<button onClick={reset}>Reset</button>
									<button onClick={() => { increaseBy(-2); }}>-2</button>
									{
										!isMaxCountReached 
									&& 
										<button onClick={() => { increaseBy(+2); }}>+2</button>
									}
									<span style={{ color: 'white' }}> {count}</span>
								</>
							)
					}
				</ProductCard>
			</div>
		</div>
	);
};