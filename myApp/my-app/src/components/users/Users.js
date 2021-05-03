import {useEffect, useState} from "react";
import User from "../user/User";
import './users.css'
import axiosInstance from '../../servises/api'

export default function Users() {

    let [users, setUsers] = useState([])
    let [singleUser,setSingleUser] = useState(null)

    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers(value.data))

    }, [])
    let test = (id) => {
        let idFind = users.find(value => value.id === id);
        setSingleUser(idFind)
    };
    return (
        <div className={'wrap'}>

            <div className={"users-box"}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        test={test}/>)
                }
            </div>

            <div className={'singleUserBox'}>
                {
                   singleUser &&
                   <div>
                       <h2>{singleUser.id} - {singleUser.name} </h2>
                       <p>{singleUser.address.city}</p>
                       <p>{singleUser.address.street}</p>
                       <p>{singleUser.email}</p>

                   </div>

                }
            </div>



        </div>
    );
}