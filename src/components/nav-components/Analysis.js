
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import CountUp from 'react-countup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loading.css'
import Accordion from 'react-bootstrap/Accordion'
import ChartAnalysis from '../Chart/ChartAnalysis'
// https://corona.lmao.ninja/v2/countries
function Analysis() {
  const [isfetching, setFetching] = useState(false)
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
        setFetching(true)
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
      <div>
        <Card
          key={ind}
          bg="dark"
          text="white"
          className="text-center"
          style={{ margin: 20 }}
        >
          <Card.Img variant="top" src={data.countryInfo.flag} />
          <Card.Body>
            <Card.Title style={{ textShadow: '0 0 10px white, 0 0 1000px white, 0 0 100px white' }}>{data.country}</Card.Title>
            <Card.Text style={{ color: 'rgb(140, 140, 211)' }}>Confirmed <CountUp start={0} end={data.cases} duration={2} separator="," /></Card.Text>
            <Card.Text style={{ color: 'rgba(240, 35, 35, 0.76)' }}>Deaths <CountUp start={0} end={data.deaths} duration={2} separator="," /></Card.Text>
            <Card.Text style={{ color: 'rgb(147, 224, 32)' }}>Cured <CountUp start={0} end={data.recovered} duration={2} separator="," /></Card.Text>
            <Card.Title><h5>Today's Stats</h5></Card.Title>
            <Card.Text style={{ color: 'rgb(140, 140, 211)' }}><h5>Reported <CountUp start={0} end={data.todayCases} duration={2} separator="," /></h5></Card.Text>
            <Card.Text style={{ color: 'rgba(240, 35, 35, 0.76)' }}><h5>Deaths <CountUp start={0} end={data.todayDeaths} duration={2} separator="," /></h5></Card.Text>
            <Card.Text style={{ color: 'rgb(147, 224, 32)', }}><h5>Cured <CountUp start={0} end={data.todayRecovered} duration={2} separator="," /></h5></Card.Text>

          </Card.Body>

          <Card.Footer>
            <Accordion >
              <Card
                bg="dark"
                text="white"
                className="text-center"
              >
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  <Button variant="info" style={{ width: '100%' }}>Statistics</Button>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ChartAnalysis
                      cases={data.cases}
                      deaths={data.deaths}
                      recovered={data.recovered}

                    /></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  if (!isfetching) {

    return (
      <div className="load">
        <div className="loading">
          
      </div>
      </div>

    )
  }

  return (

    <div className="card" style={{ backgroundColor: '#3f3c3c' }}>
      <CardColumns>
        {countries}
      </CardColumns>


    </div>

  )
}

export default Analysis;