# Halloween Countdown Badge

![Days until Halloween](https://halloween-countdown.herokuapp.com/)

Small express server that will just return an **svg** element with the number of days until Halloween. You can then embed it wherever images are allowed.

The app is hosted at https://halloween-countdown.herokuapp.com/. So you can just use \<img src="https://halloween-countdown.herokuapp.com/" alt="halloween countdown"> to display the badge on a webpage. 

## TODO:
  - Create the svg only once per day and upload it to a CDN somewheres. It is hosted on Heroku which means the script will stop and restart multiple times. There is no reason to calculate the number of days more than once a day.

