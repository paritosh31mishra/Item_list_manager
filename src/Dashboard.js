import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Itemlist = () => {
  const [items, additem] = useState([]);
  let [newItem, pickitem] = useState("");
  

  const save = () => {
    
    if( newItem == "")
    {
      toast("Please wait Processing....");
         alert("Please Add Item");
    } 
    else 
    {
      additem((prevItems) => [...prevItems, newItem]);
          toast("Sucessfully Added !! ");
      pickitem("");
        
     }
    
  }

  return (
    <div className="container mt-5 ">
      <ToastContainer />
      <div className="row">
        <div className="col-lg-12 text-center pb-3">
          <h1 className="text-dark">
             Item List 
          </h1>
       </div>

       <div className="col-lg-12 text-center pb-3">
       <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Render each item in a <li>
        ))}
      </ul>
       </div>
       
       
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
           <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Item"
                      onChange={(obj) => pickitem(obj.target.value)  } value={newItem}
            />
        </div>
        <div className="col-lg-4"></div>
        </div>

        <div className="row pt-4 text-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <button className="btn btn-success " onClick={save}>
                      Add Item
          </button>
        </div>
        <div className="col-lg-2"></div>
        </div>
          
      </div>
       
  );
};

export default Itemlist;
