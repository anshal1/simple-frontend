import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  useEffect(() => {
    const home = document.getElementById("home_hide");
    const observer = new IntersectionObserver((e) => {
      e.forEach((element) => {
        if (element.isIntersecting) {
          element.target.id = "home";
        }
      })
    })
    observer.observe(home);
  }, [])
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
