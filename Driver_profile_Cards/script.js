

async function fetchData() {
    try {
        // Fetch the JSON data
        const response = await fetch('stats.json');

        // Parse the JSON data
        const allDriverStats = await response.json();

        // Assuming "driver" is an HTML element, you might want to get its value, not its name
        let selectedDriver = document.getElementById("driverStats").value;

        // Check if a driver is selected
        if (selectedDriver) {
            // Get the selected driver's stats
            let driverStats = allDriverStats[selectedDriver];

            // Check if stats are available
            if (driverStats) {
                // Store the selected driver's stats in localStorage
                localStorage.setItem("driverStats", JSON.stringify(driverStats));

                // Render the stats on the page
                renderStats(driverStats);
            } else {
                console.error("Driver stats not available");
            }
        } else {
            console.error("No driver selected");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function renderStats(driverStats) {
    // Assuming you have elements with the class "stat-1", "stat-2", etc.
    document.querySelector(".stat-1").textContent = `Driver: ${driverStats.name}`;
    document.querySelector(".stat-2").textContent = `Wins: ${driverStats.wins}`;
    document.querySelector(".stat-3").textContent = `Pole Percentage: ${driverStats.pole_percentage}%`;
    document.querySelector(".stat-4").textContent = `Points: ${driverStats.points}`;
}

// Call the fetchData function when your script loads
fetchData();




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