
import NewsLetter from "../NewsLetter/NewsLetter";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import ClientReviews from "./ClientsReviews/ClientReviews";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Cards></Cards>
            <ClientReviews></ClientReviews>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;