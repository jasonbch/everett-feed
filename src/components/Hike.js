import React from "react"

const Hike = props => (
        <div>
              <div className="row">
                <div className="col-xs-5 title-container1">
                
                    <div className="hike__info">
                        { props.error && <p className="hike__error">{ props.error }</p> }
                        { props.id && <p className="hike__key">
                            Showing subscriptions in 
                            <span className="hike__value"> { props.id }</span>

                            <p></p>
                            <p>
                                <div class="wrap">
                                    <div>
                                        <span className="text1">Public</span>
                                    </div>
                                    <div class="ui fitted toggle checkbox">
                                        <input type="checkbox" name ="public" className="text1" onChange={props.getPublic} readonly="" tabindex="" />
                                        <label></label>
                                    </div>
                                </div>
                            </p>

                            <p>
                                <div class="wrap">
                                    <div>
                                        <span className="text1">Safety</span>
                                    </div>
                                    <div class="ui fitted toggle checkbox">
                                        <input type="checkbox" name="safety" className="text1" onChange={props.getSafety} tabindex="" />
                                        <label></label>
                                    </div>
                                </div>
                            </p>

                            <p>
                                <div class="wrap">
                                    <div>
                                        <span className="text1">Weather</span>
                                    </div>
                                    <div class="ui fitted toggle checkbox">
                                        <input type="checkbox" name="weather" className="text1" onChange={props.getWeather} tabindex="" />
                                        <label></label>
                                    </div>
                                </div>
                            </p>

                            <p>
                                <div class="wrap">
                                    <div>
                                        <span className="text1">Emergency</span>
                                    </div>
                                    <div class="ui fitted toggle checkbox">
                                        <input type="checkbox" name="emergency" className="text1" onChange={props.getEmergency} tabindex="" />
                                        <label></label>
                                    </div>
                                </div>
                            </p>

                            <p>
                                <div class="wrap">
                                    <div>
                                        <span className="text1">Traffic</span>
                                    </div>
                                    <div class="ui fitted toggle checkbox">
                                        <input type="checkbox" name="traffic" className="text1" onChange={props.getTraffic} tabindex="" />
                                        <label></label>
                                    </div>
                                </div>
                            </p>

                            <p>Please enter your email:     
                            </p>
                           <p className="text">
                                <form onSubmit={props.subcribe}>
                                    <input type="text2" name="email" placeholder="first.last@example.com"/>
                                    <button>Subcribe</button>
                                </form>
                            </p>
                        </p>
                        }
                    </div>

                </div>
                <div className="col-xs-5 form-container1">

                <div className="hike__info">
                        { props.error && <p className="hike__error">{ props.error }</p> }
                        { props.id && <p className="para">
                            Welcome to Washington Feed! Enter your location to find a curated subscription list 
                            to your local news outlets. Toggle the category of news you would like to subscribe 
                            to then enter your email address and click the subscribe button. Thank you for using 
                            our services!
                            <p></p>
                        </p>
                        }
                    </div>

                </div>
              </div>
        </div>
)

export default Hike
