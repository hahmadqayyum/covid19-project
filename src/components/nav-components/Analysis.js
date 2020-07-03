import React, { useEffect, useState } from 'react';
import axios from 'axios'
// https://corona.lmao.ninja/v2/countries
function Analysis() {
    const [country, setCountry] = useState([{}]);

    function tominute() {
        let minute = new Date();
        let m = minute.getMinutes();
        return m;
    }
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




    return (
        <div className="analysis">

            {country.map((data) => {
                return (
                    <ul>
                        <div className="country-info">
                            <img src={data.flag} alt="flag" />
                            <li>{data.country}</li>
                            <li>{data.cases}</li>
                            <li>{tominute(data.update)} min ago</li>
                        </div>
                    </ul>
                )
            })}


        </div>
    )
}
export default Analysis;