function displayRestaurantDetails(data) {
    // Get a reference to the heading
    const heading = document.getElementById("restaurant-name");
    heading.textContent = data["name"];

    document.getElementById("established-year");
    heading.textContent = data["established"];

    document.getElementById("restaurant-status").textContent = data["status"];
}

function loadRestaurantDetails() {

    const url = "http://localhost:3000";

    fetch(url)
        .then(res => res.json())
        .then(data => displayRestaurantDetails(data))
        .catch(err => {
            console.log(err);
        })
}

loadRestaurantDetails();
