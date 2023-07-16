import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Accomodation.module.css";
    
export const Accomodation = () => {
   const[rooms, setRooms] = useState("");

   async function fetchProduct() {
     try {
       const response = await fetch("http://localhost:8080/rooms");
       // Authorization header is not needed in GET product/room hai, I've just put it here for reference
       const responseData = await response.json();
       console.log(responseData);
       setRooms(responseData.rooms);
     } catch (error) {
       console.error(error);
     }
   }

   useEffect(() => {
     fetchProduct();
   }, []);

  return (
    
    <div>
      <Navbar/>
      {rooms
        ? rooms.map((room) => (
            <div className={styles.reservation} key={room._id}>
              <h1>Available rooms</h1>
              <div className={styles.reserve}> 
                <div className={styles.text}>
              <h1>{room.name}</h1>
              <p>{room.description}</p>
              <h2>{room.price}</h2>
              <strong>{room.roomType}</strong>
              </div>
              <div className={styles.image}>
              <img
                src={`http://localhost:8080/${room.image}`}
                alt={room.name}
                width="200px" 
              ></img>
              </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};
      

export default Accomodation
