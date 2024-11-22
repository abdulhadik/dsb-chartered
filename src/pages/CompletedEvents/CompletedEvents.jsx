import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CompletedEvents.css";
import calender from "../../images/svg-icons/calender.svg";
import dollar from "../../images/svg-icons/dollar.svg";
import clock from "../../images/svg-icons/clock.svg";
import webinarImg from "../../images/webinarImg.png";

export default function CompletedEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events1`);
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, []);


  return (
    <div>
      <div className="upcoming-events-heading">
        <br />
        <br />
        <h2>Completed Events & Webinars</h2>
        <br />
        <br />
      </div>
      <div className="upcoming-webinars-container">
        {upcomingEvents.map((event) => (
          <div className="card-webinar" key={event._id}>
            <div className="card-webinar-caption">
              <h6>COMPLETED WEBINAR</h6>
            </div>
            <div className="webinar-heading">
              <p>An Analytical approach to</p>
              <h4>{event.title}</h4>
            </div>
            <div className="webinar-details">
              <div className="webinar-details-left">
                <div className="webinar-details webinar-date">
                  <img src={calender} alt="calendar" />
                  <div className="webinar-date">
                     <p>{event.day}</p>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="webinar-details webinar-time">
                  <img src={clock} alt="clock" />
                  <div>
                  <p>UAE:{event.times.UAE}</p>
                  <p>KSA:{event.times.KSA}</p>
                  <p>IND:{event.times.IND}</p>
                </div>
                </div>
                <div className="webinar-details webinar-caption">
                  <img src={dollar} alt="dollar" />
                  <p>Open For Learning Minds</p>
                </div>
                <a
                  href={event.link}
                  className="button"
                  style={{ "--clr": "#7808d0" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="6"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="6"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Watch Now
                </a>
              </div>
              <div className="webinar-details-right">
                <img src={webinarImg} alt="webinar" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
