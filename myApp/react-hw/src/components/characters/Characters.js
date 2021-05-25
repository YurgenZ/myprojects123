import {getCharacters} from "../../api/Api";
import {useEffect, useState} from "react";
import Character from "../character/Character";

export default function Characters() {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]))
    }, []);

    return (
        <div>
            <div>{
                characters.map((value, index) => <Character
                    key={index}
                    item={value}

                />)

            }</div>


        </div>
    );
}