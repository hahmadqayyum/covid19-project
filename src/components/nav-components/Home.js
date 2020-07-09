import React, { useEffect, useState } from 'react';
import Bar from './Bars'
import axios from 'axios'
import Chart from '../Chart/Chart'
import './home.css'



function Home() {
    const [latest, setLatest] = useState([]);
    const [isfetching, setFetching] = useState(false)

    useEffect(() => {
        axios
            .get("https://corona.lmao.ninja/v2/all")
            .then(res => {
                setFetching(true)
                setLatest(res.data);
            })
            .catch(err => {
                console.log(err);

            });
    }, []);

    if (!isfetching) {

        return (
            <div className="load">
                <div className="loading">
                </div>
            </div>

        )
    }
    return (
        <div className="home">
            <Bar
                value={latest.cases}
                deaths={latest.deaths}
                recovered={latest.recovered}
                lastupdate={latest.updated}
                todayC={latest.todayCases}
                todayD={latest.todayDeaths}
                todayR={latest.todayRecovered} />
            <div className="chart-wrapper">
                <div className="chart">
                    <Chart value={latest.cases}
                        deaths={latest.deaths}
                        recovered={latest.recovered}
                        

                    />
                </div>
            </div>
        </div>
    )
}
export default Home;