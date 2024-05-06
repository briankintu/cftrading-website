import FooterSection from "../components/FooterSection"
import Header from "../components/Header/Header"
import HomeMain from "../components/Main/Home/HomeMain"
import ProductsLayout from "../components/Products/ProductsLayout"
import Slider from "../components/Slider/Slider"

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <HomeMain/>
            <ProductsLayout />
            <FooterSection />
            
            </>

    )
}

export default Home