import React, {useState, useEffect, useCallback} from 'react';
import * as S from './style';

function Topbutton() {
  const [scrolledY, setScrolledY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  //Go to scroll top
  const moveToTop = () => (
    window.scrollTo({top: 0, behavior: 'smooth'})
  );

  //topbutton show / hide
  const hideHandler = useCallback( ()=>{
    setScrolledY(window.pageYOffset);
    if(scrolledY < 100) {
      setBtnStatus(false);
    }
  }, [scrolledY]);

  useEffect(()=>{  
    window.addEventListener('scroll', hideHandler);

    return () => {
      window.removeEventListener("scroll", hideHandler);
    };
  }, [hideHandler])

  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const scrollAmount = document.documentElement.scrollTop;

      if( scrollAmount >= 100){
        //Find scroll direction
        if(scrollAmount >= lastScrollY) { //scroll down
          setBtnStatus(false);
        }else {  // scroll up
          setBtnStatus(true);
        }
      }

      setLastScrollY(scrollAmount);
    })
  }, [lastScrollY])

  return (
    <S.TopbuttonContainer className={btnStatus ? "is-active" : ""}>
      <S.TopbuttonItem onClick={moveToTop}></S.TopbuttonItem>
    </S.TopbuttonContainer>
  );
}

export default Topbutton;