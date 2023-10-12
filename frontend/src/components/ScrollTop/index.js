import React,{useState} from 'react'
import {ImArrowUp} from "react-icons/im";
import '../ScrollTop/scroll.css'


const ScrollTop = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <button className='btn btn-danger top' onClick={scrollToTop} 
    style={{display: visible ? 'block' : 'none'}}><ImArrowUp className='top-arrow'/></button>
  )
}
export default ScrollTop;