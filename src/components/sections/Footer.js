import React from 'react';

const Footer = () => {


    return(
        <footer class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-6">
                <a href="#">
                    <img src="img/logo.svg" />
                </a>
                <p class="max-290">
                    Our vision is to provide convenience and help increase your sales business.
                </p>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                <h4>About</h4>
                <ul>
                    <li><a href="#">How it works</a>
                    </li>
                    <li><a href="#">Featured</a>
                    </li>
                    <li><a href="#">Partenrship</a>
                    </li>
                    <li><a href="#">Business Relation</a>
                    </li>
                </ul>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                <h4>Community</h4>
                <ul>
                    <li><a href="#">Events</a>
                    </li>
                    <li><a href="#">Blog</a>
                    </li>
                    <li><a href="#">Podcast</a>
                    </li>
                    <li><a href="#">Invite a friend</a>
                    </li>
                </ul>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                <h4>Socials</h4>
                <ul>
                    <li><a target="_blank" href="#">Discord</a>
                    </li>
                    <li><a target="_blank" href="#">Instagram</a>
                    </li>
                    <li><a target="_blank" href="#">Twitter</a>
                    </li>
                    <li><a target="_blank" href="https://facebook.com" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
                </div>
                <div class="col-12">
                <p class="border-bottom py-3 mt-3 mb-4"></p>
                </div>
            </div>
            <div class="row copyright">
                <div class="col-md-6 text-center text-md-start">
                <p>©2022 MORENT. All rights reserved</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                <p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">
                    Terms &amp; Condition
                    </a>
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;