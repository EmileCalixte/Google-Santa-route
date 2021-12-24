# Google Santa Route

A script that lists the cities on Santa's route from santatracker.google.com based on the JSON containing all Santa's destinations.

## Requirements

[NodeJS](https://nodejs.org/en/) 14+

## Usage

```sh
node index.js
```

## Improvement ideas

- Display the number of presents delivered in each city (the data is in the JSON file)
  - Determine Santa's favorite cities based on the number of presents delivered relative to the population
  - Determine the evolution of the weight and volume of Santa's sack during his journey, based on the average weight and volume of a Christmas present (if such data exists anywhere...)
- Compute distance and average speed between two cities, based on latitude & longitude of each city ([Haversine formula](https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)) (latitude & longitude of each city is in the JSON file)
  - Compute the total distance traveled by Santa on his tour
- Check if Santa's path is optimized or if a different route would be more optimal
- Create a real web application to visualize all these statistics