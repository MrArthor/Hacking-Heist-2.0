import React from 'react'
import { Link } from 'react-router-dom'

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
