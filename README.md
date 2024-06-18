# ev-map

Analyzing Canada and USA's highways for EV accessibility.

Loads the highway system maps and EV fast chargers and determines which highways are traversable by EV while fast charging.

![Canada's EV Fast Charging Highways](images/ev_highways_CA_J1772COMBO_415.gif)
![America's EV Fast Charging Highways](images/ev_highways_US_J1772COMBO_415.gif)


## Interactive Map

[<img src="images/kepler_thumbnail.png">](https://canadianveggie.github.io/ev-map/)

An interactive version of the map running in Kepler.gl is also [available](https://canadianveggie.github.io/ev-map/).

## Running locally

You need to have python installed locally.

`make install`
`make jupyter`

This will open up a Jupyter notebook that will run and analyze the data.

## Creating an animated gif

`make gifs`

## Data Sources

* Statistics Canada's [Road Network File, Reference Guide, 2022](https://www150.statcan.gc.ca/n1/pub/92-500-g/92-500-g2022001-eng.htm)
* Transport Canada's [Zero-emission vehicle charging stations](https://tc.canada.ca/en/road-transportation/innovative-technologies/zero-emission-vehicles/zero-emission-vehicle-charging-stations#/find/nearest?country=CA&fuel=ELEC)
* Wikipedia's [List of Interstate Highways](https://en.wikipedia.org/wiki/List_of_Interstate_Highways)
* US Department of Energy's [Electric Vehicle Charging Station Locations](https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC)
