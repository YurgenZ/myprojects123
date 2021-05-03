export default function Post({item,singlePostSearch}){
    return(
        <div>
            {item.id} -
            {item.title}
            <button onClick={()=> {
                singlePostSearch(item.id)
            }}>push me</button>
        </div>
    );
}