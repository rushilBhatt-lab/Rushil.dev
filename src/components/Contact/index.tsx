import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import HelmetMetaTags from 'components/MetaTags/HelmetTags';
import { ReactComponent as ArrowIcon } from '../../assets/images/ArrowIcon.svg';
import { APP_URL } from 'components/Utils/common';
import { formInterface } from './interface';
import './styles.scss';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm<formInterface>();
	const device = useDeviceDetection();

	const onSubmit: SubmitHandler<formInterface> = async (data) => {
		if (!data.name) {
			setError('name', { type: 'required', message: 'Name is required' });
		}

		if (!data.email) {
			setError('email', { type: 'required', message: 'Email is required' });
		}

		if (!data.message) {
			setError('message', { type: 'required', message: 'Message is required' });
		}

		if (data.name && data.email && data.message) {
			try {
				const response = await fetch('https://formspree.io/f/mqkvgoaw', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (response.ok) {
					reset();
				} else {
					<ErrorMessage errors={errors} name="name" as="p" className="error-message" />;
				}
			} catch (error) {
				console.error('An error occurred during form submission', error);
			}
		}
	};

	return (
		<>
			<HelmetMetaTags title="contact form - Rushil Bhatt's contact form" description="contact form form enquiries" ogurl="contact" />
			<div className="container">
				<form className="ContactForm" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="ContactForm__title">Contact Me.</h1>

					<input
						type="text"
						className="ContactForm__textFields"
						placeholder="Name"
						{...register('name', { maxLength: { value: 80, message: 'Name is too long' } })}
					/>
					<ErrorMessage errors={errors} name="name" as="p" className="ContactForm__error" />

					<input
						className="ContactForm__textFields"
						type="text"
						placeholder="Email"
						{...register('email', { pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
					/>
					<ErrorMessage errors={errors} name="email" as="p" className="ContactForm__error" />
					<div className="ContactForm__textAreaBox">
						<textarea
							className="ContactForm__textArea"
							placeholder="Message"
							{...register('message', {
								minLength: { value: 6, message: 'Message is too short' },
								maxLength: { value: 12, message: 'Message is too long' },
							})}
						/>
						<ErrorMessage errors={errors} name="message" as="p" className="ContactForm__error" />
					</div>

					<button className="ContactForm__submit" type="submit" title="Send Message">
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
		</>
	);
};

export default Contact;
