export default function Character({item: {name, images, homePlanet, age, gender}}) {

    return (
        <div>
            <h2>{name && name.first} {name && name.last}  <button >more info</button></h2>
            <div>age - {age} </div>
            <div>gender - {gender} </div>
            <div>Home planet - {homePlanet} </div>
            <img src={images && images.main}/>
        </div>
    );
}