import {useEffect, useState} from "react";
import axiosInstance from '../../servises/api'
import Post from "../Post/Post";
import './posts.css'

export default function Posts(){


    let [posts,setPosts] = useState([]);
    let [singlePost,setSinglePost] = useState(null);

    useEffect(() => {
        axiosInstance('/posts').then(value => setPosts(value.data))
    },[])

    let singlePostSearch = (id) =>{
        let find = posts.find(value => value.id === id)
        setSinglePost(find)
    }
    return(
        <div className={'wrap_post'}>
            <div className={'post_box'}>
                {
                    posts.map(value=><Post
                        key={value.id}
                        item={value}
                        singlePostSearch={singlePostSearch}
                    />)
                }
            </div>

            <div className={'result_box'}>

                {singlePost && <p>  {singlePost.body}</p>}

            </div>

        </div>
    );
}