import React from 'react';
import satellite from '../../../assets/img/satellite.jpg';
import satelliteInner from '../../../assets/img/satellite-inner.jpg';
import moon from '../../../assets/img/moon.jpg';

export default function Carousel() {

    return (
        <div className="container my-4">
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
            

                <div className="controls-top">
                    <a className="btn-floating btn-prev" href="#multi-item-example" data-slide="prev">{`<`}</a>
                    <a className="btn-floating btn-next" href="#multi-item-example" data-slide="next">{`>`}</a>
                </div>

                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satelliteInner} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">International Space Station</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satellite} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My capsule</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={moon} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My moon</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satellite} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My capsule</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satelliteInner} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">International Space Station</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={moon} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My moon</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satellite} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My capsule</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={satelliteInner} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">International Space Station</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={moon} alt="Card" />
                                    <div className="card-body">
                                        <h4 className="card-title">My moon</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}