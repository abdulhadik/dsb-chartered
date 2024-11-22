import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddEvent.css"; // Ensure to import your CSS styles

function AddEvent() {
  const [upcomingEvent, setUpcomingEvent] = useState({
    title: "",
    day: "",
    date: "",
    times: { UAE: "", KSA: "", IND: "" },
    link: "",
  });

  const [completedEvent, setCompletedEvent] = useState({
    title: "",
    day: "",
    date: "",
    times: { UAE: "", KSA: "", IND: "" },
    link: "",
  });

  const [upcomingEventsList, setUpcomingEventsList] = useState([]);
  const [completedEventsList, setCompletedEventsList] = useState([]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
        setUpcomingEventsList(response.data);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      }
    };

    const fetchCompletedEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events1`);
        setCompletedEventsList(response.data);
      } catch (error) {
        console.error("Error fetching completed events:", error);
      }
    };

    fetchUpcomingEvents();
    fetchCompletedEvents();
  }, []);

  const handleUpcomingChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("times.")) {
      const timeZone = name.split(".")[1];
      setUpcomingEvent((prev) => ({
        ...prev,
        times: {
          ...prev.times,
          [timeZone]: value,
        },
      }));
    } else {
      setUpcomingEvent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCompletedChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("times.")) {
      const timeZone = name.split(".")[1];
      setCompletedEvent((prev) => ({
        ...prev,
        times: {
          ...prev.times,
          [timeZone]: value,
        },
      }));
    } else {
      setCompletedEvent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpcomingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/events`, upcomingEvent);
      setUpcomingEventsList((prev) => [...prev, response.data]);
      alert("Upcoming Event added successfully");
      setUpcomingEvent({ title: "", day: "", date: "", times: { UAE: "", KSA: "", IND: "" }, link: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompletedSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/events1`, completedEvent);
      setCompletedEventsList((prev) => [...prev, response.data]);
      alert("Completed Event added successfully");
      setCompletedEvent({ title: "", day: "", date: "", times: { UAE: "", KSA: "", IND: "" }, link: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpcomingDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/events/${id}`);
      setUpcomingEventsList((prev) => prev.filter((evt) => evt._id !== id));
      alert("Upcoming Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleCompletedDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/events1/${id}`);
      setCompletedEventsList((prev) => prev.filter((evt) => evt._id !== id));
      alert("Completed Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div>
      {/* Upcoming Events Form */}
      <div className="add-event-container">
        <h2>Add Upcoming Event</h2>
        <form onSubmit={handleUpcomingSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={upcomingEvent.title}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={upcomingEvent.day}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="date"
            name="date"
            value={upcomingEvent.date}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="text"
            name="times.UAE"
            placeholder="UAE Time"
            value={upcomingEvent.times.UAE}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="text"
            name="times.KSA"
            placeholder="KSA Time"
            value={upcomingEvent.times.KSA}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="text"
            name="times.IND"
            placeholder="IND Time"
            value={upcomingEvent.times.IND}
            onChange={handleUpcomingChange}
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Registration Form Link"
            value={upcomingEvent.link}
            onChange={handleUpcomingChange}
            required
          />
          <button type="submit">Add Upcoming Event</button>
        </form>

        <h3 className="AddedUpcomingEvents">Added Upcoming Events</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEventsList
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((evt, index) => (
                <tr key={evt._id}>
                  <td>{index + 1}</td>
                  <td>{evt.title}</td>
                  <td>
                    <button onClick={() => handleUpcomingDelete(evt._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Completed Events Form */}
      <div className="add-event-container">
        <h2>Add Completed Event</h2>
        <form onSubmit={handleCompletedSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={completedEvent.title}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={completedEvent.day}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="date"
            name="date"
            value={completedEvent.date}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="text"
            name="times.UAE"
            placeholder="UAE Time"
            value={completedEvent.times.UAE}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="text"
            name="times.KSA"
            placeholder="KSA Time"
            value={completedEvent.times.KSA}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="text"
            name="times.IND"
            placeholder="IND Time"
            value={completedEvent.times.IND}
            onChange={handleCompletedChange}
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Video Link"
            value={completedEvent.link}
            onChange={handleCompletedChange}
            required
          />
          <button type="submit">Add Completed Event</button>
        </form>

        <h3 className="AddedCompletedEvents">Added Completed Events</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {completedEventsList
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((evt, index) => (
                <tr key={evt._id}>
                  <td>{index + 1}</td>
                  <td>{evt.title}</td>
                  <td>
                    <button onClick={() => handleCompletedDelete(evt._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddEvent;
