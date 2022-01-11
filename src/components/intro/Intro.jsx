import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef} from "react"

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        
      init(textRef.current, {
        backDelay:  1500,
        backSpeed: 60, 
        showCursor: true,
        strings: ['Fan', 'Supporter', 'Enthusiast'] })
    },[])
    return (
        <div class="intro" id="intro">
            <div className="left">
                <div className="image-container">
                    <img src="assets/Man.png" alt="Me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Moham Tayuan</h1>
                    <section>
                    <img src= "assets/twiceLogo.png" className="Logo"/>
                    <h3>Twice <span ref={textRef}></span></h3>
                    </section>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" />
                </a>
            </div>
        </div>
    )
}
