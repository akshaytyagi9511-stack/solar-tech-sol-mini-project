// =========================================================
// TOPIC 10: DOM MANIPULATION & TOPIC 11: EVENTS
// Integrated into Solar Tech Solutions Project
// =========================================================

// 1. Active Navigation Highlighting
var currentPage = window.location.pathname.split("/").pop();
var navLinks = document.querySelectorAll('.nav-bar a');

for (var i = 0; i < navLinks.length; i++) {
    if (currentPage === "" && navLinks[i].getAttribute('href') === 'index.html') {
        navLinks[i].classList.add('active');
    } else if (navLinks[i].getAttribute('href') === currentPage) {
        navLinks[i].classList.add('active');
    }
}

// 2. DOM & Style Demonstration (for About.html)
let demoText = document.getElementById("demoText");
let changeStyleBtn = document.getElementById("changeStyleBtn");
let toggleStyleBtn = document.getElementById("toggleStyleBtn");

if (changeStyleBtn && demoText) {
    changeStyleBtn.addEventListener("click", function() {
        demoText.style.color = "#025955";
        demoText.style.fontSize = "18px";
    });
}

if (toggleStyleBtn && demoText) {
    toggleStyleBtn.addEventListener("click", function() {
        demoText.classList.toggle("highlight");
    });
}

// Mouseover and Mouseout event demos
let solarImage = document.getElementById("solarImage");
if (solarImage) {
    solarImage.addEventListener("mouseover", function() {
        solarImage.style.border = "3px solid #025955";
    });
    solarImage.addEventListener("mouseout", function() {
        solarImage.style.border = "1px solid #000000";
    });
}

// 3. Products Array & Rendering (for Products.html - mimicking student management system)
let solarPackages = [
    { capacity: "3 kW System", idealFor: "Small Homes (1-2 BHK)", cost: "₹1,80,000", priceVal: 180000 },
    { capacity: "5 kW System", idealFor: "Medium Homes (3-4 BHK)", cost: "₹2,70,000", priceVal: 270000 },
    { capacity: "10 kW System", idealFor: "Large Homes & Offices", cost: "₹5,00,000", priceVal: 500000 }
];

function displayProducts() {
    let tbody = document.getElementById("productTableBody");
    if (!tbody) return;
    
    tbody.textContent = "";
    solarPackages.forEach(function(pkg) {
        let row = document.createElement("tr");
        
        let cell1 = document.createElement("td");
        cell1.textContent = pkg.capacity;
        
        let cell2 = document.createElement("td");
        cell2.textContent = pkg.idealFor;
        
        let cell3 = document.createElement("td");
        cell3.textContent = pkg.cost;
        
        let cell4 = document.createElement("td");
        let btn = document.createElement("button");
        btn.textContent = "Select";
        btn.addEventListener("click", function() {
            selectPackage(pkg.capacity);
        });
        cell4.appendChild(btn);
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        tbody.appendChild(row);
    });
}
displayProducts();

// Search Package using find() method
function searchPackage() {
    let searchVal = document.getElementById("searchPackage").value.trim().toLowerCase();
    let foundPkg = solarPackages.find(function(pkg) {
        return pkg.capacity.toLowerCase().includes(searchVal);
    });
    let resultP = document.getElementById("searchPkgResult");
    if (!resultP) return;

    if (searchVal === "") {
        resultP.textContent = "Please enter a search term.";
        resultP.style.color = "red";
    } else if (foundPkg) {
        resultP.textContent = "Found: " + foundPkg.capacity + " | Ideal For: " + foundPkg.idealFor + " | Cost: " + foundPkg.cost;
        resultP.style.color = "green";
    } else {
        resultP.textContent = "Package not found.";
        resultP.style.color = "red";
    }
}

let searchPkgBtn = document.getElementById("searchPkgBtn");
if (searchPkgBtn) {
    searchPkgBtn.addEventListener("click", searchPackage);
}

// 4. Calculator Logic (for Calculator.html)
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) {
    calcBtn.addEventListener('click', function() {
        var billInput = document.getElementById('monthlyBill').value;
        var resultDisplay = document.getElementById('resultText');

        if (billInput === "" || billInput <= 0) {
            resultDisplay.textContent = "Please enter a valid monthly bill amount.";
            resultDisplay.classList.remove("passed");
            resultDisplay.classList.add("failed");
        } else {
            var annualSavings = Math.round(billInput * 12 * 0.8);
            var recommended = "3 kW System";
            if (billInput > 6000) {
                recommended = "10 kW System";
            } else if (billInput > 3000) {
                recommended = "5 kW System";
            }

            resultDisplay.innerHTML = "Estimated Yearly Savings: ₹" + annualSavings + 
                                      "<br>Recommended Package: " + recommended;
            resultDisplay.classList.remove("failed");
            resultDisplay.classList.add("passed");
        }
    });
}

// Show Statistics using map(), reduce(), filter() (matching teacher's code style)
function showStatistics() {
    let prices = solarPackages.map(pkg => pkg.priceVal);
    let totalCost = prices.reduce((sum, price) => sum + price, 0);
    let affordable = solarPackages.filter(pkg => pkg.priceVal <= 300000);
    let avgCost = solarPackages.length > 0 ? totalCost / solarPackages.length : 0;

    let statsElem = document.getElementById("statistics");
    if (statsElem) {
        statsElem.textContent = "Total Packages: " + solarPackages.length + 
                                " | Under ₹3Lakhs: " + affordable.length + 
                                " | Average Cost: ₹" + avgCost.toFixed(0);
        statsElem.style.color = "#025955";
    }
}

let showStatsBtn = document.getElementById("showStatsBtn");
if (showStatsBtn) {
    showStatsBtn.addEventListener("click", showStatistics);
}

// 5. Contact Form & LocalStorage for Package Selection
function selectPackage(packageName) {
    localStorage.setItem('selectedPackage', packageName);
    window.location.href = 'contact.html';
}

var messageBox = document.getElementById('userMessageInput');
var savedPackage = localStorage.getItem('selectedPackage');
if (messageBox && savedPackage) {
    messageBox.value = "Hello, I am interested in getting a quote and more details for the " + savedPackage + ".";
    localStorage.removeItem('selectedPackage');
}

// Input event listener for live typing feedback (matching class notes)
let nameInput = document.getElementById("userNameInput");
let feedbackP = document.getElementById("liveTypingFeedback");
if (nameInput && feedbackP) {
    nameInput.addEventListener("input", function() {
        if (this.value.trim() !== "") {
            feedbackP.textContent = "Typing name: " + this.value;
        } else {
            feedbackP.textContent = "";
        }
    });
}

var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Thank you! Your inquiry has been submitted successfully.");
        this.reset();
        if (feedbackP) feedbackP.textContent = "";
    });
}