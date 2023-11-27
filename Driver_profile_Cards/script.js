function displayDriverProfile() {
    const selectedDriver = document.getElementById("driver-names").value;
    fetch("./stats.json")
        .then(response => response.json())
        .then(data => {
            const driverData = getDriverData(selectedDriver, data.driverStats);

            // Display the selected driver's stats
            document.getElementById("driver-name").textContent = driverData.name;
            document.getElementById("wins").textContent = `Wins: ${driverData.wins}`;
            document.getElementById("pole_percentage").textContent = `Pole Percentage: ${driverData.pole_percentage}%`;
            document.getElementById("pole_starts").textContent = `Pole Starts: ${driverData.poles_starts}`;
            document.getElementById("points").textContent = `Points: ${driverData.points}`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function getDriverData(driverName, allDriverStats) {
    // Find the data for the selected driver in the array
    const selectedDriverData = allDriverStats.find(driver => driver.name === driverName);

    // Return the selected driver's data
    return selectedDriverData || {};
}




// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch JSON data (replace 'drivers.json' with your actual file path)
//     fetch('stats.json')
//         .then(response => response.json())
//         .then(data => {
//             // Populate the driver selection dropdown
//             const driverSelect = document.getElementById('driver-name');
//             data.forEach(driver => {
//                 const option = document.createElement('option');
//                 option.value = driver.name;
//                 option.textContent = driver.name;
//                 driverSelect.appendChild(option);
//             });

//             // Add event listener to handle selection change
//             driverSelect.addEventListener('change', () => {
//                 const selectedDriver = data.find(driver => driver.name === driverSelect.value);
//                 if (selectedDriver) {
//                     // Display driver statistics
//                     document.getElementById('driverName').textContent = selectedDriver.name;
//                     document.getElementById('driverWins').textContent = selectedDriver.wins;
//                     document.getElementById('driverPolePercentage').textContent = selectedDriver.pole_percentage;
//                     document.getElementById('driverPoints').textContent = selectedDriver.points;
//                 }
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });





//  let driver = document.getElementById("driverStats");

// let driverStats = {
//     driver: driver.name,
//     wins: driver.wins,
//     pole_percentage: driver.pole_percentage,
//     points: driver.points
// };

// localStorage.setItem("driverStats", JSON.stringify(driverStats));
// renderToString();


// function renderToString() {
//     let driverStats = JSON.parse(localStorage.getItem("driverStats"));
//     if (driverStats !==null) {
//         document.querySelector(".stat-1").textContent = driverStats.driver
//     }
// }

// console.log("driverStats");

// stats = [ driver stats]
// stats =
// [
// {stats.wins}
// {stats.pole_percentage}
// {stats.pole_starts}
// {stats.points}

// ]




// function getDriverStats() => {
//     var stats = JSON.parse(localStorage.getItem("driver.stats"));
//     if ({driver.name === driver.name}) {
//         document.querrySelector("stats.wins").textContent = name.wins
//     }
//     else ({driver.name === driver.name}) {
//         document.querrySelector("stats.pole_percentage").textContent = name.wins
//     }
//     if ({driver.name === driver.name}) {
//         document.querrySelector("stats.pole_starts").textContent = name.wins
//     }
//     else ({driver.name === driver.name}) {
//         document.querrySelector("stats.points").textContent = name.wins
//     }
// }