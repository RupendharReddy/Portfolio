import { Typography, Carousel } from "antd";
const { Title } = Typography;
import wipro from '../assets/Resume based Certificates/wipro1.jpg'
import css from '../assets/Resume based Certificates/css.png'
import PracticalWeb from '../assets/Resume based Certificates/PracticalWebDevelopment.jpg'
import python_NPTEL from '../assets/Resume based Certificates/python_NPTEL.png'
import python_basic from '../assets/Resume based Certificates/python-basic.png'
import ProblemSolving from '../assets/Resume based Certificates/ProblemSolving.png'
import programming_in_java from '../assets/Resume based Certificates/programming_in_java.jpeg'

import "../styles/certificates.css";
import { Fragment } from "react";

// Google Drive embed links
// const certificateEmbeds = [
//   "https://drive.google.com/file/d/1L7YIOgueI5dDz19U-0hIxnhxPwVKf2Qd/preview",
//   "https://drive.google.com/file/d/1TgAGjLV56P07R41XcJpdtTxjv9DKLXcj/preview",
//   "https://drive.google.com/file/d/19mckzPPHGV8VSZ4MXXRQHzI3bLK0WrTo/preview",
//   "https://drive.google.com/file/d/1ppdnW7ewCg6IWf5njHPla1OdlDpKTpq5/preview",
//   "https://drive.google.com/file/d/16AQ97TrPGsWDYrmGPUt-RFqgg_MO65CQ/preview",
//   "https://drive.google.com/file/d/1m0GMDByUApDMaQwsEonBe1_VsPDByBo3/preview",
//   "https://drive.google.com/file/d/1a_macHqd8_HCwtNdliyvIpcoNaWTTXPp/preview",
//   "https://drive.google.com/file/d/1em8ZiQWs7C60DasT-mPMj_Y7iAiWPGWe/preview",
//   "https://drive.google.com/file/d/11FMblN9rKk-Iau0cVXyuk0EYYx15b4ON/preview",
//   "https://drive.google.com/file/d/1TrHiiAkKJ8PwXqCVC8MIFCjANz32sOVw/preview",
//   "https://drive.google.com/file/d/1BnAxXXjpi64GjJMOuK1QR42RQ-XI1333/preview",
// ];
const certificateEmbeds = [
  wipro,
  css,
  python_NPTEL,
  PracticalWeb,
  python_basic,
  ProblemSolving,
  programming_in_java
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h1 className="outlined-text-project">CERTIFICATES</h1>
      <h1 className="title">
        <b>- </b>MY CERTIFICATES <b>-</b>
      </h1>

      <Carousel autoplay dots style={{width:"50"}}>
        {certificateEmbeds.map((link, index) => (
          <div key={index} className="certificate-slide">
            {/* <img src={link} alt="certificates"/> */}
            {index==0?
              <img
              src={link}
              title={`Certificate ${index + 1}`}
              className="certificate-iframe"
              allow="autoplay"
              frameBorder="0"
              loading="lazy"
              style={{paddingLeft:"27%",borderRadius:"0px"}}
              />:
              <img
                src={link}
                title={`Certificate ${index + 1}`}
                className="certificate-iframe"
                allow="autoplay"
                frameBorder="0"
                loading="lazy"
              />
            }
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Certificates;
