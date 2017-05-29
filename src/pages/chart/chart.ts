import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TweetsProvider } from "../../providers/tweets";
import { Chart } from 'chart.js';


/**
 * Generated class for the Chart page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
  providers: [TweetsProvider]
})

/*
* The charts page
*/
export class ChartPage {

  	type;
	data;
	options;
	frequency;
	labels: string[];
	@ViewChild('lineCanvas') lineCanvas;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public tweetservice: TweetsProvider) {
  	}

	ionViewDidLoad() {
    
    	// initilize the frequency and chart vairables
    	this.frequency = null;
		this.labels = null;

		// get the frequency from the api
		this.tweetservice.getFrequency(this.navParams.get('queryInfo').player ,
		 					this.navParams.get('queryInfo').team ,
		 					this.navParams.get('queryInfo').author, 
		 					this.navParams.get('queryInfo').player_team_op, 
		 					this.navParams.get('queryInfo').team_author_op )
		.subscribe( (frequency)=>{	
			let response = frequency.json();

			console.log(response);
			
			// map the frequency into an array
			this.frequency = response.map(function(freq){
				return freq.count
			});

			// map the labes into an array
			this.labels = response.map(function(lab){
				return lab._id.day
			})

			// initiliaze the chart, with labels and frequency
			this.lineCanvas = new Chart(this.lineCanvas.nativeElement, {
	            type: 'line',
	            data: {
	                labels: this.labels,
	                datasets: [
	                    {
	                        label: "Number Of Tweets",
	                        fill: true,
	                        lineTension: 0.1,
	                        backgroundColor: "rgba(75,192,192,0.4)",
	                        borderColor: "rgba(75,192,192,1)",
	                        borderCapStyle: 'butt',
	                        borderDash: [],
	                        borderDashOffset: 0.0,
	                        borderJoinStyle: 'miter',
	                        pointBorderColor: "rgba(75,192,192,1)",
	                        pointBackgroundColor: "#fff",
	                        pointBorderWidth: 1,
	                        pointHoverRadius: 5,
	                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
	                        pointHoverBorderColor: "rgba(220,220,220,1)",
	                        pointHoverBorderWidth: 2,
	                        pointRadius: 1,
	                        pointHitRadius: 10,
	                        data: this.frequency,
	                        spanGaps: false,
	                    }
	                ]
	            }
	        });
    	});

  	}
 
}
