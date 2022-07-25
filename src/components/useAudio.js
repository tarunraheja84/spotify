import { useState, useEffect } from "react";
import url1 from "./songs/1.mp3"
import url2 from "./songs/2.mp3"
import url3 from "./songs/3.mp3"
import url4 from "./songs/4.mp3"
import url5 from "./songs/5.mp3"
import url6 from "./songs/6.mp3"
import url7 from "./songs/7.mp3"
import url8 from "./songs/8.mp3"
import url9 from "./songs/9.mp3"
import url10 from "./songs/10.mp3"

const useAudio = () => {
    const [audio,setAudio] = useState(new Audio(url1));
    const [playing, setPlaying] = useState(false);
    const [value,setValue]=useState(0);
    const [songno,setSongno]=useState(1);
  
    function toggle(e){
      console.log("toggle start");
      if(e===1){
          setSongno(1);
          setAudio(new Audio(url1));
      }
      else if(e===2){
          setSongno(2);
          setAudio(new Audio(url2));
      }
      else if(e===3){
          setSongno(3);
          setAudio(new Audio(url3));
      }
      else if(e===4){
          setSongno(4);
          setAudio(new Audio(url4));
      }
      else if(e===5){
          setSongno(5);
          setAudio(new Audio(url5));
      }
      else if(e===6){
          setSongno(6);
          setAudio(new Audio(url6));
      }
      else if(e===7){
          setSongno(7);
          setAudio(new Audio(url7));
      }
      else if(e===8){
          setSongno(8);
          setAudio(new Audio(url8));
      }
      else if(e===9){
          setSongno(9);
          setAudio(new Audio(url9));
      }
      else if(e===10){
          setSongno(10);
          setAudio(new Audio(url10));
      }
      console.log("songno",songno);
      console.log("toggle");
      setPlaying(false);
      setPlaying(true);
  }
  
    function pauseAudio(){
      setPlaying(false);
    }
  
    function toPrev(x){
        pauseAudio();
        toggle(x-1);
    }
  
    function toNext(x){
      setSongno(x+1);
      toggle(x+1);
  }
  
  
    setInterval(()=>{
      let currValue=(audio.currentTime/audio.duration)*100;
      setValue(currValue);
    },1000);
  
  
     useEffect(()=>{
  
     },[value]);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
        console.log("playing",playing);
      },
      // eslint-disable-next-line 
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
      // eslint-disable-next-line 
    }, []);
  
    return [playing, toggle,toPrev,toNext,pauseAudio,value,songno];
  };
  
export default useAudio;  