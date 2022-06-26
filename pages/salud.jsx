import Hero from "@/components/Banner/HeroBanner";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Middle from "../components/Middle/Middle"
import FamilyGathering from "../components/FamilyGathering"
 
const health = () => {
  return (
    <ThemeProvider>
      <Header />
      <Middle />
      <FamilyGathering />
    </ThemeProvider>
  )
}

export default health