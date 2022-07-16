import About from '../components/About.jsx';
import Home from '../components/Home.jsx';
import Contact from '../components/Contact.jsx';

export const routes = [
	{
		to: '/home',
		path: 'home',
		Component: Home,
		name: 'Home',
		exact: true,
	},
	{
		to: '/about',
		path: 'about',
		Component: About,
		name: 'About',
		exact: true,
	},
	{
		to: '/contact',
		path: 'contact',
		Component: Contact,
		name: 'Contact',
		exact: true,
	},
];