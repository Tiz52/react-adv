import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { FormikAbstraction, FormikBasicPage, FormikComponent, FormikYupPage, RegisterPage } from '../03-forms/pages';
import logo from '../logo.svg';


export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React Logo'/>
						<ul>
							<li>
								<NavLink 
									to='/register' 
									className={({ isActive }) => isActive? 'nav-active':''}
								>
									Register</NavLink>
							</li>
							<li>
								<NavLink 
									to='/formik-basic'
									className={({ isActive }) => isActive? 'nav-active':''}
								>
									Formik Page</NavLink>
							</li>
							<li>
								<NavLink 
									to='/formik-yup'
									className={({ isActive }) => isActive? 'nav-active':''}
								>
									Formik Yup Page</NavLink>
							</li>
							<li>
								<NavLink 
									to='/formik-components'
									className={({ isActive }) => isActive? 'nav-active':''}
								>
									Formik Components</NavLink>
							</li>
							<li>
								<NavLink 
									to='/formik-abstraction'
									className={({ isActive }) => isActive? 'nav-active':''}
								>
									Formik Abstraction</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path='/register' element={<RegisterPage/>}/>
						<Route path='/formik-basic' element={<FormikBasicPage/>}/>
						<Route path='/formik-yup' element={<FormikYupPage/>}/>
						<Route path='/formik-components' element={<FormikComponent/>}/>
						<Route path='/formik-abstraction' element={<FormikAbstraction/>}/>

						<Route path='/*' element={<Navigate to='/register' replace />}/>

					</Routes>		
				</div>
			</BrowserRouter>
		</>
	);
};
