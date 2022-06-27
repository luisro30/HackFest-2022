import { Header } from './Header/Header';
import { Footer } from './footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<Header />
			<main>{children}</main>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
