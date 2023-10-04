import React, { useState } from 'react';

export default function LocPurReq1() {
 
  const docs = ["opt1", "opt2"];

  const docs1 = ["opt1", "opt2", "opt3"];

  const docs2 = ["opt1", "opt2", "opt3", "opt4"];

  const [tableData, setTableData] = useState([
    ["1", "Item 1", "Description 1", "Unit 1", "10", "Remarks 1", "0.00", "0.00", "0.00"],
    ["2", "Item 2", "Description 2", "Unit 2", "20", "Remarks 2", "0.00", "0.00", "0.00"],
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleAddRow = () => {
    const newRow = ["", "", "", "", "", "", "", "", ""];
    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = () => {
    if (selectedRows.length === 0) {
      // No rows selected, delete the last row
      const updatedData = [...tableData];
      updatedData.pop();
      setTableData(updatedData);
    } else {
      // Rows are selected, remove selected rows
      const updatedData = tableData.filter((_, index) => !selectedRows.includes(index));
      setTableData(updatedData);
    }
    setSelectedRows([]);
  };

  const handleCheckboxChange = (rowIndex) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const handleCellChange = (event, rowIndex, colIndex) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = event.target.value;
    setTableData(updatedData);
  };


  return (

    <div className="row border">

      <div className="col-2  border"></div>

      <div className="col-5">
        <br />
        <p className='mt-3 fw-bold' style={{ marginLeft: '' }}>LOCAL PURCHASES QUOTATIONS</p>
          <br />
        <hr style={{ marginTop: '-15px' }} />

        <span style={{ marginLeft: '' }}>Document No.</span>
        <select className='w-75' style={{ marginLeft: '35px' }}>
          <option value=""></option>
          {docs.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}

        </select>
        <br />
        <br />
        <span style={{ marginLeft: '' }}>Vendor Account</span>
        <select className='w-75 ' style={{ marginLeft: '25px' }}>
          <option value=""></option>
          {docs1.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
          
            <span style={{ marginLeft: '' }}>Department </span>
        <select className='w-75 ' style={{ marginLeft: '49px' }}>
          <option value=""></option>
          {docs1.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <span style={{ marginLeft: '' }}>Req Date</span>
        <input type="date" className='w-75' style={{ marginLeft: '73px' }} />
        <br /><br />
        <span style={{ marginLeft: '' }}>RFQ Date</span>
        <input type="date" className='w-75' style={{ marginLeft: '71px' }} />

        <br /><br />
        <span style={{ marginLeft: '' }}>Narration</span>
        <input type="text" className='w-75' style={{ marginLeft: '72px' }} />

        <br /> <br /> <br />
       
      </div>

      <div className="col-5">
        <br />
        <br />
        <hr style={{ marginTop: '41px', marginLeft: '-24px' }} />
        <span style={{ marginLeft: '', marginTop: '' }}>Date:</span>
        <input type="date" className='w-75' style={{ marginLeft: '70px' }} />
        <br /> <br />
        <span style={{ marginLeft: '' }}>Cost Center</span>
        <select className='w-75 ' style={{ marginLeft: '24px' }}>
          <option value=""></option>
          {docs2.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <span style={{ marginLeft: '' }}>Req No</span>
        <input type="text" className='w-75' style={{ marginLeft: '54px' }} />
        <br />
        <br />
        <span style={{ marginLeft: '' }}>RFQ No</span>
        <input type="text" className='w-75' style={{ marginLeft: '52px' }} />
        <br />
        <br />
        <span style={{ marginLeft: '' }}>Attachment</span>
        <input type="text" className='w-75' style={{ marginLeft: '25px' }} />
        <br /> <br /> <br />


<input type="sumit" value={'+'} className='fw-bold ' style={{ alignItems:'center', justifyContent:'center', background:'#e6f7ff', border:'none', color:'#00acff',fontSize:'20px', marginLeft:'495px' , width:'30px', marginTop:'10px', paddingLeft:'10px', fontSize:'30px'}} onClick={handleAddRow} />
          {/* <button >+</button> */}
          <input type='submit' value={' - '} className='fw-bold' style={{fontSize:'30px', background:'#e6f7ff', border:'none', marginBottom:'10px', marginLeft:'10px', width:'30px', color:'red'}} onClick={handleRemoveRow} />
    

        <table className='table' style={{  width:'1200px', marginLeft:'-630px' }}>
        
          <thead>
            <tr className='border'>
              <th className='border' style={{background:'#e6f7ff'}}>Select</th>
              <th className='border ' style={{background:'#e6f7ff'}}>S.No.</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Product</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Description</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Units</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Quantity</th>
              <th className='border ' style={{background:'#e6f7ff'}}>L-Request For <br /> Quote - Local</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Rate</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Gross</th>
              <th className='border ' style={{background:'#e6f7ff'}}>Discount</th>

            </tr>
          </thead>
          <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  style={{ border: 'none' }}
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </td>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
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
        <br />

        <p className='border' style={{marginLeft:'-620px', width:'1190px'}}>Net:</p>
        <button style={{ background: '#00ACFF', color: 'white',  height: '40px', marginTop:'15px', marginLeft: '390px',border:'5px solid #00ACFF',borderRadius:'5px' }}><i className="fa-solid fa-check"></i> Submit</button>
                <button style={{ background: '#00ACFF', color: 'white', height: '40px', margin: '10px',border:'5px solid #00ACFF',borderRadius:'5px' }}><i className="fa-solid fa-circle-xmark"></i> Cancel</button>

        

        
          
      </div>
    </div>
  );
}