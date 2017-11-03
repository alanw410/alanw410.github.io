<script type="text/javascript">
			AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "category",
					"maxSelectedTime": -1,
					"startDuration": 1,
					"tapToActivate": false,
					"theme": "dark",
					"categoryAxis": {
						"autoRotateAngle": -5.4,
						"axisAlpha": 1,
						"centerRotatedLabels": true,
						"dashLength": 0,
						"gridAlpha": 0,
						"gridColor": "#922828",
						"gridCount": 0,
						"gridThickness": 14,
						"minorGridAlpha": 0,
						"tickLength": 0,
						"titleRotation": -1
					},
					"chartCursor": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "Male",
							"valueField": "column-1"
						},
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"bullet": "square",
							"id": "AmGraph-2",
							"title": "Female",
							"valueField": "column-2"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"axisAlpha": 0,
							"gridCount": 0,
							"gridThickness": 0,
							"labelsEnabled": false,
							"title": "Axis title",
							"titleFontSize": 0
						}
					],
					"allLabels": [],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"align": "center",
						"useGraphSettings": true
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "15-19",
							"column-1": "264",
							"column-2": "157"
						},
						{
							"category": "20-24",
							"column-1": "1954",
							"column-2": "506"
						},
						{
							"category": "25-34",
							"column-1": "42727",
							"column-2": "18362"
						},
						{
							"category": "35-44",
							"column-1": "87898",
							"column-2": "32319"
						},
						{
							"category": "45-54",
							"column-1": "79276",
							"column-2": "26398"
						},
						{
							"category": "55-64",
							"column-1": "45276",
							"column-2": "13685"
						},
						{
							"category": "65-74",
							"column-1": "10378",
							"column-2": "3647"
						},
						{
							"category": "75-84",
							"column-1": "2677",
							"column-2": "1791"
						},
						{
							"category": "85ov",
							"column-1": "933",
							"column-2": "861"
						}
					]
				}
			);
		</script>
