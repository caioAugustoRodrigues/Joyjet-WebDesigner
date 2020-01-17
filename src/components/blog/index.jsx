import React from 'react';
import satellite from '../../assets/img/satellite.jpg';
import satelliteInner from '../../assets/img/satellite-inner.jpg';
import moon from '../../assets/img/moon.jpg';

export default function Blog() {
    return (
        <section className="blog">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>

                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <img className="card-img-top" src={satelliteInner} alt="Card image cap" />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="card-text">
                                        <h1>International Space Station</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card">
                                <img className="card-img-top" src={satellite} alt="Card image cap" />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="card-text">
                                        <h1>My capsule</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card">
                                <img className="card-img-top" src={moon} alt="Card image cap" />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="card-text">
                                        <h1>My Moon</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    )
}