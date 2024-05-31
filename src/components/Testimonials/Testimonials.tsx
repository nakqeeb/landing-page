import React from "react";
import "./Testimonials.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import man1 from "../../assets/images/man1.webp";
import man2 from "../../assets/images/man5.webp";
import man3 from "../../assets/images/man3.jpg";
import Rating from "../../shared/components/UIElements/Rating";

function Testimonials() {
  return (
    <div className="testimonials">
      <HeadingTitle
        title="Real Stories from Satisfied Customers"
        description="See how our landing page ui kit is making an impact."
      />
      <div className="container">
        <div className="card">
          <div className="review-info">
            <img src={man1} alt="" />
            <p className="h-xs name">John M.</p>
            <p className="b-s job">UX Designer @Brello</p>
          </div>
          <div className="review-rating">
            <p className="b-m review">
              "I was looking for a way to streamline my design process and the
              Anima’s Landing Page UI Kit was a lifesaver! The intuitive design
              and ease of customisation have saved me hours of time and effort.
              Highly recommend!"
            </p>
            <div className="rating">
              <Rating rateCount={4} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="review-info">
            <img src={man2} alt="" />
            <p className="h-xs name">Michael L.</p>
            <p className="b-s job">Creative Director @Yo</p>
          </div>

          <div className="review-rating">

            <p className="b-m review">
              “The Landing Page UI Kit has been a game changer for my agency.
              The pre-designed components and templates have helped us deliver
              projects faster and with more consistency. Great job!"
            </p>
            <div className="rating">
              <Rating rateCount={5} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="review-info">
            <img src={man3} alt="" />
            <p className="h-xs name">Sam K.</p>
            <p className="b-s job">UI Designer @Boo</p>
          </div>

          <div className="review-rating">
            <p className="b-m review">
              "Anima’s Landing Page UI Kit has become a staple in my design
              toolkit. Whether I'm working on a new project or need to make
              updates to an existing one, this kit has everything I need to get
              the job done quickly and efficiently."
            </p>
            <div className="rating">
              <Rating rateCount={5} />
            </div></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
