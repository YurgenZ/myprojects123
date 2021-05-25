export default function InventorySimple(info,{item: {title,slogan}}){
    return(
        <div>

            <h2>{title} <button onClick={info} >more info</button></h2>

        </div>
    );
}