import logo from './logo.svg';
import './App.css';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Title from './Components/Title';
import Data from './Components/Data';
import { Information } from './Information/Information';


function App() {
  return (
    <div className="App">
      <Title titleName = "Ankur Soni"/>
      <Data icon={<MdEmail/>} content={Information.Email}></Data>
    </div>
  );
}

export default App;
