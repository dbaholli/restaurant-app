import React from "react";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementList = (props) => {
  console.log(props);

  const deleteAnnouncementHandler = (id) => {
    props.getAnnouncementId(id);
  };
  const renderAnnouncementList = props.announcements.map((announcement) => {
    return (
      <AnnouncementCard
      announcement={announcement}
        clickHander={deleteAnnouncementHandler}
        key={announcement.id}
      />
    );
  });
  return <div className="ui celled list">{renderAnnouncementList}</div>;
};

export default AnnouncementList;
