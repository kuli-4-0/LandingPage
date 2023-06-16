import React from 'react'

const Header = () => {
    return (
        <div>
            {/* <!-- header --> */}
            <header>
                {/* <!-- header inner --> */}
                <div class="head_top">
                    <div class="header">
                        <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                    <div class="logo">
                                        <a href="index.html"><img src="images/logo.png" alt="#" className="round" width="65" /></a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarsExample04">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#feature">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contact">Contact us</a>
                                        </li>
                                    </ul>
                                    <div class="sign_btn"><a href="https://frontend-brcxr6bfxq-uc.a.run.app/login">Sign in</a></div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <!-- end header inner -->
                    <!-- end header -->
                    <!-- banner --> */}
                    <section class="banner_main">
                        <div class="container-fluid">
                        <div class="banner_bg">
                            <div class="row d_flex">
                                <div class="col-xl-6 col-lg-6 col-md-12 padding_right1">
                                    <div class="text_box_color">
                                    <div class="text-bg">
                                        <h1>Elise</h1>
                                        <strong>An application for </strong>
                                        <span>Event Organizer and Musician</span>
                                        <a href="https://frontend-brcxr6bfxq-uc.a.run.app/login">Sign In Now</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 padding_right1">
                                    <div class="text-img">
                                    <figure><img src="images/top_img.png" alt="#" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default Header
