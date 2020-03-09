import React, { } from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import homePeople from '../assets/images/home_people.png';

const HomePage = ({children}) => {
  return (
    <div className="home">
      <section class="pt-4 pt-md-11">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-5 col-lg-6 order-md-2">
              <img src={homePeople} class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100" />
            </div>
            <div class="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate">
              <h1 class="display-3 text-center text-md-left">
                Welcome to <span class="text-primary">Boomarky</span>. <br />
                Bookmark everything.
              </h1>
              <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                Bookmark interesting websites. The SEO information will be extracted from those websites in order to bookmark it easily.
              </p>
              <div class="text-center text-md-left">
                <Link to={Routes.AUTH_SIGN_IN} class="btn btn-primary shadow lift mr-1">
                  Sign In <i class="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </Link>
                <a href="https://github.com/gdmgent-1920-mobdev2/react-bookmarks" class="btn btn-primary-soft lift" target="_blank">
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;