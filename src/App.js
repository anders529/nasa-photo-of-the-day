import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPic from './components/NASA/nasa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RRRZI56k4trp4aaV0ABMAetx9ZKlJcicNaFuqOdO')
    .then (response => {
      const nasaChan = response.data.hdurl;
      setPicture(nasaChan);

        const dateChan = response.data.date;
        setDate(dateChan);

        const titleChan = response.data.title;
        setTitle(titleChan);
      })
    })

  return (
    <section>
      <div>
        Title: {title} Date: {date}
      </div>
      <NasaPic picture = {picture} />
    </section>
  );
}

export default App;
