import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction= () => {



	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '', 
					terms: false,
					jobType: ''
				}}
				onSubmit={
					(values) => console.log(values)				
				}
				validationSchema={
					Yup.object({
						firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
						lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
						email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
						terms: Yup.boolean().oneOf([ true ], 'Debe de aceptar las condiciones'),
						jobType: Yup.string().notOneOf([ 'it-jr' ], 'Esta opción no es permitida').required('Requerido')
					})
				}
			>
				{
					() => (
						<Form>
							<MyTextInput 
								label='First Name' 
								name='firstName'
							/>

							<MyTextInput 
								label='Last Name' 
								name='lastName'
							/>

							<MyTextInput 
								label='Email' 
								name='email'
								type='email'
							/>
		
							<MySelect label='Job Type 'name='jobType'>
								<option value=''>Pick something</option>
								<option value='developer'>Developer</option>
								<option value='designer'>Designer</option>
								<option value='it-senior'>IT Senior</option>
								<option value='it-jr'>IT Jr.</option>
							</MySelect>
							
							<MyCheckBox label='Terms and Conditions' name='terms'/>

							<button type='submit'>Submit</button>
						</Form>
					)
				}

			</Formik>

		

		</div>
	);
};