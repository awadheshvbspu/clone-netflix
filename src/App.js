import './App.css';
import Download from './component/Download';
import Faqs from './component/Faqs';
import Footer from './component/Footer';
import Header from './component/Header';
import Kids from './component/Kids';
import Tv from './component/Tv';
import WatchEveryWhere from './component/WatchEveryWhere';


function App() {  
  return (
    <>
      <Header/>
      <Tv/>
      <Download/>
      <WatchEveryWhere/>
      <Kids/>
      <Faqs/>
      <Footer/>
    </>
  );
}

export default App;
