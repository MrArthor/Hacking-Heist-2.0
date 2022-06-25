import React from 'react'

export default function Question(props) {
  return (
    <>
      <br /><br /><br />
      <h2 className='heading mt-1'>Ask Questions related to {props.category}</h2>
      <div className='col'>
        <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
          <div class="card">
            <h5 class="card-header">Name of the person</h5>
            <div class="card-body">
              <p class="card-text">Question</p>
              <a href="#" class="btn heading p-2">POST</a>
            </div>
          </div>
        </div>
        <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
          <div class="card">
            <h5 class="card-header">Name of the person</h5>
            <div class="card-body">
              <p class="card-text">Question</p>
              <a href="#" class="btn heading p-2">POST</a>
            </div>
          </div>
        </div>
        <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
          <div class="card">
            <h5 class="card-header">Name of the person</h5>
            <div class="card-body">
              <p class="card-text">Question</p>
              <a href="#" class="btn heading p-2">POST</a>
            </div>
          </div>
        </div>
        <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
          <div class="card">
            <h5 class="card-header">Name of the person</h5>
            <div class="card-body">
              <p class="card-text">Question</p>
              <a href="#" class="btn heading p-2">POST</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
