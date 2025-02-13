// import Lifecycle from './lifecycle/Lifecycle';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './day1/Footer';
// import Header from './day1/Header';
// import Counter from './day2/Counter';
// import UserList from './day4/user';
import Home from './day5-6/Home';
import About from './day5-6/About';
import Contact from './day5-6/Contact';
import Loginform from './day5-6/Loginform';



function App() {
  return (
    <div>  
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/loginform" element={<Loginform/>} />
      </Routes>
      <Footer title="Here is the footer" />
      </div>
    </BrowserRouter>


{/* <Header title="HOME"></Header> */}
{/* <Lifecycle/> */}
{/* <Counter/>
<UserList/> */}

    </div>
  );
}

export default App;