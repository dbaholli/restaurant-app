import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "../../src/App.css";
import Header from "../components/Header";
import AddAnnouncement from "../components/AddAnnouncement";
import AnnouncementList from "../components/AnnouncementList";

function Notifications() {
  const LOCAL_STORAGE_KEY = "announcements";
  const [announcements, setAnnouncements] = useState([]);

  const addAnnouncementHandler = (announcement) => {
    console.log(announcement);
    setAnnouncements([...announcements, { id: uuid(), ... announcement}]);
  };

  const removeAnnouncementHandler = (id) => {
    const newAnnouncementList = announcements.filter((announcement) => {
      return announcement.id !== id;
    });

    setAnnouncements(newAnnouncementList);
  };

  useEffect(() => {
    const retriveAnnouncements = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveAnnouncements) setAnnouncements(retriveAnnouncements);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(announcements));
  }, [announcements]);

  return (
    <div className="ui container">
      <Header />
      <AddAnnouncement addAnnouncementHandler = {addAnnouncementHandler} />
      <AnnouncementList announcements= {announcements} getAnnouncementId={removeAnnouncementHandler} />
    </div>
  );
}

export default Notifications;