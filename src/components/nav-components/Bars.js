import React from 'react';
import './Bar.css'



function Bar(prop) {

    function tominute() {
        let minute = new Date();
        let m = minute.getMinutes(prop.lastupdate);
        return m;
    }
    return (
        <div className="bar-wrapper">
            <div className="bar">
                <div className="confirmed">
                    <h1>Total Confirmed</h1>
                    <p>{prop.value}</p>
                    <h3>{prop.casesinmillion} Million</h3>
                    <h4>{tominute()} min ago</h4>
                </div>


                <div className="deaths">
                    <h1>Deaths</h1>
                    <p>{prop.deaths}</p>
                    <h3>{prop.deathsmillion} Million</h3>
                    <h4>{tominute()} min ago</h4>
                </div>
                <div className="recovered">
                    <h1>Recovered</h1>
                    <p>{prop.recovered}</p>
                    <h3>{prop.recovermillion} Million</h3>
                    <h4>{tominute()} min ago</h4>
                </div>


            </div>
        </div>
    )
}
export default Bar;