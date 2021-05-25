import {getInventory} from "../../api/Api";
import InventorySimple from "../inventorySimple/InventorySimple";
import {useEffect, useState} from "react";


export default function Inventory() {
    let [inventory, setInventory] = useState([]);
    let [details, setDetails] = useState(null)
    useEffect(() => {
        getInventory().then(value => setInventory([...value.data]))
    }, [])

    let info = (name) => {
        let nameFind = inventory.find(value => value.name === name)
        setDetails(nameFind)
    }

}
return (
    <div>
        <div>{
            inventory.map((value, index) => <InventorySimple
                key={index}
                item={value}
                info={info}
            />)
        }</div>

        <div>{
            details &&
            <div>
                <h2>{d}</h2>
            </div>
        }</div>

    </div>
);

