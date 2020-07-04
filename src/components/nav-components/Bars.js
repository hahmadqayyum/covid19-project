import React from 'react';
import './Bar.css'
import CountUp from 'react-countup'

function Bar(prop) {

    function tominute() {
        let minute = new Date();
        let m = minute.getMinutes();
        return m;
    }
    return (
        <div className="bar-wrapper">
            <div className="bar">
                <div className="confirmed">
                    <h1>Confirmed</h1>
                    <p>{prop.value}</p>

                    
                    <h4>{tominute(prop.lastupdate)} min ago</h4>
                </div>


                <div className="deaths">
                    <h1>Deaths</h1>
                    <p>{prop.deaths}</p>
                    
                    <h4>{tominute(prop.lastupdate)} min ago</h4>
                </div>
                <div className="recovered">
                    <h1>Recovered</h1>
                    <p>{prop.recovered}</p>

                    <h4>{tominute(prop.lastupdate)} min ago</h4>
                </div>


            </div>
        </div>
    )
}
export default Bar;