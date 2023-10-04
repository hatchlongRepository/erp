import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';

export default function ProductCodeList() {
  return (
    <>
         <div className='row'>
                <div className='col-3 '>
                    <Slide />
                </div>
                <div className='col-9 mt-5'>
                    <div className='' style={{marginLeft:'30px'}}>
                        <h3 className=''>Inventory<span className='fs-5 text-muted'>/PRODUCT CODE LIST</span></h3>
                        <hr />
                        <Box sx={{ '& button': { m: 0.3 } }}>


                            <div style={{ marginTop: '30px' }}>
                                <Link to='/procode'><Button variant="contained" style={{ background: '#00ACFF', fontSize: '12px' }} size="small"> Add Product Code </Button></Link>
                                <Button variant='contained' size='small ' style={{ background: '#EE4B2B', height: '30px', fontSize: '12px' }}><i class="fa-solid fa-trash"></i>Delete Selected Product</Button>
                                <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', width: 'auto', height: '30px' }}><i class="fa-solid fa-arrows-rotate"></i></Button>
                            </div>
                            <div className='row' style={{ marginTop: '30px' }}>
                                <div className='col-sm-4'>

                                </div>
                                <div className='col-sm-8' style={{ marginLeft: '-250px' }}>
                                    <select style={{ width: '150px', fontSize: '14px', height: '30px', marginTop: '3px', borderRadius: '5px' }}>Select store
                                        <option>Product Code</option>
                                    </select>
                                    <select style={{ width: '150px', fontSize: '14px', height: '30px', margin: '3px', borderRadius: '5px' }}>Select store
                                        <option>Status</option>
                                    </select>

                                    <input type="text" name="" id="" placeholder='Search...' style={{ width: '250px', fontSize: '14px', marginTop: '0', height: '30px', borderRadius: '5px', border: '1px solid grey', margin: '4px' }} />

                                    <Button variant='outlined' size="small" style={{ fontSize: '12px', height: '30px', color: 'black', border: '1px solid black' }}><i className="fa-solid fa-magnifying-glass"></i> Go </Button>

                                    <table style={{ width: '900px' }}>
                                        <tr style={{ background: '#FAFAFA' }}>
                                            <th>S.No.</th>
                                            <th>Product Class</th>
                                            <th>UOM</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Company</th>
                                            <th>Brand</th>
                                            <th><input type="checkbox" name="" id="" />Select All</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                            <td>prof</td>
                                            <td>dis</td>
                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i> </span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                            <td>prof</td>
                                            <td>dis</td>
                                            <td><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>Headquarters</td>
                                            <td>Deserts(Beverages)</td>
                                            <td>VAT</td>
                                             <td>prof</td>
                                            <td>dis</td>

                                            <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                            <td><input type="checkbox" name="" id="" /></td>

                                        </tr>
                                    </table>
                                    <div style={{ marginLeft: '50%', marginTop: '20px' }}>
                                        1-10<Button variant='outlined' >Next<i class="fa-solid fa-chevron-right"></i></Button>
                                    </div>

                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
    </>
  )
}
