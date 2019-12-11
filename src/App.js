import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App(props) {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=RRRZI56k4trp4aaV0ABMAetx9ZKlJcicNaFuqOdO')
      .then (response => {
        const nasaChan = response.data.slurd;
        setPicture(nasaChan);

        const dateChan = response.data.date;
        setDate(dateChan);

        const titleChan = respose.data.title;
        setTitle(titleChan);
      })
    })

  return (
    <pictureComponent>
      `Picture: ${picture}, Title: ${title} Date: ${date}`
    </pictureComponent>
  );
}

export default App;
