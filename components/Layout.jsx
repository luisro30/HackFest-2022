import { Header } from './Header/Header';
import { Footer } from './footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import HeroFooter from './footer/HeroFooter';
const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<Header />
			<main>{children}</main>
			<Footer />
			<HeroFooter />
		</ThemeProvider>
	);
};

export default Layout;
