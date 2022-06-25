import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9483/',
});
let Data=[];
const GetCategories = async() => {
await  api.get('/Category/Laptops')
    .then((response) => {
      let data = response.data;
      Data.push(data);
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });
}
GetCategories();
export default function Question(props) {
  return (
    <>
      <br /><br /><br />
      <h2 className='heading mt-1'>Ask Questions related to {props.category}</h2>
      <div className='col'>
        <div className='row-xxl-4 row-xl-4 row-lg-4 row-md-4 row-sm-4 row-4'>
          <form class="row gy-2 gx-3 align-items-center">
            <div className="w-100">
              <input type="text" class="form-control" placeholder="Enter your Name"/>
              <input type="text" class="form-control" placeholder="Enter your question...."/>

            </div>        
            <div class="col-auto">
              <button type="submit" class="btn button-33">POST</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn button-33">Answer This Question</button>
            </div>
          </form>
          <br/>
        </div>
        <div className='row-xxl-4 row-xl-4 row-lg-4 row-md-4 row-sm-4 row-4'>
          <form class="row gy-2 gx-3 align-items-center">
            <div className="w-100">
              <input type="text" class="form-control" placeholder="Enter your Name"/>
              <input type="text" class="form-control" placeholder="Enter your question...."/>
            </div>        
            <div class="col-auto">
              <button type="submit" class="btn button-33">POST</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn button-33">Answer This Question</button>
            </div>
          </form>
          <br/>
        </div>
        <div className='row-xxl-4 row-xl-4 row-lg-4 row-md-4 row-sm-4 row-4'>
          <form class="row gy-2 gx-3 align-items-center">
            <div className="w-100">
              <input type="text" class="form-control" placeholder="Enter your Name"/>
              <input type="text" class="form-control" placeholder="Enter your question...."/>

            </div>        
            <div class="col-auto">
              <button type="submit" class="btn button-33">POST</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn button-33">Answer This Question</button>
            </div>
          </form>
          <br/>
        </div>
        <div className='row-xxl-4 row-xl-4 row-lg-4 row-md-4 row-sm-4 row-4'>
          <form class="row gy-2 gx-3 align-items-center">
            <div className="w-100">
              <input type="text" class="form-control" placeholder="Enter your Name"/>
              <input type="text" class="form-control" placeholder="Enter your question...."/>

            </div>        
            <div class="col-auto">
              <button type="submit" class="btn button-33">POST</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn button-33">Answer This Question</button>
            </div>
          </form>
          <br/>
        </div>
        <div className='row-xxl-4 row-xl-4 row-lg-4 row-md-4 row-sm-4 row-4'>
          <form class="row gy-2 gx-3 align-items-center">
            <div className="w-100">
              <input type="text" class="form-control" placeholder="Enter your Name"/>
              <input type="text" class="form-control" placeholder="Enter your question...."/>

            </div>        
            <div class="col-auto">
              <button type="submit" class="btn button-33">POST</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn button-33">Answer This Question</button>
            </div>
          </form>
          <br/>
        </div>
      </div>

    </>
  )
}
