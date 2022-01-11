import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    wholeSome,
    superPowers,
    meditate,
    violence
} from "../../data.js"

export default function Porfolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "wholesome",
            title: "Wholesome",
        },
        {
            id: "superpowers",
            title: "Superpowers",
        },
        {
            id: "meditate",
            title: "Meditate",
        },
        {
            id: "violence",
            title: "Violence",
        },
    ];
    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
                case "wholesome":
                    setData(wholeSome);
                    break;
                    case "superpowers":
                        setData(superPowers);
                        break;
                        case "meditate":
                            setData(meditate);
                            break;
                            case "violence":
                                setData(violence);
                                break;
                                default:
                                    setData(featuredPortfolio);
        }
    },[selected])
    return (
        <div class="portfolio" id="portfolio">
            
           <h1>Portfolio</h1>

           <ul>
             {list.map((item) => (
                 <PortfolioList title={item.title} 
                 active={selected === item.id}
                 setSelected={setSelected}
                 id={item.id}
                 />
             ))}
           </ul>
           <div className="container">
               {data.map((d) => (
               <div className="items">
                   <img src={d.img} />
                   <h3>{d.title}</h3>
               </div>
               ))}
           </div>
        </div>
    )
}
