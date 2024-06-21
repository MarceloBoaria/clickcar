import "./Home.css";
import StockHome from "../StockHome/StockHome";
// import ImageCar from './../../components/ImageCar/ImageCar';
import BackgroundVideo from '../../components/ImageCar/BackgroundVideo';

function Home() {
  return (
    // <BackgroundVideo>
    // <Stock />
    //     </BackgroundVideo>
    <BackgroundVideo> 
      <div className="containerBackground">
        <h1>
          
        </h1>

      </div>


      <div className="containerHome">
          <StockHome />

      </div>
    </BackgroundVideo>
  );
}


export default Home;