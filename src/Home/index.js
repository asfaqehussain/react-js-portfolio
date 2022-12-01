import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <div class="nav-container">
                <div class="navbar">
                    <div class="nav-left">
                        <h1 class="headerMain">Portfolio</h1>
                    </div>
                    <div class="nav-right">
                        <ul class="tab">
                            <li class="list-items">Home</li>
                            <li class="list-items">Experience</li>
                            <li class="list-items">Achivements</li>
                            <li class="list-items">Testimonials</li>
                            <li class="list-items">Blogs</li>
                            <li class="list-items">Contact</li>
                        </ul>
                    </div>
                    <input class="nav-search" type="text" placeholder="search" />
                </div>
            </div>
            <div class="container">
                <div class="self-detail">
                    <div>
                        <div class="name">
                            <h1>Tannu shakya</h1>
                        </div>
                        <div class="media-container">
                            <h2>Developer</h2>
                            <div class="media">
                                <i class="fa-solid fa-user"></i>

                                <i class="fa-brands fa-github-square"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-github"></i>
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img
                            class="Portfolio-image"
                            src="/images/avatar.png"
                            alt="Italian Trulli"
                            width="300px"
                            height="300px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
