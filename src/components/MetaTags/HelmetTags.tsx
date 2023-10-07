import { Helmet } from 'react-helmet-async';

interface Props {
	title?: any;
	description?: any;
	ogtype?: string;
	ogurl?: string;
	ogimage?: string;
	is404?: boolean;
}

const HelmetMetaTags = ({ title = 'Rushil.dev', description = 'Portfolio for Rushil.dev', ogtype = 'website', ogurl, ogimage, is404 }: Props) => {
	const canonicalLink = window.location.href;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content={ogtype} />
			<link rel="canonical" href={canonicalLink} />

			<link rel="stylesheet" media="all and (orientation:portrait)" href="" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover" />
			<meta name="theme-color" content="#004f51" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			{is404 && <meta name="prerender-status-code" content="404" />}
			{is404 && <meta name="robots" content="noindex" />}
		</Helmet>
	);
};

export default HelmetMetaTags;
