let driverStats = {
    driver: driver.name,
    wins: driver.wins,
    pole_percentage: driver.pole_percentage,
    points: driver.points
};

localStorage.setItem("driverStats", JSON.stringify(driverStats));
renderToString();


function renderToString() {
    let driverStats = JSON.parse(localStorage.getItem("driverStats"));
    if (driverStats !==null) {
        document.querySelector(".stat-1").textContent = driverStats.driver
    }
}



// stats = [ driver stats]
// stats = 
// [
// {stats.wins}
// {stats.pole_percentage}
// {stats.pole_starts}
// {stats.points}

// ]


get.querrySelector.stats_container 


function getDriverStats() => {
    var stats = JSON.parse(localStorage.getItem("driver.stats"));
    if ({driver.name === driver.name}) {
        document.querrySelector("stats.wins").textContent = name.wins
    }
    else ({driver.name === driver.name}) {
        document.querrySelector("stats.pole_percentage").textContent = name.wins
    }
    if ({driver.name === driver.name}) {
        document.querrySelector("stats.pole_starts").textContent = name.wins
    }
    else ({driver.name === driver.name}) {
        document.querrySelector("stats.points").textContent = name.wins
    }
}