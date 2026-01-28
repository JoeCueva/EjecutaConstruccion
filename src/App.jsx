import { useEffect, useRef } from 'react'
import './App.css'
import AppRouter from './router/AppRouter'
import LocomotiveScroll from "locomotive-scroll"

function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.06,
      multiplier: 1,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App
