import Header from "./components/Header";
import {Routes,Route, Navigate} from 'react-router-dom';
import Popular from "./components/Popular"
import "bootstrap/dist/css/bootstrap.min.css";
import TopRated from "./components/TopRated";
import UpComing from "./components/UpComing";
import Home from "./components/Home";
import HomeDetails from "./components/HomeDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     <Header/>
     <Routes>

        

        {/* <Route path={'/'}  element = {<Navigate to = {'/home'}/> } /> */}
        <Route  path={'/'} element ={<Home/>}/>
        <Route path={'/popular'} element ={<Popular/>}/>
        <Route path={'/toprated'} element ={<TopRated/>}/>
        <Route path={'/upcoming'} element ={<UpComing/>}/>

        <Route path={'/moviedetails/:id'} element ={<HomeDetails/>}/>
        
      
     </Routes>
     <Footer/>
    </>
  )
}

export default App
