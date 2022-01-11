import { useState } from "react";
import vid from "../../bg/sadVid.mp4";
import "./works.scss"

export default function Works() {
    const [currentSlider, setCurrentSlider] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/slider1.jpg",
            title: "Church Boy",
            bold: "Psalm 37:",
            desc: "Always worshipping God on daily basis, because his presence fullfills the remaining void in my life.",
            desc2: "Trust in the LORD and do good; dwell in the land and enjoy safe pasture. Delight yourself in the LORD and he will give you the desires of your heart.",
            highlight: "Spiritual Awakening",
            img: "./assets/cross.png",
            vid: false,
        }
    ,
        {
            id: "2",
            icon: "./assets/slider2.jpg",
            title: "Life changer",
            bold: "My website",
            desc: "Motivation Provided",
            desc2: "That is created for motivation for those who are hopeless in life, i give them a path that would spark joy in their lifes and keep moving forward.",
            highlight: "300+ visited live saved",
            img: "./assets/cross2.png",
            vid: false,
        },
        {
            id: "3",
            icon: "../../bg/sadVid.mp4",
            title: "My Girlfriend Died",
            desc: "I manage to keep moving forward.",
            vid: true,
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
        setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }
    return (
        <div class="works" id="works">
            <div className="slider" 
            style={{ transform: `translateX(-${currentSlider * 100}vw`}}>
          { data.map(d=> ( 
                <div className={d.vid ? "video" : "container"}>
                    <div className="item">
                        <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                              <img src={d.icon} onerror="this.style.display='none'"/>
                                {/* <video autoplay controls>
                                    <source src={vid} type="video/mp4">
                                        Your browser does not support mp4 videos!
                                    </source>
                                </video> */}
                                <video width="350" height="250" controls autoPlay className="video">
                                <source src={vid} type="video/ogg" />
                                Your browser does not support the video tag.
                                </video>
                              
                            </div>
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                        </div>
                       
                    
                        <div className="right">
                        <h1>{d.bold}</h1>
                       <p>{d.desc2}</p>
                       <div className="bottom">
                            <div className="bottom-right">
                            <h3>{d.highlight}</h3>
                            </div>
                            <div className="bottom-left">
                                <img src={d.img} />
                            </div>
                                </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
           
            <img src="assets/arrowBlack.png" className="arrow left" onClick={()=> handleClick("left")}/>
            <img src="assets/arrowBlack.png" className="arrow right" onClick={()=> handleClick("right")} />
        </div>
    )
}
