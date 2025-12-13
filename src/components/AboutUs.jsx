// components/AboutUs.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RotatingCircle from "./RotatingCircle";
import BackButton from "./BackButton";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <RotatingCircle />
      <Navbar />

      <div className="app-container about-us-container">
        <h2>About Us</h2>
        <article>
          <p>
            Welcome to the hub of information at MIT, the student-run media body
            that brings campus life to your fingertips. The MIT Post is your
            go-to source for everything happening in and around college. From
            event highlights and campus updates to fun features and
            conversations with inspiring personalities, we keep the entire
            community in the loop. But we’re more than just news. The MIT Post
            is a space where creativity thrives. Our comic strips, weekly
            editorials, designs, and artwork showcase the talent and imagination
            that make our campus unique.
          </p>
        </article>
      </div>
      <BackButton />
      <Footer />
    </>
  );
};

export default AboutUs;
