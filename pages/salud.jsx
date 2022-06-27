import Hero from "@/components/Banner/HeroBanner";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Middle from "../components/Middle/Middle"
import FamilyGathering from "../components/FamilyGathering"
 
const health = () => {
  return (
    <>
      <Middle />
      <FamilyGathering />
    </>
  )
}

export default health