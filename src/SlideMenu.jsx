import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SlideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div className={`wrapper ms-2 mt-5 ${collapsed ? 'collapsed' : ''}`}>
        <div className="row">
          <div className="col">
            {/* Sidebar */}
            <aside id="sidebar">
              <div className="h-100">
                <ul className="sidebar-nav">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#multi"
                      aria-expanded="false" aria-controls="multi">
                      Purchase
                    </a>
                    <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link collapsed ms-4" data-bs-toggle="collapse"
                          data-bs-target="#multi-three" aria-expanded="false" aria-controls="multi-three" >
                          Transaction
                        </a>
                        <ul id="multi-three" className="sidebar-dropdown list-unstyled collapse ms-5">
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link"> Purchase Order</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link collapsed ms-4" data-bs-toggle="collapse"
                          data-bs-target="#multi-four" aria-expanded="false" aria-controls="multi-four" >
                          Setup
                        </a>
                        <ul id="multi-four" className="sidebar-dropdown list-unstyled collapse ms-5">
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link"> Vendor Define</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link collapsed ms-4" data-bs-toggle="collapse"
                          data-bs-target="#multi-two-two" aria-expanded="false" aria-controls="multi-two-two" >
                          Reports
                        </a>
                        <ul id="multi-two-two" className="sidebar-dropdown list-unstyled collapse ms-5">
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Vendor List</a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Vendor Ledger</a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Vendor Closing</a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Balance </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Purchase Order</a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">  Report</a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">PO status  </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item ">
                    <a href="#" className=" sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#inent"
                      aria-expanded="false" aria-controls="inent">
                      <i className="fa-solid fa-sliders pe-2"></i>
                      Inventory
                    </a>
                    <ul id="inent" className="sidebar-dropdown list-unstyled collapse ms-4 " data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        {/* Add your Link component with the 'to' prop */}
                        <Link to={"/catlist"} className="sidebar-link"> Product Category</Link>
                      </li>
                      <li className="sidebar-item">
                        {/* Add your Link component with the 'to' prop */}
                        <Link to={"/productsubcategory"} className="sidebar-link"> Product Sub Category</Link>
                      </li>
                      <li className="sidebar-item">
                        {/* Add your Link component with the 'to' prop */}
                        <a href="#" className="sidebar-link"> Product Group</a>
                      </li>
                      <li className="sidebar-item">
                        {/* Add your Link component with the 'to' prop */}
                        <Link to={"/procode"} className="sidebar-link"> Product Code</Link>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link"> Store and Location</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link"> Product Stock Adjustment</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard"
                      aria-expanded="false" aria-controls="dashboard">
                      <i className="fa-solid fa-sliders pe-2"></i>
                      General Ledger
                    </a>
                    <ul id="dashboard" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link"> Transaction</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link"> Setup</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link"> Reports</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#auth"
                      aria-expanded="false" aria-controls="auth">
                      <i className="fa-regular fa-user pe-2"></i>
                      Sales
                    </a>
                    <ul id="auth" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#account"
                      aria-expanded="false" aria-controls="account">
                      <i className="fa-regular fa-user pe-2"></i>
                      Account Payable
                    </a>
                    <ul id="account" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#acc"
                      aria-expanded="false" aria-controls="acc">
                      <i className="fa-regular fa-user pe-2"></i>
                      Account Receivable
                    </a>
                    <ul id="acc" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#production"
                      aria-expanded="false" aria-controls="production">
                      <i className="fa-regular fa-user pe-2"></i>
                      Production
                    </a>
                    <ul id="production" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#hr"
                      aria-expanded="false" aria-controls="hr">
                      <i className="fa-regular fa-user pe-2"></i>
                      HR and Payroll
                    </a>
                    <ul id="hr" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#user"
                      aria-expanded="false" aria-controls="user">
                      <i className="fa-regular fa-user pe-2"></i>
                      User Administration
                    </a>
                    <ul id="user" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#cash"
                      aria-expanded="false" aria-controls="cash">
                      <i className="fa-regular fa-user pe-2"></i>
                      Cash
                    </a>
                    <ul id="cash" className="sidebar-dropdown list-unstyled collapse ms-4" data-bs-parent="#sidebar">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Main Component */}
        <div className="main">
          <nav className="navbar navbar-expand px-3 ">
            {/* Button for sidebar toggle */}
            <button className="btn" type="button" data-bs-theme="danger" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
