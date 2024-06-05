import "./Home.css";
import Stock from "../Stock/Stock";
// import ImageCar from './../../components/ImageCar/ImageCar';
import BackgroundVideo from '../../components/ImageCar/BackgroundVideo';

function Home() {
  return (
    // <BackgroundVideo>
    // <Stock />
    //     </BackgroundVideo>
    <BackgroundVideo> 
      <div className="containerBackground">
        <h1>quinemduotru</h1>

      </div>


      <div className="containerHome">
          <Stock />

      </div>
    </BackgroundVideo>
  );
}


export default Home;