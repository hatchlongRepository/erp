import React from 'react';
import '../components/topnav.css';

export default function TopBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/icons/logo-dark.png" alt="logo" className='img-logo' />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-5">
                        <div class="dropdown-show mt-3 to-bar">
                            <a class="btn btn-light " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-expand"></i>
                            </a>
                            <div class="dropdown-menu w-50  " >
                                <ul class="list-group list-group-horizontal  ">
                                    <li class="list-group-item border-0 border-bottom "><small><i class="fa-solid fa-star"></i>Favourite</small> </li>
                                    <li class="list-group-item border-0 border-bottom"><small><i class="fa-regular fa-clock"></i> Recent Item</small></li>
                                    <li class="list-group-item border-0 border-bottom"><small><i class="fa-solid fa-list"></i> Run</small></li>
                                    <li class="list-group-item border-0 border-bottom"><small><i class="fa-solid fa-bolt-lightning"></i> Quick Access</small></li>
                                    <li class="list-group-item border-0 border-bottom"><small><i class="fa-solid fa-circle-exclamation"></i> About</small></li>
                                </ul>

                            </div>
                        </div>

                    </ul>
                    <form className="d-flex  mt-3 search-bar">
                        <input
                            className="form-control mr-sm-5"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Go
                        </button>
                    </form>
                    <i  class="fa-regular fa-bell acc-bar mr-5"></i>

                    <div class="dropdown show " >
                        <a class="btn btn-light dropdown-toggle mr-5" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            su
                        </a>
                        <div class="dropdown-menu dropleft" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Change Password</a>
                            <a class="dropdown-item" href="#">Language</a>
                            <a class="dropdown-item" href="#"><i class="fa-solid fa-circle-arrow-left"></i> Logout</a>
                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}
