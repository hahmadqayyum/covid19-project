import React from 'react'


import { Pie } from 'react-chartjs-2'


const Chart = (prop) => {



	const data = {
		labels: ['Total Deaths', 'Total Confirmed', 'Total Cured', ],
		datasets: [
			{
				label: 'Cases',
				backgroundColor: [
					'#B21F00',
					'blue',
					'#2FDE00',
					
				],
				hoverBackgroundColor: [
					'#501800',
					'rgb(50, 50, 114)',
					'#175000',
					
				],
				data: [
					prop.deaths,
					prop.cases,
					prop.recovered,
				],

			}
		]
	}


	return (

		<div className="world-convas" style={{ width: '100%', height: '100%' }}>

			<Pie
                data={data}
                options={{
                    legend:{
                        display: true,
                        position: 'right'
                    }
                }}
			/>
		</div>

	)
}

export default Chart







