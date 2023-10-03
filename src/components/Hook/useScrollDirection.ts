import { useEffect, useState } from 'react';

export enum ScrollDirection {
	up = 'up',
	down = 'down',
}

export default function useScrollDirection(safe: number) {
	const threshold = safe;
	const [scrollDir, setScrollDir] = useState(ScrollDirection.up);
	const [scrolledToBottom, setScrolledToBottom] = useState(false);

	const onReachBottom = () => {
		const windowHeight = window.innerHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight - 100) {
			setScrolledToBottom(true);
		} else {
			setScrolledToBottom(false);
		}
	};

	useEffect(() => {
		let previousScrollYPosition = window.scrollY;

		const scrolledMoreThanThreshold = (currentScrollYPosition: number) => Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

		const isScrollingUp = (currentScrollYPosition: number) =>
			currentScrollYPosition > previousScrollYPosition &&
			!(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
			!(currentScrollYPosition > 0 && previousScrollYPosition === 0);

		const updateScrollDirection = () => {
			const currentScrollYPosition = window.scrollY;

			if (scrolledMoreThanThreshold(currentScrollYPosition)) {
				const newScrollDirection = isScrollingUp(currentScrollYPosition) || scrolledToBottom ? ScrollDirection.down : ScrollDirection.up;
				setScrollDir(newScrollDirection);
				previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
			}
		};

		const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

		window.addEventListener('scroll', onScroll);
		window.addEventListener('scroll', onReachBottom);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('scroll', onReachBottom);
		};
	}, [scrolledToBottom, threshold]);

	return { scrollDir, scrolledToBottom };
}
