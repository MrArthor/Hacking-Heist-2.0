import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


import banner4 from "../assets/images/banner4.jpg"
import banner5 from "../assets/images/banner5.jpg"
import banner6 from "../assets/images/banner6.jpg"
import banner7 from "../assets/images/banner7.jpg"
import banner8 from "../assets/images/banner8.jpg"
import "../assets/style/style.css"
const api = axios.create({
    baseURL: 'http://localhost:9483/',
});
let Data=[];
const GetCategories = async() => {
  await  api.get('/Categories')
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

console.log(Data);



export default function Categories() {
    const categories = useState(Data);
    return (
        <>
            <br/><br/><br/>
            <h2 className='heading mt-2'>Categories</h2>
            <div className='col'>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner4} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Science</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Science" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner5} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Politics</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Politics" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div><div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner6} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Culture and Trends</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Culture&Trends" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner7} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Fashion</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Fashion" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner8} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Career</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Career" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
