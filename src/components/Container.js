import React from "react";
import one from  "./images/covers/1.jpg"
import two from  "./images/covers/2.jpg"
import three from  "./images/covers/3.jpg"
import four from  "./images/covers/4.jpg"
import five from  "./images/covers/5.jpg"
import six from  "./images/covers/6.jpg"
import seven from  "./images/covers/7.jpg"
import eight from  "./images/covers/8.jpg"
import nine from  "./images/covers/9.jpg"
import ten from  "./images/covers/10.jpg"
import play from "./images/play.png"
import pause from "./images/pause.png"
import pausebottom from "./images/pausebottom.png"
import playbottom from "./images/playbottom.png"
import previous from "./images/previous.png"
import next from "./images/next.png"
import "./style.css"
import useAudio from "./useAudio"

const Container = () => {
    const [playing, toggle,toPrev,toNext,pauseAudio,value,songno]=useAudio();
    console.log(playing,songno);
    return (
    <div>
      <div className="container">
        <div className="songItemContainer">
                <div className="songItem">
                    <img src={one} alt="1"/>
                    <span className="songName">Mai Tera Boyfriend</span>
                    <span className="songName">04:35</span>
                    {(playing && songno===1)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(1)}></img>}
                </div>
                <div className="songItem">
                    <img src={two} alt="2"/>
                    <span className="songName">O O Jaane Jaana</span>
                    <span className="songName">05:45</span>
                    {(playing && songno===2)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(2)}></img>}
                </div>
                <div className="songItem">
                    <img src={three} alt="3"/>
                    <span className="songName">Main Hoon Na</span>
                    <span className="songName">06:01</span>
                    {(playing && songno===3)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(3)}></img>}
                </div>
                <div className="songItem">
                    <img src={four} alt="4"/>
                    <span className="songName">Dil Na Liya</span>
                    <span className="songName">05:55</span>
                    {(playing && songno===4)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(4)}></img>}
                </div>
                <div className="songItem">
                    <img src={five} alt="5"/>
                    <span className="songName">Tere Dwaare Pe Aai Baaraat</span>
                    <span className="songName">03:56</span>
                    {(playing && songno===5)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(5)}></img>}
                </div>
                <div className="songItem">
                    <img src={six} alt="6"/>
                    <span className="songName">Deewana Hai Dekho</span>
                    <span className="songName">05:46</span>
                    {(playing && songno===6)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(6)}></img>}
                </div>
                <div className="songItem">
                    <img src={seven} alt="7"/>
                    <span className="songName">Kukkad</span>
                    <span className="songName">04:22</span>
                    {(playing && songno===7)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(7)}></img>}
                </div>
                <div className="songItem">
                    <img src={eight} alt="8"/>
                    <span className="songName">Mere Haath Mein</span>
                    <span className="songName">04:48</span>
                    {(playing && songno===8)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(8)}></img>}
                </div>
                <div className="songItem">
                    <img src={nine} alt="9"/>
                    <span className="songName">Main Agar Kahoon</span>
                    <span className="songName">05:10</span>  
                    {(playing && songno===9)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(9)}></img>}
                </div>
                <div className="songItem">
                    <img src={ten} alt="10"/>
                    <span className="songName">Tum Hi Ho</span>
                    <span className="songName">04:22</span>
                    {(playing && songno===10)?<img src={pause} alt="pause" onClick={()=>pauseAudio()}></img>:<img src={play} alt="play" onClick={()=>toggle(10)}></img>}
                </div>
        </div>
      </div>
      <div>
      <div className="bottom">
      <input type="range" name="range" id="myProgressBar" min="0" value={value} max="100"/>

          <div className="icons">
          <img src={previous} alt="previous" onClick={()=>{toPrev(songno)}}></img>
          {playing?<img src={pausebottom} alt="pausebottom" onClick={pauseAudio}></img>:<img src={playbottom} alt="playbottom" onClick={toggle}></img>}
          <img src={next} alt="next"  onClick={()=>{console.log(songno); toNext(songno)}}></img>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Container
