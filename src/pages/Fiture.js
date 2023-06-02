import React from 'react'

const Fiture = () => {
    return (
        <div>
            {/* <!-- feature --> */}
            <div id="feature" class="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="titlepage">
                            <h2>Feature Of <strong class="pink"> Application </strong></h2>
                            <span>This app provides a place for event organizers and musicians to connect with each other. 
                                Event organizers can create an event that will be directly visible to musicians and 
                                event organizers can invite musicians or musicians can apply for an invitation to the event they want to attend. 
                                Users can see a list of recommendations such as event organizers, musicians and events that match the user's criteria.</span>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 offset-md-2 ">
                        <div class="feature_box ">
                            <figure><img src="images/feature_img.png" alt="#" /></figure>
                            {/* <a class="read_more" href="#">Read more</a> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- feature --> */}
        </div>
    )
}

export default Fiture
