import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {


	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name:'',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={
					(values) => console.log(values)
				}
				validationSchema={
					Yup.object({
						name: Yup.string().min(2, 'Debe tener mínimo 2 caracteres').max(15, 'Debe tener un máximo de 15 caracteres').required('Requerido'),
						email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
						password1: Yup.string().min(6, 'Debe tener un mínimo de 6 caracteres').required('Requerido'),
						password2: Yup.string().oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales').required('Requerido'),
					})
				}
			>
				{
					({ handleReset }) => (
						<Form>
							<MyTextInput label='Name' name='name'/>
							<MyTextInput label='Email' name='email'/>
							<MyTextInput label='Password' name='password1'/>
							<MyTextInput label='Confirm Password' name='password2'/>

							<button type='submit'>Create</button>
							<button type='button' onClick={handleReset}>Reset</button>
						</Form>
					)
				}
			</Formik>
		
		</div>
	);
};