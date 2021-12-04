const suggestions = [
    {
        userImg: "assets/img/bad.vibes.memes.svg",
        userName: "bad.vibes.memes",        
    },
    {
        userImg: "assets/img/chibirdart.svg",
        userName: "chibirdart",        
    },
    {
        userImg: "assets/img/razoesparaacreditar.svg",
        userName: "razoesparaacreditar",        
    },
    {
        userImg: "assets/img/adorable_animals.svg",
        userName: "adorable_animals",        
    },
    {
        userImg: "assets/img/smallcutecats.svg",
        userName: "smallcutecats",        
    }
];

const Suggestion = ({userImg, userName}) => {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={userImg} alt=""/>

                <div className="texto">
                    <div className="nome">{userName}</div>
                    <div className="razao">Segue você</div>
                </div>

            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
};

export default function Suggestions() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion, index) => 
            <Suggestion  userName={suggestion.userName} userImg={suggestion.userImg} key={index} />
            )}
            
        </div>
    );
}
