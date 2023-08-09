/* eslint-disable */

import './App.css';

import Projects from "./pages/Projects";
import AuthRequire from "./components/AuthRequire";
import Users from "./pages/Users";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Coin from "./pages/Coin";
import ResultSearch from "./pages/ResultSearch";
import Rating from "./pages/Raiting"
import Payments from "./pages/Payments"




function App (){
    return (
        <Routes>
            <Route element={<Layout/>}>
                {/*private routes*/}
                <Route element={<AuthRequire/>}>
                    <Route path={'/admin/projects'} element={<Projects/>}/>
                    <Route path="/admin/users" element={<Users/>}/>

                </Route>
                {/*public routes*/}
                <Route index element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path={'/project/:name'} element={<Coin/>}/>
                <Route path={'/result/:id'} element={<ResultSearch/>}/>
                <Route path={'/rating'} element={<Rating />} />
                <Route path={'/payments'} element={<Payments />} />

            </Route>

        </Routes>
    )
}

export default App;
