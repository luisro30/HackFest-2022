import Hero from "@/components/Banner/HeroBanner";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Middle from "../components/Middle/Middle"
 
const health = () => {
  return (
    <ThemeProvider>
      <Header />
      <Middle />
    </ThemeProvider>
  )
}

export default health