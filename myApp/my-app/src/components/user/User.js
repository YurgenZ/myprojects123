export default function User({item,test}){
    return(
        <div>
            {item.id} -
            {item.name} -
            {item.email};
            <button onClick={()=>{test(item.id)}}>details</button>
        </div>
    );
}