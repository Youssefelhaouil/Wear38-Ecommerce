import Category from "../Components/Home/Category"
import Cover from "../Components/Home/Cover"
import OurProducts from "../Components/Home/OurProducts"
import HeroSection from "../Components/Home/HeroSection"
import Features from "../Components/Home/Features"



function Home() {
  return (
    <>
    <div>
        <HeroSection />
        <OurProducts />
        <Cover />
        <Category />
        <Features />
    </div>


    </>
  )
}

export default Home