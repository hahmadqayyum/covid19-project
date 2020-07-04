
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import CountUp from 'react-countup'
import 'bootstrap/dist/css/bootstrap.min.css'
// https://corona.lmao.ninja/v2/countries
function Analysis() {
  const [country, setCountry] = useState([]);

  // function tominute() {
  //   let minute = new Date();
  //   let m = minute.getMinutes();
  //   return m;
  // }
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then(res => {
        console.log(res.data)
        setCountry(res.data);
      })
      .catch(err => {
        console.log(err);

      });
  }, []);



  // function tominute() {
  //   let minute = new Date();
  //   let m = minute.getMinutes();
  //   return m;
  // }

  const countries = country.map((data, ind) => {
    return (
      <Card
        key={ind}
        bg="dark"
        text="white"
        className="text-center"
        style={{ margin: 20 }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text style={{ color: 'rgb(140, 140, 211)' }}>Confirmed <CountUp start={0} end={data.cases} duration={2} separator="," /></Card.Text>
          <Card.Text style={{ color: 'rgba(240, 35, 35, 0.76)' }}>Deaths <CountUp start={0} end={data.deaths} duration={2} separator="," /></Card.Text>
          <Card.Text style={{ color: 'rgb(147, 224, 32)' }}>Recovered <CountUp start={0} end={data.recovered} duration={2} separator="," /></Card.Text>
          <Card.Text>Today Reported <CountUp start={0} end={data.todayCases} duration={2} separator="," /></Card.Text>
          <Card.Text>Today Deaths <CountUp start={0} end={data.todayDeaths} duration={2} separator="," /></Card.Text>
          <Card.Text>Today Cured <CountUp start={0} end={data.todayRecovered} duration={2} separator="," /></Card.Text>

        </Card.Body>
        <Card.Footer>
          <small>Stay Home Stay Safe</small>
        </Card.Footer>
      </Card>
    )
  })

  return (

    <div className="card" style={{backgroundColor: '#333333'}}>
      <CardColumns>
        {countries}
      </CardColumns>
    </div>

  )
}
export default Analysis;