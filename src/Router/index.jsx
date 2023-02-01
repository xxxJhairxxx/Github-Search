import {Routes, Route,useNavigate } from "react-router-dom"
import Home from "../Pages/Home"
import UsersResults from "../pages/UsersResults"
import Repositories from "../pages/Repositories"
import Userresult from "../Pages/UserResult"



export const Router = () => {

    const history = useNavigate();

    return (
            <div>
                <button className='btn-back' onClick={() => history(-1) }>Back</button>

                
                    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/:name" element={<UsersResults />} /> 
                    <Route path="/user/:userName" element={<Userresult />}/>
                    <Route path="/repos/:userName/:repositoriesInfo" element={<Repositories />}/>
                </Routes>
            </div>
    )
}
