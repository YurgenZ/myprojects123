import './item.style.css'

function ItemConfig(props) {
    return <div>

        <img src={props.img}
             alt=""/>

        <a href={props.linkToVideo}>{props.name}</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque delectus deleniti dolor eveniet
            excepturi facilis fuga impedit maiores, maxime nobis omnis perferendis quam quibusdam reprehenderit soluta
            temporibus voluptate?</p>
    </div>;

}

export default ItemConfig;