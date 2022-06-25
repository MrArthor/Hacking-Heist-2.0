import React from 'react'
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import Prateek from "../assets/images/Prateek.jpeg"
import Vansh from "../assets/images/Vansh.jpeg"
import Ishita from "../assets/images/ishita.jpeg"

export default function Home() {
    return (
        <>
            <br /><br /><br />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} height="700px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} height="700px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} height="700px" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <div className='row'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-'>
                    <div class="card">
                        <img src={Vansh} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Vansh Sachdeva</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn heading w-100">Linkedin</a>
                            <br /><br />
                            <a href="#" class="btn heading w-100">GitHub</a>

                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                    <div class="card">
                        <img src={Prateek} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Prateek Kanojia</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn heading w-100">Linkedin</a>
                            <br /><br />
                            <a href="#" class="btn heading w-100">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                    <div class="card">
                        <img src={Ishita} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Ishita Singh</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn heading w-100">Linkedin</a>
                            <br /><br />
                            <a href="#" class="btn heading w-100">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
