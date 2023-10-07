import { useForm } from 'react-hook-form';
import { APP_URL } from 'components/Utils/common';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import { ReactComponent as ArrowIcon } from '../../assets/images/ArrowIcon.svg';
import './styles.scss';

const Contact = () => {
	const { register } = useForm();
	const device = useDeviceDetection();

	return (
		<div className="container">
			<form className="ContactForm" action="https://formspree.io/f/mqkvgoaw" method="POST">
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
			{device === 'handheld' && (
				<a className="ContactForm__link" href={APP_URL.home}>
					<p>
						Go Back home. <ArrowIcon />
					</p>
				</a>
			)}
		</div>
	);
};

export default Contact;
