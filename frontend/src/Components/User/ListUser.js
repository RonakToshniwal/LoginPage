import {useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
import { useDispatch ,useSelector} from "react-redux";
const ListUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUserData = () => {
        UserService.getUser().then ((res) => {
            dispatch( { type:"users", value: res.data });
        });
    }

    const editUserHandle =(user)=>{
        console.log("hello")

    }




    useEffect ( () => {
        // UserService.getUser().then ((res) => {
        //     console.log(res.data);
        //     dispatch( { type:"users", value: res.data });
        // });
        getUserData();
    },[]);
    const { users } = useSelector( (state) =>state);
    const { email } = useSelector( (state) =>state);
    const deleteUserHandler = (id) => {
        UserService.deleteUser(id).then ((res) => {
            getUserData();
        });
    };
    return ( 
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user) => (
                        <tr key = {user._id}>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                            <Link to ={`/edit/${user}`} state ={user}  className="btn btn-warning m-1" >
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger m-1" onClick={() => deleteUserHandler(user._id)}>
                                Delete
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
 
export default ListUser;