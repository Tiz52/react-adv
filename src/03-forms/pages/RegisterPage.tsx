import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

	const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: ''
	});

	//const { name, email, password1, password2 } = formData;

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form noValidate onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name" 
					name='name'
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 &&	<span>Este campo es necesario</span>}

				<input
					type="email"
					placeholder="Email"
					name='email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) &&	'has-error'}`}
				/>
				{!isValidEmail(email) &&	<span>Email no es válido</span>}

				<input
					type="password"
					placeholder="Password"
					name='password1'
					value={password1}
					onChange={onChange}
				/>
				{password1.trim().length <= 0 &&	<span>Este campo es necesario</span>}
				{password1.trim().length < 6 &&	<span>La contraseña tiene que tener 6 caracteres</span>}

				<input
					type="password"
					placeholder="Repeat Password"
					name='password2'
					value={password2}
					onChange={onChange}
				/>
				{password2.trim().length <= 0 &&	<span>Este campo es necesario</span>}
				{password2.trim().length > 0 &&	password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

				<button type="submit">
					Create
				</button>
				<button type="button" onClick={resetForm}>
					ResetForm
				</button>
			</form>
		</div>
	);
};