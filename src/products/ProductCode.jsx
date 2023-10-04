import React, { useState } from 'react';
import Slide from '../components/Slide';
// import { Link } from 'react-router-dom';
import '../account/height.css';
// import TopBar from '../components/TopBar';

export default function ProductCode() {
    const uomOptions = ["Bsg's", 'CFT', 'N/A', "Mtr's", "No's", "Kg's", "Ltr"];

    const [pic, setPic] = useState()
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Display the selected image
            const reader = new FileReader();
            reader.onload = (event) => {
                setPic(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const [isFormVisible, setIsFormVisible] = useState(true);

    const toggleFormVisibilitys = () => {
        setIsFormVisible(!isFormVisible);
        // alert(isFormVisible ? 'Form is now hidden' : 'Form is now visible');
    };

    const [isFormVisibles, setIsFormVisibles] = useState(false);

    const toggleFormVisibilities = () => {
        setIsFormVisibles(!isFormVisibles);
        // alert(isFormVisible ? 'Form is now hidden' : 'Form is now visible');
    };



    return (
        <>
            {/* <TopBar /> */}
            <div className="row" >
                <div className='col-3'>
                    <Slide />
                </div>
                <div className='col-9 mt-5'>
                    <div className="col-6 mx-2  ">
                        <span style={{ fontWeight: 'bold' }} className='fs-3'>INVENTORY</span><span>/</span>
                        <span className='fs-5 fw-bold'>PRODUCT Code</span>

                    </div>
                    <div className='row'>
                        <div className="col-8 border rounded mt-3 mb-5">
                            <br />
                            <span className=''>Product Code</span>
                            <input type="text" className=' rounded border-1 input-width ms-2' />

                            <span className=''> UOM</span>
                            <select className='rounded border-1 input-width'>
                                <option value=""></option>
                                {uomOptions.map((item, index) => (
                                    <option value={item} key={index}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <label className='ms-2'>Is Active</label><input type="checkbox" name="" id="" className='mx-3' /><br />
                            <label className=' mt-2'>Product Name </label><input type="text" name="" id="" className='input-he mt-2 rounded border-1' />
                            <label className='ms-2'>Costing Allow</label><input type="checkbox" name="" id="" className='mx-3' /><br />
                            <label className='ms-2'>Description</label><input type="text" name="" id="" className='input-he mt-2 rounded border-1 ms-3 ' />
                            <br /><label className='ms-3'>Category</label><input type="text" name="" id="" className='input-he mt-2 rounded border-1 ms-4 ' />
                            <br /><label className='ms-3'>Company</label><input type="text" name="" id="" className='input-width mt-2 rounded border-1 ms-3 ' />
                            <label className=''> Color</label><input type="text" name="" id="" className='input-width mt-2 rounded border-1 ms-2 ' />
                            <br /><label className='ms-5'> Brand</label><input type="text" name="" id="" className='input-width mt-2 rounded border-1 ms-3 ' />
                            <label className='ms-3'>Size</label><input type="text" name="" id="" className='input-width mt-2 rounded border-1 ms-2 ' />
                            <br />
                        </div>
                        <br />
                        <div className="col-4 border mb-5  mx-2 rounded" style={{ marginLeft: '-16px', height: '400px', marginTop: '16px', width: '280px' }}>
                            {pic && <img src={pic} alt="Uploaded" style={{ width: '280px', height: '300px' }} />}
                            <input type='file' className='absolute ' style={{ background: '#00ACFF', width: '200px', color: 'white', height: '40px', marginTop: '15px', border: '5px solid #00ACFF', borderRadius: '5px' }} onChange={handleFileChange} />

                        </div>
                        <br />
                    </div>

                    <div className="col-8 mb-3 " style={{ marginTop: '-50px' }}>
                        <button onClick={toggleFormVisibilitys} style={{ marginLeft: '10px', background: '#00ACFF', width: '250px', color: 'white', height: '40px', marginTop: '15px', border: '5px solid #00ACFF', borderRadius: '5px' }}>Packing Information</button>
                        <button onClick={toggleFormVisibilities} style={{ marginLeft: '10px', background: '#00ACFF', width: '250px', color: 'white', height: '40px', marginTop: '15px', border: '5px solid #00ACFF', borderRadius: '5px' }}>Product Specs and Rates</button>
                    </div>
                    <br />
                    {
                        isFormVisible && <div className="row " style={{ marginTop: '-20px ' }}>
                            <div className="col-4 border mx-1 flex rounded-3 mt-3 mb-2">
                                <label >Piece Per Unit</label><input type="text" className='ms-3 mt-2 w-50' /><br />
                                <label >Unit PerCarton</label><input type="text" className='mt-2 ms-2 w-50' /><br />
                                <label>cbm PerCarton</label><input type="text" className=' mt-2 w-50' /><br />
                                <label >HS Cose</label>&nbsp; <input type="text" className='ms-5 mt-2 mb-2 w-50' /><br />
                            </div>
                            <div className="col-4 border mx-1 flex rounded-3 mt-3 mb-2">
                                <label >Carton Length</label><input type="text" className='ms-2 mt-2 w-50' /><br />
                                <label >Carton Breadth</label><input type="text" className=' mt-2 w-50' /><br />
                                <label>Carton Height</label><input type="text" className='ms-2 mt-2 w-50' /><br />
                            </div>
                            <div className="col-3 border mx-2 flex rounded-3 mt-3 mb-2">
                                <label >Gross Weight</label><input type="text" className=' mt-2 w-50' /><br />
                                <label >Net Weight</label><input type="text" className='ms-3 mt-2 w-50' /><br />
                                <input type="checkbox" name="" id="" className='mt-3' /><label className='ms-3'>Fair Packing</label>
                            </div>
                        </div>
                    }

                    <br />
                    {
                        isFormVisibles && <div className="row mx-2">
                            <div className="col-3 border flex rounded-3  ">
                                <p style={{ marginTop: '-15px', border: 'none', color: '#00acff' }}>Stock Location</p>
                                <br />
                                <span className=''>Barcode 1 </span><input type="text" className='w-50 ms-1' /><br />
                                <span className=''>Barcode 2 </span><input type="text" className='mt-2 w-50' /><br />
                                <span className=''>Barcode 3 </span><input type="text" className='mt-2 w-50' /><br />
                                <span className=''>Bundle </span><input type="text" className='mt-2 ms-4 w-50' />
                                <p className='ms-5'>Barcode</p>

                            </div>


                            <div className="col-4 border flex rounded-3 mx-2 ">
                                <p style={{ marginTop: '-15px', border: 'none', color: '#00acff' }}>Stock Levels</p>
                                <span className=''>Reorder Level</span><input type="text" className='w-50 ms-4' /><br />
                                <span className=''>Minimum Stock </span><input type="text" className='mt-2 w-50 ms-1' /><br />
                                <span className=''>Maximum Stock</span><input type="text" className='mt-2 w-50 ms-1' /><br />
                                <span className='ms-3'>Expiry Date</span>&nbsp;<input type="text" className='mt-2 ms-4 w-50' />

                            </div>


                            <div className="col-4 border flex rounded-3 ">
                                <p style={{ marginTop: '-15px', border: 'none', color: '#00acff' }}>Product Rate's (RS) - Store</p>
                                <span className=''>Product Stock</span><input type="text" className='w-50 ms-2' /><br />
                                <span className='ms-3'>Avg Rate </span><input type="text" className='mt-2 w-50 ms-4' /><br />
                                <span className='ms-2'>Sale Value</span><input type="text" className='mt-2 w-50 ms-4' /><br />
                                <span className=''>Until Purchase </span><input type="text" className='mt-2  w-50' /><br />
                                <span className='ms-2'>Profit % </span><input type="text" className='mt-2 ms-5 w-50' />
                                <span className='ms-1'>Discount% </span><input type="text" className='mt-2 ms-4 w-50' />
                            </div>

                            <div className="col-3 border " >

                                <span className=''>Bundle Sale rate</span><input type="text" className='ms-1 mt-2 w-25' /><br />
                                <span className='ms-1'>Bundle Pur. rate </span><input type="text" className='mt-2 w-25' />

                            </div>
                            <div className=''>
                                <button style={{ background: '#00ACFF', color: 'white', height: '40px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-check"></i> Submit</button>
                                <button style={{ background: '#00ACFF', color: 'white', height: '40px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-circle-xmark"></i> Cancel</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

