import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs ) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
	
	const [ counter, setCounter ] = useState(0);

	const isControlled = useRef(!!onChange);

	const increaseBy = (value: number) => {

		if(isControlled.current){
			return onChange!({ count: value, product });
		}

		const newValue = Math.max(counter+value, 0);

		setCounter( prev => Math.max(prev + value, 0));

		onChange && onChange({ count: newValue, product });
	};


	useEffect(() => {
		setCounter(value);
	}, [ value ]);

	return {
		counter, increaseBy
	};

};

