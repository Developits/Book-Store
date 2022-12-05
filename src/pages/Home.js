import React from "react";
import { Link } from "react-router-dom";
import BookBanner from "../assets/BookBanner.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${BookBanner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to the Online Library
          </h1>
          <p className="mb-5">
            A service dedicated to students of the University of London's
            Distance learning community. We provide online resources,
            professional support and guidance to all our students whenever, and
            from wherever they have chosen to study.
          </p>
          <Link to="/showbooks">
            <button className="btn btn-primary">Goto Library</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
