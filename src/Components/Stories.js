const stories = [
    {
        name: "9gag",
        img: "assets/img/9gag.svg",
    },
    {
        name: "meowed",
        img: "assets/img/meowed.svg",
    },
    {
        name: "barked",
        img: "assets/img/barked.svg",
    },
    {
        name: "nathanwpylestrangeplanet",
        img:"assets/img/nathanwpylestrangeplanet.svg",
    },
    {
        name: "wawawicomics",
        img: "assets/img/wawawicomics.svg",
    },
    {
        name: "respondeai",
        img: "assets/img/respondeai.svg",
    },
    {
        name: "filomoderna",
        img: "assets/img/filomoderna.svg",
    },
    {
        name: "memeriagourmet",
        img: "assets/img/memeriagourmet.svg",
    }
];
const Story = ({img, name}) => {
    return (
        <div className="story">
            <div className="imagem">
                <img src={img} alt=""/>
            </div>
            
            <div className="usuario">
                {name}
            </div>
        </div>
    );
};

export default function Stories() {
    
    return (
        <div className="stories">

        {stories.map((story, index) => 
        (<Story name={story.name} img={story.img} key={index} />)
        )}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

