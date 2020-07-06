import React, { useEffect, useState } from 'react';
import Bar from './Bars'
import axios from 'axios'
import Chart from '../Chart/Chart'



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
                    FetchingData
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
            <div>
                <Chart value={latest.cases}
                    deaths={latest.deaths}
                    recovered={latest.recovered}

                />
            </div>
        </div>
    )
}
export default Home;