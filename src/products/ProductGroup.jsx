import React from 'react';
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './products/Add.css';
import './Add.css';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';
// import TopBar from '../components/TopBar';

export default function ProductGroup() {
    return (
        <>
           {/* <TopBar/> */}
            <div class='row'>
                <div className='col-3'>
                     <Slide />
                </div>
                <div className='col-9 mt-5' >
                    <h3 style={{marginLeft:'20px'}}>INVENTORY<span style={{ fontSize: '17px', color: 'lightgrey' }}>/ADD PRODUCTS GROUP</span></h3>
                      <hr />
                    <div className='row'>
                        <div class='col-sm-6'>
                            <input type='textfield' placeholder='Category Display Name' className='w-75' style={{ height: '40px', border: '1px solid grey', marginLeft: '15px', borderRadius: '5px', color: 'grey' }} />
                            <h5 style={{ fontSize: '80%', marginLeft: '15px', color: 'grey' }}>Please choose proper product Unit type and unit</h5>
                            <input type='text' className='w-75' style={{ borderRadius: '5px', height: '100px', border: '1px solid grey', marginLeft: '15px', color: 'grey' }} placeholder='Description' />
                        </div>
                        <div class='col-sm-6' >
                            <select className='w-50' style={{ marginLeft: '10%', height: '40px', borderRadius: '5px', color: 'grey' }}>Select store
                                <option>Select Applied Taxes</option>
                            </select>
                            <button style={{ background: '#00ACFF', color: 'white', border: '1px solid #00ACFF', height: '40px', marginLeft: '10px', borderRadius: '5px' }}>Custom Tax</button><br />
                            <select className='w-75' style={{ marginTop: '10px', marginLeft: '10%', border: '1px solid grey', height: '40px', borderRadius: '5px', marginTop: '20px', color: 'grey' }} placeholder='Select a unit type'>Category
                                <option>Category</option>
                            </select><br />
                            <select className='w-75' style={{ marginTop: '10px', marginLeft: '10%', height: '40px', borderRadius: '5px', color: 'grey' }} placeholder='Select a unit type'>
                                <option>SubCategory</option>
                            </select><br />
                            <button style={{ marginLeft: '10%', background: '#00ACFF', color: 'white', borderRadius: '5px', height: '50px', border: '1px solid #00ACFF', width: '150px', marginTop: '20px' }}><i class="fa-solid fa-upload"></i>Upload Image</button>

                        </div>
                    </div>
                    <h2 style={{ marginTop: '20px', marginLeft: '15px' }}>Variants</h2><br />
                    <p style={{ margin: '0', marginLeft: '15px' }}>Does this product come in multiple variations like color or size</p>
                    <div className="scrollmenu">
                        <a href="#h">Variant Name</a><a href="#">Product</a><a href="#">HSN</a><a href="#">Brand</a><a href="#">Category</a> <a href="#">Shade</a>
                        <a href="#">UOM</a><a href="#">Rack No</a><a href="#">Group</a><a href="#">MOQ</a><a href="#">Threshold</a><hr /><br />
                    </div>
                    <div >
                        <button style={{ background: '#00ACFF', color: 'white', margin: '10px', height: '40px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-plus"></i>Add a New Row</button>
                        <button style={{ background: '#00ACFF', color: 'white', margin: '10px', height: '40px', marginLeft: '57%', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-check"></i>Submit</button>
                        <Link to='/catlist'><button style={{ background: '#00ACFF', color: 'white', height: '40px', margin: '10px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-circle-xmark"></i>Cancel</button></Link>
                    </div>

                </div>


            </div >


        </>
    )
}
