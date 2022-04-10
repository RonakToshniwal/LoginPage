import { useDispatch,useSelector } from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import UserService from "../../Services/UserService";
const AddUser = () => {
    const {fullname , usermail,userpassword,userphone,usergender} = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        UserService.postUser({
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
            <h3>Create new User</h3>
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
                            onChange = {(e) => 
                                dispatch({ type :"usergender" , value:e.target.value } )
                            }
                        /> 
                        <label htmlFor="gender" className="form-check-label">
                            Others
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add User" className="btn btn-primary"/>
                    </div>
                </div>

            </form>
        </div>
        
        
     );
}
 
export default AddUser;