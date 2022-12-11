import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './Diagram.scss'

function Diagram() {
	const options = {
		chart: {
			type: "area",
			styledMode: false
		},
		title: {
			text: ''
		},
		legend: {
			align: 'right',
			verticalAlign: 'top',
			borderWidth: 0,
			showInLegend: "false"
		},
		yAxis: {
			title: {
				text: ''
			},
			labels: {
				formatter: function () {
					return this.value + "$";
				}
			}
		},
		xAxis: {
			categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
		},
		tooltip: {
			backgroundColor: '#FFFFFF',
			borderColor: '#FFFFFF',
			borderRadius: 4,
			borderWidth: 3,
			boxShadow: '0px 0px 8px rgba(16, 30, 115, 0.12)'
		},
		plotOptions: {
			area: {
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			},
			column: {
				showInLegend: false
			},
			line: {
				connectEnds: false
			}
		},
		series: [
			{
				name: '',
				type: "spline",
				data: [49000, 79000, 35000, 62000, 4200, 90000],
				color: "#336CFB",
			}

		]
	};
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		</div >
	)
}

export default Diagram