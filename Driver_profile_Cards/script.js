stats = [ driver stats]
stats = 
[
{stats.wins}
{stats.pole_percentage}
{stats.pole_starts}
{stats.points}

]


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