// import logo from './logo.svg';
import './App.css';
import Footer from './day1/Footer';
import Header from './day1/Header';
import Counter from './day2/Counter';
import UserList from './day4/user';
function App() {
  return (
    <div className='main'>

   
<Header title="HOME"></Header>
<Counter/>
<UserList/>
<Footer title="Here is the footer"></Footer>


    </div>
  );
}

export default App;
