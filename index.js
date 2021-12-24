const fs = require('fs');

/**
 * @param {Date} date 
 */
const formatDateAsString = (date) => {
    const day = String(date.getUTCDate()).padStart(2, 0);
    const month = String(date.getUTCMonth() + 1).padStart(2, 0);
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, 0);
    const minutes = String(date.getUTCMinutes()).padStart(2, 0);
    const seconds = String(date.getUTCSeconds()).padStart(2, 0);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const destinations = JSON.parse(fs.readFileSync('destinations.json', 'utf8'));

destinations.destinations.forEach(destination => {
    const arrivalDate = new Date(destination.arrival);
    const departureDate = new Date(destination.departure);
    const city = destination.city;
    const region = destination.region;

    console.log(`${formatDateAsString(arrivalDate)} - ${formatDateAsString(departureDate)} : ${city}, ${region}`);
});