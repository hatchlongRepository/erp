import React from 'react'
import './header.css';
import 'bootstrap/js/dist/dropdown';


export default function MainErp() {

    const slide = () => {
        document.querySelector('.slider-left').classList.toggle('clicked');
    }

    return (
        <div>
            <div className='row'>
                <div >
                    <img src='icons/logo-dark.png' alt='ímage' className='img-hatch' />
                    <nav>
                        <ul className='erp-style'>
                            <li id='home' onClick={slide} style={{marginLeft:'-15px'}}><i class="fa-solid fa-house fa-xl ms-1"></i><a style={{marginLeft:'-50px'}}> Home</a></li>

                            <div class="dropdown-menu slider-left" id='dd'>
                                <a class="dropdown-item" href="#">Company</a>
                                <a class="dropdown-item" href="#">Security</a>
                                <a class="dropdown-item" href="#">Master</a>
                                <a class="dropdown-item" href="#">Data Management</a>
                                <a class="dropdown-item" href="#">Utilities</a>
                            </div>
                            <li><i class="fa-solid fa-file-invoice-dollar fa-xl "></i><a style={{ marginLeft: '-40px' }}> Financial</a></li>
                            <li><i class="fa-solid fa-warehouse fa-lg "></i><a style={{ marginLeft: '-40px' }}>Inventory</a></li>
                            <li><i class="fa-solid fa-whiskey-glass fa-xl ms-4"></i><a >Fixed Assets</a></li>
                            <li><i class="fa-solid fa-cart-shopping fa-xl ms-1"></i><a style={{ marginLeft: '-30px' }}>Production</a></li>
                            <li><i class="fa-solid fa-helmet-safety fa-xl ms-3"></i><a style={{ marginLeft: '-20px' }}>Point of Sale</a></li>
                            <li><i class="fa-solid fa-chart-simple fa-xl ms-4"></i><a style={{marginLeft:'5px'}}>Quality Control</a></li>
                            <li style={{marginLeft:'-15px'}}><i class="fa-solid fa-gear fa-lg"></i><a style={{marginLeft:'-50px'}}>Settings</a></li>
                        </ul>
                    </nav>
                </div>


                <div className='col-sm-10' style={{ marginLeft: '20%', marginTop: '-53%' }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white ms-3">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="dropdown-show">
                                <a class="btn btn-light " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa-solid fa-bars"></i>
                                </a>
                                <div class="dropdown-menu " >
                                    <ul class="list-group list-group-horizontal h-25 ">
                                        <li class="list-group-item border-0 border-bottom "><i class="fa-solid fa-star"></i> Favourite</li>
                                        <li class="list-group-item border-0 border-bottom"><i class="fa-regular fa-clock"></i> Recent Item</li>
                                        <li class="list-group-item border-0 border-bottom"><i class="fa-solid fa-list"></i> Run</li>
                                        <li class="list-group-item border-0 border-bottom"><i class="fa-solid fa-bolt-lightning"></i> Quick Access</li>
                                        <li class="list-group-item border-0 border-bottom"><i class="fa-solid fa-circle-exclamation"></i> About</li>
                                    </ul>

                                </div>
                            </div>
                            <form style={{ marginLeft: '440px', borderRadius: '10px' }}>
                                <input type="search" name="" id="" placeholder='Search' />
                                <button style={{ border: '1px solid grey' }}>Go</button>
                            </form>
                            <i style={{ marginLeft: '20%' }} class="fa-regular fa-bell"></i>
                            <div class="dropdown show" >
                                <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    su
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Change Password</a>
                                    <a class="dropdown-item" href="#">Language</a>
                                    <a class="dropdown-item" href="#"><i class="fa-solid fa-circle-arrow-left"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
