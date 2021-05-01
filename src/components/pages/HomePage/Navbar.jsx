import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/electronics' activeStyle>
                        Electronics
          </NavLink>
                    <NavLink to='/grocery' activeStyle>
                        Grocery
          </NavLink>
                    <NavLink to='/kitchen' activeStyle>
                        Kitchen
          </NavLink>
                    <NavLink to='/fashion' activeStyle>
                        Fashion
          </NavLink>
                    <NavLink to='/Sports' activeStyle>
                        Sports
          </NavLink>
                    <NavLink to='/healthandBeauty' activeStyle>
                        Health and Beauty
          </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

