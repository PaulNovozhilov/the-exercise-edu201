import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}
function First(){
    return (
        <div className="container my-5">
            <div className="mb-3"><textarea type="text" className="form-control"/></div>
        </div>
    )
}

function About(){
    return (
        <div className="container my-5">
            <div className="mb-3"><textarea type="text" className="form-control"/></div>
        </div>
    )
}

function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><First/>}/>
                <Route path="/about" render={()=><About/>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;