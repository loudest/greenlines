## GreenLines

Where can you afford to live in Seattle if you made $15 per hour in 2015.

![Screenshot](imgs/screenshot.png)

Our app is live at [GitHub](http://openseattle.org/greenlines/). You can select and adjust your hourly wage to determine affordable housing districts in Seattle.

## Challenge and Approach

Our approach for satisfying this data science challenge was to:

- Utilize the 50% affordability rate (wage versus cost of rent) of low-income workers based on research performed by Zillow, [The Rent is Too Damn High](http://www.zillow.com/research/rent-affordability-2013q4-6681/). 
- Visualize where on a map in Seattle of ranges of hourly wages based on a 40 standard hour week schedule, can an individual afford to live in Seattle based on HUD and US Census GIS data
- Create a Flask microservice the parses GeoJSON data that can utilize a machine learning logistic S-curve applied over a timescale for predecting genterfication.

## Team Members

![Team](imgs/team.jpg)

Our team (excluding) the CTO of Zillow, David Beitel, is comprised of:

- [@loudest](https://github.com/loudest) - README.md writer, man who speaks softly and carries a big $15 sign. 
- [@amiranda222](https://github.com/amiranda222) - Alexander the Great, The Master of All Things Digital
- [@dcbaron](http://github.com/dcbaron) - Has a 9 ol'clock shadow, our number crunching caffeine data junkie

## Technologies, APIs, and Datasets Utilized

We made use of:
- [Flask](http://flask.pocoo.org/) for filtering GIS data and JavaScript [gmap.js] (https://developers.google.com/maps/documentation/javascript/events) for client-side JavaScript mapping.
- [ArcGIS Open Data](http://zillowhack.hud.opendata.arcgis.com/datasets/27b53ea69f98474eb002ac3b9c6b51eb_0) US and HUD census datasets encoded with GeoJSON.
- [Redis](https://redis.io/) to cache look-ups of input and return data

## Microservice API explained
Flask service listens to the following service-oriented architecture endpoint:
1. /?wage=<int> - GET paramater of int returns GeoJSON structured data

## Contributing
In order to build and run our app:
1. Python backend/main.py to run it via localhost

Our code is licensed under the [MIT License](LICENSE.md). Pull requests will be accepted to this repo, pending review and approval.
