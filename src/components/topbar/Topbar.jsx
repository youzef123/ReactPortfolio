import "./top.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#" className="logo">Moham</a>
                </div>
                <div className="right">
                    {/* If hamburger state is clicked  */}
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    </div>
            </div>
        </div>
    )
}
