import React from 'react'
import Slide from '../components/Slide'
import { Link } from 'react-router-dom'
// import TopBar from '../components/TopBar'

export default function ProductSubCategory() {

    const inventryClass = ['Finished', 'Services', 'Raw', 'Waste']


    return (
        <>
            {/* <TopBar/> */}
            <div className='row '>
                <div className="col-3 "><Slide /></div>
                <div className='col-9 mt-5 ' >
                    <div  >

                        <span style={{ fontWeight: 'bold' }} className='fs-3'>INVENTORY</span><span>/</span>
                        <span style={{ fontWeight: 'bold' }} className='fs-4'>SETUP</span><span>/</span>
                        <span className='fs-5 fw-bold'>PRODUCT SUB CATEGORY</span><span>/</span>
                        <span className='fs-6 '>ADD SUB CATEGORY</span>
                        <hr />
                        <br />
                        <span className='mx-3  mt-3   '> Inventory Class </span>
                        <select className=' mx-3' style={{ width: '150px' }}>
                            <option value=""></option>
                            {inventryClass.map((index, value) => (
                                <option key={value} value={index} >
                                    {index}
                                </option>
                            ))}

                        </select>

                        <span className='mx-3  mt-3   '> Item Class </span>
                        <select className=' mx-3' style={{ width: '150px' }}>
                            <option value=""></option>
                            {inventryClass.map((index, value) => (
                                <option key={value} value={index} >
                                    {index}
                                </option>
                            ))}

                        </select>

                        <span className='mx-3  mt-3   '> Item Category </span>
                        <select className=' mx-3' style={{ width: '150px' }}>
                            <option value=""></option>
                            {inventryClass.map((index, value) => (
                                <option key={value} value={index} >
                                    {index}
                                </option>
                            ))}

                        </select>

                        <div className="col-10 mt-2 border ">

                            <div className='mx-5 m-4'>
                                <span className=' '>Serial No</span> <input type='text' className='w-25 mx-3' />
                                <span className=' ' style={{ marginLeft: '250px' }}>Is Active <input type='checkbox' className='mt-2' style={{ marginLeft: '22px' }} />
                                </span>
                                <br />
                                <span className='ms-4 ' style={{ marginLeft: '34px' }}>Title </span>&nbsp;<input type="text" className='ms-4 mt-2 w-25' />
                                <span className=' ' style={{ marginLeft: '250px' }}>
                                    Sale Profit % <input type='text' style={{ width: '100px', marginLeft: '10px' }} />
                                </span>
                                <br />

                                <span className=' ' style={{ marginLeft: '-20px' }}>Description </span>
                                <input type="text" className=' mt-2 w-25' style={{ marginLeft: '15px' }} />

                                <span className=' ' style={{ marginLeft: '261px' }}>
                                    Discount  % <input type='text' style={{ width: '100px', marginLeft: '8px' }} />
                                </span>

                            </div>




                        </div>


                        <div className=' mt-2 mb-2'>
                            <button style={{ background: '#00ACFF', color: 'white', height: '40px', marginTop: '15px', marginLeft: '610px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-check"></i> Submit</button>
                           <Link to='/subcatlist'>  <button style={{ background: '#00ACFF', color: 'white', height: '40px', margin: '10px', marginLeft: '25px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-circle-xmark"></i>Cancel</button></Link>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}
