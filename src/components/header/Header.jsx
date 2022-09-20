import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CButton } from "@coreui/react";
import "./header.css";

const Header = props => {
    const { filterMoviesBySearch, showSearch, watchlist, hideWatch } = props;
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const logoutFn = () => {
        localStorage.clear();
        navigate("/login?referrer=home");
    };

    const loginFn = () => {
        navigate("/login");
    };
    const searchFn = e => {
        console.log(searchText);
        e.preventDefault();
        filterMoviesBySearch(searchText);
    };

    const isUserLoggedIn = localStorage.getItem("accessToken");

    return (
        <div className='p-1 d-flex justify-content-between navbar_main'>
            <div>
                <a
                    className='display-6 py-1 remove-underline fw-bold'
                    href='#'
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    SHOW TIME
                </a>
            </div>

            {showSearch && (
                <form className='d-flex' onSubmit={searchFn}>
                    <input
                        type='text'
                        className='custom-input'
                        value={searchText}
                        onChange={e => {
                            setSearchText(e.target.value);
                        }}
                        placeholder={"Enter Movie Name"}
                    />
                    <CButton
                        type='submit'
                        color='danger'
                        className='px-3 searchBtn'
                    >
                        Search
                    </CButton>
                </form>
            )}

            {hideWatch ? (
                <Link to='/watchlist'>
            <CButton
                        type='submit'
                        color='danger'
                        className='px-3 searchBtn'
                    >
                        Watchlist <span>{watchlist?.length}</span>
                    </CButton>
                    </Link>
            ):("")}
                
            {isUserLoggedIn ? (
                <CButton
                    type='submit'
                    color='danger'
                    className='px-3 logoutBtn'
                    onClick={logoutFn}
                >
                    Logout
                </CButton>
            ) : (
                <CButton
                    type='submit'
                    color='danger'
                    className='px-3'
                    onClick={loginFn}
                >
                    Login
                </CButton>
            )}
        </div>
    );
};
export default Header;
