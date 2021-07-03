import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Altina I", position: "Menager", salary: 2000 },
    { id: 2, name: "Leonora M", position: "Menager", salary: 2000 },
    { id: 3, name: "Diell B", position: "Menager", salary: 2000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
