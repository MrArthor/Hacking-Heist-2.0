import React, {  } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import Science from "../assets/images/Science.jpg"
import culture from "../assets/images/culture.jpg"
import career from "../assets/images/career.jpg"
import fashion from "../assets/images/fashion.jpg"
import politics from "../assets/images/politics.png"

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
    // const categories = useState(Data);
    return (
        <>
            <br/><br/><br/>
            <h2 className='heading mt-2'>Categories</h2>
            <div className='col'>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={Science} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Science</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Science" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={politics} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Politics</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Politics" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div><div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={culture} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Culture and Trends</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Culture&Trends" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={fashion} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Fashion</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Fashion" className="btn button-33">Ask Question</Link>
                            </div>
                    </div>
                </div>
                <div className='row-xxl-1 row-xl-1 row-lg-1 row-md-1 row-sm-1 row-1'>
                    <div className="card">
                        <img src={career} className="card-img-top image" alt="..."/>
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
