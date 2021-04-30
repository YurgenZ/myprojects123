

export default function User(props) {


    let {name, age, isMarried, address,} = props;

    return <div>

        <h2>{name} {age} </h2>
        <p>{isMarried.toString()}</p>
        <div>{address}</div>

    </div>

}


// Всім, привіт, додатково до дз зробіть по counter кнопки - increment,
//     decrement, reset(тобто коли натискаєте на кнопко то counter = 0),
// а також кнопки increment + 100, decrement - 100
//можно потом заморочится и сделать через чекбоксы.