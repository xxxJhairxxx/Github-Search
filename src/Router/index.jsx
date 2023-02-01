import {Routes, Route} from "react-router-dom"
import Home from "../Pages/home"
import Usersresults from "../Pages/usersresults"
import Repositories from "../Pages/repositories"
import Userresult from "../Pages/userresult"



export const Router = () => {
    

    return (  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/:name" element={<Usersresults />} /> 
                    <Route path="/user/:userName" element={<Userresult />}/>
                    <Route path="/repos/:userName/:repositoriesInfo" element={<Repositories />}/>
                </Routes>
    )
}
