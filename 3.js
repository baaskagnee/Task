document.addEventListener("DOMContentLoaded", function () {
    const trafficList = document.getElementById("traffic-list");

    // Simulated traffic updates every 5 seconds
    const locations = [
        "UNITED STATES", "GERMANY", "CANADA", "JAPAN", "AUSTRALIA", "SPAIN", "FRANCE", "BRAZIL"
    ];

    function addTrafficEntry() {
        const location = locations[Math.floor(Math.random() * locations.length)];
        const timeAgo = Math.floor(Math.random() * 10) + 1;
        const newEntry = document.createElement("li");
        newEntry.innerHTML = `${location} <span>${timeAgo}MIN AGO</span>`;
        newEntry.style.opacity = "0";
        newEntry.style.transform = "translateY(10px)";
        trafficList.prepend(newEntry);

        setTimeout(() => {
            newEntry.style.opacity = "1";
            newEntry.style.transform = "translateY(0)";
        }, 100);
        
        // Remove old entries after 10 items
        if (trafficList.children.length > 10) {
            trafficList.removeChild(trafficList.lastChild);
        }
    }

    setInterval(addTrafficEntry, 5000);
});
