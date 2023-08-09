import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {List, ListItem, MenuItem, Popover, Select, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useLogoutMutation} from "../redux/user/userApiSlice";
import {logoutUser} from "../redux/user/userSlice";
import LoginButton from "../components/UI/Button/Button"
import Image from './UI/Image/Image';

function refreshPage() {
    window.location.reload(false);
}
const Header = () => {
    const dispatch = useDispatch()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()
    const isLogined = !!localStorage.getItem('token')

    const handleLogOut = async () => {
        try {
            await logout().unwrap()
            dispatch(logoutUser())
            refreshPage()
        } catch (e) {
            console.log(e)
        }
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="header">
            <div className=" header__wrapper">
                <div className="header__container container">
                    <div className="header__body">

                        <div className="header__logo">
                            {/* { isLogined && 
                                 <div className="header__menu_button" onClick={handleClick}>
                                 |||
                                 </div>
                            } */}
                            <Link to="/" className=" header__logo">
                            <Image
                                type={"image/webp"}
                                srcImage={require("../assets/img/cryptoon.png")}
                                srcWidth={"150px"}
                            />
                            </Link>
                        </div>
                        {
                            !isLogined ? null :
                            <>
                             <>
                             
                            {/* <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                           

                            <List>
                                <ListItem>
                                    <Link to={'/'}>
                                        Main
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={'/admin/users'}>
                                        Users
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={'/admin/projects'}>
                                        Projects
                                    </Link>
                                </ListItem>
                            </List>
                        </Popover>

                        <div className="header__nav">
                            <Link to={'/admin/projects'}>
                                <Typography  fontSize={'20px'}>
                                    Projects
                                </Typography>
                            </Link>
                            <Link to={'admin/users'}>
                                <Typography  fontSize={'20px'}>
                                    Users
                                </Typography>
                            </Link>
                            <Link to={'/'}>
                                <Typography  fontSize={'20px'}>
                                    Main
                                </Typography>
                            </Link>
                            <Link to={'/payments'}>
                                <Typography  fontSize={'20px'}>
                                    Payments
                                </Typography>
                            </Link>
                        </div> */}
                            </>
                            </>
                        }
                        

                        <div className={`header__main ${!isLogined? "header__navbar":""}`} >
                            {
                                isLogined && (
                                <>
                                <input id="menu-toggle" type="checkbox" />
                                <label class='menu-button-container' for="menu-toggle">
                                    <div class='menu-button'></div>
                                </label>
                                <ul class="menu">
                                <li><Link to={'/admin/projects'}>
                                    <Typography  fontSize={'20px'}>
                                        Projects
                                    </Typography>
                                </Link></li>
                                <li>
                                    <Link to={'admin/users'}>
                                    <Typography  fontSize={'20px'}>
                                        Users
                                    </Typography>
                                    </Link>
                                </li>
                                <li> <Link to={'/'}>
                                    <Typography  fontSize={'20px'}>
                                        Main
                                    </Typography>
                                </Link>
                                </li>
                                <li> <Link to={'/payments'}>
                                    <Typography  fontSize={'20px'}>
                                        Payments
                                    </Typography>
                                </Link>
                                </li>
                                </ul>
                                </>
                                )
                            }
                            <div className="header__menu menu">
                                <div className="menu__body">
                                    <div className="header__lang lang-item">
                                        <Select defaultValue={'Uk'} sx={{
                                            boxShadow: 'none',
                                            '.MuiOutlinedInput-notchedOutline': {border: 0}
                                        }} id="lang" name="lang" className="lang-item__select">
                                            <MenuItem value="Uk" selected>
                                                UA</MenuItem>
                                            <MenuItem value="En">ENG</MenuItem>
                                        </Select>
                                    </div>
                                    <div className="menu__accaunt">
                                        <img src={require("./../assets/img/account-icon.png")} alt="icon"
                                             className="menu__account-image"/>
                                    </div>
                                    {
                                        isLogined ?
                                            <LoginButton onClick={handleLogOut} type="button"
                                                    className="menu__button btn">Logout</LoginButton>
                                            :
                                            <LoginButton style={{display:"flex", margin:"0 auto"}} onClick={() => navigate('/login')} type="button"
                                                    className="menu__button btn">Login</LoginButton>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;