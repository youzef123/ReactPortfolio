import "./testimonials.scss"

export default function testimonials() {

    const data = [
        {
            id: 1,
            img: "./assets/tonton.jpg",
            desc: "This particular guy is very witty when it comes to working. He makes sure that it is very detailed, but does not disregard the bigger picture which is the epitome of persevering to get desirable things done.",
            name: "Jason Statham",
            position: "Feeding Program Pioneer",
            featured: false,
            fb: "https://www.facebook.com/jason.tayuan.37",
        },
        {
            id: 2,
            img: "./assets/jordan.jpg",
            desc: "We have common traits as sentients. As much as I do, this person is adaptable to everything that nothing can shake his spirit due to his stoic demeanor, to every circumstance that he may face. This says alot that he is one of us because he possesses amphibiotic ability.",
            name: "Jordan",
            position: "Co-founder of Crocodile shifting",
            featured: true,
            fb: "https://www.facebook.com/jords.tayuan",
        },
        {
            id: 3,
            img: "./assets/jhaylon.jpg",
            desc: "He's my favorite nephew because he provides valid solutions to our family problems, given that he is a very intellectual being. Because he has personality INTP, which is capable of handling difficult situations in a calm manner.",
            name: "Jhaylon",
            position: "CEO of Kwanghoul",
            featured: false,
            fb: "https://www.facebook.com/jhaylon.tayuan1",
        },
    ]

    return (
        <div class="testimonials" id="ts">
            <h2>Testimonials</h2>
            <div className="container">
                {data.map(d => (

                    <div className={d.featured? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" />
                      <img src={d.img} className="user"/>
                      <a href={d.fb} ><img src="assets/fb.png" className="right" /></a>
                    </div>
                    <div className="center">
                       {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.position}</h4>
                    </div>
                </div>
                    ))}
            </div>
        </div>     
    )
}
