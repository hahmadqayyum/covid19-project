import React, { useEffect, useState } from 'react';
import Bar from './Bars'
import axios from 'axios'




function Home() {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios
            .get("https://corona.lmao.ninja/v2/all")
            .then(res => {
                setLatest(res.data);
            })
            .catch(err => {
                console.log(err);

            });
    }, []);

    return (
        <div className="home">
            <Bar
                value={latest.cases}
                deaths={latest.deaths}
                recovered={latest.recovered}
                lastupdate={latest.updated} />
            
        </div>
    )
}
export default Home;