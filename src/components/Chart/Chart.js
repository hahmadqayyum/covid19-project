import React from 'react'


import { Doughnut } from 'react-chartjs-2'


const Chart = (prop) => {



	const data = {
		labels: ['Deaths', 'Confirmed', 'Cured', ],
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
					prop.value,
					prop.recovered,
				],

			}
		]
	}


	return (

		<div className="world-convas">

			<Doughnut
				data={data}
				options={{
					title: {
						display: true,
						fontSize: 25
					},
					legend: {
						display: false,
						position: 'right',
					}
				}}
			/>
		</div>

	)
}

export default Chart







