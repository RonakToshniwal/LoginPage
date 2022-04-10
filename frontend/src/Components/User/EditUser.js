
import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import UserService from "../../Services/UserService";
import {useParams} from "react-router-dom";

const EditUser = () => {

    const getUserData = () => {
        UserService.getUser().then ((res) => {
            dispatch( { type:"users", value: res.data });
        });
    }
    const user=useLocation().state
    useEffect ( () => {
        getUserData();
        dispatch({ type :"fullname",value:user.fullname } )
    dispatch({ type :"usermail",value:user.email} )
    dispatch({ type :"usergender",value:user.gender} )
    dispatch({ type :"userphone",value:user.phone} )
       
        
    },[]);
    const {id} = useParams()
    
    const dispatch = useDispatch();
    const {fullname , usermail,userpassword,userphone,usergender} = useSelector((state) => state);
    
    
    
    
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        UserService.postUser({
            "_id" : user._id,
            "fullname" : fullname,
            "email" : usermail,
            "gender": usergender,
            "phone": userphone,
            "password": userpassword,
        }).then ( (res) => {
            console.log(res);
            if(res.status == 200) {
                navigate("/list");
            }
        })
    }
    return ( 
        <div className="conatiner m-2">
            <h3>Edit {user._id}</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                        <input
                            type = "text"
                            name = "fullname"
                            id = "fullname"
                            className = "form-control"
                            placeholder="Enter Fullname"
                            value = {fullname}
                            onChange = {(e) => 
                                dispatch({ type :"fullname",value:e.target.value } )
                            }
                        /> 
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input
                            type = "email"
                            name = "email"
                            id = "email"
                            className = "form-control"
                            placeholder="Enter Email"
                            value = {usermail}
                            onChange = {(e) => 
                                dispatch({ type :"usermail" , value:e.target.value } )
                            }
                        /> 
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input
                            type = "password"
                            name = "password"
                            id = "password"
                            className = "form-control"
                            placeholder="Enter password"
                            value = {userpassword}
                            onChange = {(e) => 
                                dispatch({ type :"userpassword" , value:e.target.value } )
                            }
                        /> 
                </div>

                <div className="form-group">
                    <label htmlFor="phone no">Phone no</label>
                        <input
                            type = "text"
                            name = "phone"
                            id = "phone"
                            className = "form-control"
                            placeholder="Enter Phone no"
                            value = {userphone}
                            onChange = {(e) => 
                                dispatch({ type :"userphone" , value:e.target.value } )
                            }
                        /> 
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            type = "radio"
                            name = "gender"
                            id = "gender"
                            className = "form-chech-input"
                            value = "Male"
                            checked = {usergender === "Male"}
                            autoComplete="Off"
                            onChange = {(e) => 
                                dispatch({ type :"usergender" , value:e.target.value } )
                            }
                        /> 
                        <label htmlFor="gender" className="form-check-lable">
                            Male
                        </label>
                    </div>

                    <div className="form-check form-check-inline" >
                        <input
                            type = "radio"
                            name = "gender"
                            id = "gender"
                            className = "form-chech-input"
                            value = "Female"
                            checked = {usergender === "Female"}
                            autoComplete="Off"
                            onChange = {(e) => 
                                dispatch({ type :"usergender" , value:e.target.value } )
                            }
                        /> 
                        <label htmlFor="gender" className="form-check-label">
                            Female
                        </label>
                    </div>

                    <div className="form-check form-check-inline" >
                        <input
                            type = "radio"
                            name = "gender"
                            id = "gender"
                            className = "form-chech-input"
                            value = "Others"
                            checked = {usergender === "Others"}
                            autoComplete="Off" 
                            onChange = {(e) => 
                                dispatch({ type :"usergender" , value:e.target.value } )
                            }
                        /> 
                        <label htmlFor="gender" className="form-check-label">
                            Others
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-primary"/>
                    </div>
                </div>

            </form>
        </div>
        
        
     );
}
 

export default EditUser;