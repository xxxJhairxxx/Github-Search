import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Usersresults from "../Pages/Usersresults"
import Repositories from "../Pages/Repositories"
import Userresult from "../Pages/Userresult"



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
