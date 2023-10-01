import { useForm } from 'react-hook-form';
import './styles.scss';

const Contact = () => {
	const { handleSubmit, resetField, register } = useForm();
	return (
		<div className="container">
			<form className="ContactForm">
				<h1 className="ContactForm__title">Contact Me.</h1>
				<input className="ContactForm__textFields" type="text" placeholder="Name" {...register('Name', { required: true, maxLength: 80 })} />
				<input
					className="ContactForm__textFields"
					type="text"
					placeholder="Email"
					{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				<textarea
					className="ContactForm__textArea"
					placeholder="Message"
					{...register('Message', { required: true, minLength: 6, maxLength: 12 })}
				/>
				<button className="ContactForm__submit" type="submit" title="Send Message ">
					Send Message
				</button>
			</form>
		</div>
	);

export default Contact;
