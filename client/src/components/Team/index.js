import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet Our Team 
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Anticipate was founded by Miriam Duverge and Kimberly Suares, while they were students at Columbia University's Coding engineering bootcamp. 
            Both Kimberly and Miriam have a background working in a hospital, and that's what inspired them to come up with this app. 
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src="Kimberly.JPG"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Kimbery Suares"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Kimberly Suares</h5>
              <p className="text-uppercase blue-text">Full Stack Web Developer</p>
              <p className="grey-text">
                
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Miriam Duverge"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Miriam Duverge</h5>
              <p className="text-uppercase blue-text">Full Stack Web Developer</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;