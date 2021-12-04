const userData = {
    img: "assets/img/catanacomics.svg",
    name: "catanacomics",
    nickName: "Catana"
};

const UserInfo = ({img, name, nickName}) => {
    return (
        <div className="usuario">
            <img src={img} alt="" />

            <div className="texto">
                <strong>{name}</strong>
                {nickName}
            </div>
        </div>
    );
}

export default function User() {
    return (
        <UserInfo name={userData.name} img={userData.img} nickName={userData.nickName} />
    );
}
