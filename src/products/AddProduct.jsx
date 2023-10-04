import React, { useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Add.css';

export default function AddProduct  (){
    const type = ['Length', 'Weight', 'Area', 'Volume'];
    const utype = {
        'Length': ['Meter', 'Kilometer', 'Centimeter', 'Milimeter', 'Inch', 'Foot', 'Yard'],
        'Weight': ['Kilogram', 'Gram', 'Miligram', 'Metric Tonne'],
        'Area': ['Square Meter', 'Square kilometer', 'Square Centimeter', 'Square Milimeter', 'Square Foot'],
        'Volume': ['Litre', 'MilliLitre', 'Cubic Meter'],
    }

    const [unit, setUnit] = useState('');
    console.log(unit);

    const [tableData, setTableData] = useState([
        ["Coke", "Item 1", "New 1", "Unit 1", "10", "Remarks 1", "0.00", "0.00", "0.00","00","000","111","222","333","444","555","666","777"],
        ["Coke", "Item 2", "New 2", "Unit 2", "20", "Remarks 2", "0.00", "0.00", "0.00","00","000","111","222","333","444","555","666","777"],
      ]);

      const addrow = () => {
        const newRow = ["", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", ""];
        setTableData([...tableData, newRow]);
      };

      const handleCellChange = (event, rowIndex, colIndex) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][colIndex] = event.target.value;
        setTableData(updatedData);
      };
    

    return (
        <>

            <div class='row'>
                <h3 style={{ margin: '20px' }}>PRODUCTS</h3>
                <hr />
                <div class='col-md-6'>

                    <form action="">
                        <select className='select-store' style={{ border: '1px solid grey' }}>
                            <option >Select Store</option>
                        </select>

                        <input className='input-text' type='textfield' placeholder='Product Display Name' style={{ width: "603px", border: '1px solid grey', marginLeft: '15px' }} />
                        <input className='input-text' type='textfield' placeholder='Product HSN' style={{ width: "603px", border: '1px solid grey', marginLeft: '15px' }} /><br />
                        <select className='select-s' onChange={(e) => { setUnit(e.target.value) }}>Select store
                            <option>Select a unit type</option>
                            {
                                type.map(t => {
                                    return <option>{t}</option>
                                })
                            }
                        </select>
                       {unit && <select className='select-s' style={{ marginLeft: '24px' }}>
                            <option value="Unit">Select Unit</option>
                            {
                                utype[unit].map(ty => {
                                    return <option>{ty}</option>
                                })
                            }
                        </select>}

                        <h5 style={{ fontSize: '80%', marginLeft: '15px' }}>Please choose proper product Unit type and unit</h5>
                        <input type='text' style={{ borderRadius: '5px', height: '100px', width: '603px', border: '1px solid grey', marginLeft: '15px' }} placeholder='Description' />

                    </form>
                </div>
                <div class='col-md-6' >
                    <select className='select-s' style={{ marginLeft: '10%' }}>Select store
                        <option>Select Applied Taxes</option>
                    </select>
                    <button style={{ background: '#00ACFF', color: 'white', border: '1px solid #00ACFF', height: '40px', marginLeft: '10px', borderRadius: '5px' }}>Custom Tax</button><br />
                    <select className='select-store-right' style={{ marginTop: '10px', marginLeft: '10%', border: '1px solid grey' }} placeholder='Select a unit type'>Category
                        <option>Category</option>
                    </select><br />
                    <select className='select-store-right' style={{ marginTop: '10px', marginLeft: '10%' }} placeholder='Select a unit type'>
                        <option>SubCategory</option>
                    </select><br />
                    <select className='select-store-right' style={{ marginTop: '10px', marginLeft: '10%' }} placeholder='Select a unit type'>
                        <option>Select Product Distributors</option>
                    </select><br />
                    <h5 style={{ marginLeft: '10%', fontSize: '80%' }}>you have not define any distributors yet</h5>

                    <select className='select-store-right' style={{ marginLeft: '10%' }}>
                        <option>Select Product Manufacturer</option>
                    </select>
                    <h5 style={{ marginLeft: '10%', fontSize: '80%' }}>you have not define any Manufacturer yet</h5>
                    <button style={{ marginLeft: '10%', background: '#00ACFF', color: 'white', borderRadius: '5px', height: '50px', border: '1px solid #00ACFF', width: '150px' }}><i class="fa-solid fa-upload"></i>Upload Image</button>

                </div>

            </div >
            <h2 style={{ marginTop: '20px', marginLeft: '15px' }}>Variants and Pricing</h2><br />
            <p style={{ margin: '0', marginLeft: '15px' }}>Does this product come in multiple variations like color or size</p>
            <div className="scrollmenu">
                {/* <a href="#h">Variant Name</a><a href="#">Product</a><a href="#">Brand</a><a href="#">Category</a> <a href="#">Shade</a>
                <a href="#">UOM</a><a href="#">Rack No</a><a href="#">Group</a><a href="#">Selling Price</a><a href="#">MRP</a> <a href="#">Buying Price</a><a href="#">Discount</a> 
                <a href="#">Discount Type</a><a href="#">SKU</a><a href="#">UPC</a><a href="#">Current Quality</a>
                <a href="#">New Quality</a><a href="#">Threshold</a><hr /><br />
                <input type='text' /> */}
                <table>
                    
                <tr style={{ background: '#c5e3ec'}}>
                        <th style={{ border: '1px solid skyblue' ,width:'20px'}}>Variant Name</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Product</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Brand</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Category</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Shade</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>UOM</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Rack No</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Group</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Selling Price</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>MRP</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Buying Price</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Discount</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Discount Type</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>SKU</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>UPC</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Current Quality</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>New Quality</th>
                        <th style={{ border: '1px solid skyblue',width:'20px' }}>Threshold</th>
                    </tr>
                    <tbody >
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                               
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            style={{width:'100px'}}
                                            type="text"
                                            value={cell}
                                            onChange={(event) => handleCellChange(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={addrow} style={{ background: '#00ACFF', color: 'white', margin: '10px', height: '40px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-plus"></i>Add a New Row</button>
                <button style={{ background: '#00ACFF', color: 'white', margin: '10px', height: '40px', marginLeft: '70%', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-check"></i>Submit</button>
                <button style={{ background: '#00ACFF', color: 'white', height: '40px', margin: '10px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i class="fa-solid fa-circle-xmark"></i>Cancel</button>
            </div>

        </>

    )
}

