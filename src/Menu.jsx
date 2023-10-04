import React from 'react'
import 'bootstrap/js/dist/dropdown';
import './menu.css';

const slide = () => {
  document.querySelector('.dropdown-menu').classList.toggle('clicked');
}

export default function MainErp() {
    return (
        <div className='col-sm-2'>
                    
        <nav>
            <ul className='erp-style'>
            <li id='home' onClick={slide}><i class="fa-solid fa-house fa-xl"></i><a >Home</a></li>
                       
                        <div class="dropdown-menu" id='dd'>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                <li><i class="fa-solid fa-file-invoice-dollar fa-xl"></i><a >Financial</a></li>
                <li><i class="fa-solid fa-warehouse fa-lg"></i><a >Inventory</a></li>
                <li><i class="fa-solid fa-hurricane fa-xl"></i><a >Fixed Assets</a></li>
                <li><i class="fa-solid fa-tarp-droplet fa-lg"></i><a>Production</a></li>
                <li><i class="fa-solid fa-helmet-safety fa-lg"></i><a >Point of Sale</a></li>
                <li><i class="fa-solid fa-chart-simple fa-lg"></i><a >Quality Control</a></li>
                <li><i class="fa-solid fa-gear fa-xl"></i><a >Settings</a></li>
            </ul>
        </nav>
    </div>
    )
}