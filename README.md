GreenLines

One of the biggest problems for people making a specific wage in Seattle, is knowing where affordable places where to live.  Rather than drawing redlines to show where the areas in Seattle are considered poverty level.  We decided to make these same area and draw them green.  We then added the feature to show based on hourly income and HUD rent data, the areas in Seattle that are considered affordable for rent.  

![Our Mascot] (imgs/logo.png)
![Screenshot](imgs/screenshot.png)

Our app is live at [Heroku] (https://greenlines.herokuapp.com/). You can select and adjust your hourly wage (in dollars) to determine affordable housing districts in Seattle.

## Challenge and Approach

Our approach for satisfying this challenge was to:

- Utilize the 50% affordability rate (wage versus cost of rent) of low-income workers based on research performed by Zillow, "The Rent is Too Damn High", by Krishna Rao. (source: http://www.zillow.com/research/rent-affordability-2013q4-6681/). 
- Show what areas in Seattle are considered affordable based on HUD and US Census GIS data
- Determine what ranges of hourly wages based on a 40 standard hour week schedule, can an individual afford to live in Seattle.
- Visualize it on a map and render it to be mobile compactable via app interface or mobile website 

Once we did that, we plan to work with Code for America (Seattle) to further develop and expand this to other cities!

## Team Members

Our team is comprised of:

- [@loudest] (https://github.com/loudest) - README.md writer, man who speaks softly and carries a big $15 sign. 
- [@amiranda222] (https://github.com/amiranda222) - Alexander the Great, The Master of All Things Digital
- [@dcbaron](http://github.com/dcbaron) - Has a 9 ol'clock shadow, our number crunching caffeine data junkie

## Technologies, APIs, and Datasets Utilized

We made use of:
- [Heroku](https://www.heroku.com/)
- Python [Flask] (http://flask.pocoo.org/) for filtering GIS data and JavaScript [Backbone.js] (http://backbonejs.org/) and [OpenLayers 3] (http://openlayers.org/) for client-side JavaScript mapping.
- [HUD Location Affordability Index] (http://zillowhack.hud.opendata.arcgis.com/datasets/27b53ea69f98474eb002ac3b9c6b51eb_0) GIS data for rent and GIS data

## Contributing

In order to build and run our app:

1. [Deploying server-side code] backend/ are Python server side Flask to filter the wage filter for Seattle rent data.
2. [Running client-side code] / will have backbone.js and node.js 

Our code is licensed under the [MIT License](license.md). Pull requests will be accepted to this repo, pending review and approval.
