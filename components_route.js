console.log("JavaScript is working!");

fetch("./Components/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("sidebar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading sidebar:", error));

fetch("./Components/statistics.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("statistics").innerHTML = data;
    })
    .catch((error) => console.error("Error loading statistics:", error));

    fetch("./Components/table.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("table").innerHTML = data;
    })
    .catch((error) => console.error("Error loading table:", error));

    fetch("./Components/section_title.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("section-title").innerHTML = data;
    })
    .catch((error) => console.error("Error loading section title:", error));

    fetch("./Components/lastest_orders.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("lastest-orders").innerHTML = data;
    })
    .catch((error) => console.error("Error loading lastest orders:", error));

    fetch("./Components/sales_analystic.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("sales-analystic").innerHTML = data;
    })
    .catch((error) => console.error("Error loading sales-analystic:", error));
