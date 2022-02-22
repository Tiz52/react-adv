import  { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
}); 

export default ProductCard;