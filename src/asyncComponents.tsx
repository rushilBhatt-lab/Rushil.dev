import { lazy } from 'react';

const home = lazy(() => import('components/Header'));
const about = lazy(() => import('components/About'));
const portfolio = lazy(() => import('components/Portfolio'));
const contact = lazy(() => import('components/Contact'));

export { home, about, portfolio, contact };
