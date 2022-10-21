import '../styles/App.css';
import img from '../resources/background3.jpg'

function Home() {
  console.log(__filename);
  return (
    <div className="HomeContainer" >
      <div className='hej'>
        <img id='backgroundImg' src={img} alt=''/>
      </div>
    </div>
  );
}

export default Home;
