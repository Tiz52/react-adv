import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<()=>JSX.Element> | JSXComponent;
	name: string;
}

const LazyLayout = lazy(() => import(/* webpackChuckName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'LazyLayout-Dash'
	},
	{
		to: '/no-lazy',
		path: '/no-lazy',
		Component: NoLazy,
		name: 'No Lazy'
	},

];