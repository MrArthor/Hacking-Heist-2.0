import React from 'react'
import { Link } from 'react-router-dom'

import banner4 from "../assets/images/banner4.jpg"
import banner5 from "../assets/images/banner5.jpg"
import banner6 from "../assets/images/banner6.jpg"
import banner7 from "../assets/images/banner7.jpg"
import banner8 from "../assets/images/banner8.jpg"
import "../assets/style/style.css"


export default function Categories() {
    return (
        <>
            <br/><br/><br/>
            <h2 className='heading mt-2'>Categories</h2>
            <div className='col'>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={banner4} className="card-img-top image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Science</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Science" class="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div class="card">
                        <img src={banner5} class="card-img-top image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Politics</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Politics" class="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div><div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div class="card">
                        <img src={banner6} class="card-img-top image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Culture and Trends</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Culture&Trends" class="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div class="card">
                        <img src={banner7} class="card-img-top image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Fashion</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Fashion" class="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div class="card">
                        <img src={banner8} class="card-img-top image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Career</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Career" class="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
