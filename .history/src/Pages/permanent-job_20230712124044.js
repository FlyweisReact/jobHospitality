/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const PermanentJob = () => {
  return (
    <>
      {" "}
      <div className="permanent-job">
        <Navbar />

        <div className="Banner AboutUs">
          <div className="content">
            <h2>Casual & Permanent Job</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Duis ut lectus pellentesque
              purus fermentum gravida. Integer accumsan feugiat diam, quis
              elementum arcu ultricies non. In odio ex, ultricies at urna eu,
              iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget
              dignissim urna. Sed at purus quis dolor lacinia consectetur
            </p>
          </div>
        </div>

        <div className="Register_Div">
          <div className="left_container">
            <h5>Register Online</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Register Here </button>
          </div>

          <div className="right_container">
            <img src="./Image/78.png" alt="" />
          </div>
        </div>


        <div className="Register_Div">
          <div className="left_container">
            <h5>Attend to Meet Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Register Here </button>
          </div>

          <div className="right_container second_container">
            <img src="./Image/79.png" alt="" />
          </div>
        </div>


        <Footer />
      </div>
    </>
  );
};

export default PermanentJob;
