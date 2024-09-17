function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectResponse(response) {
    document.getElementById("selectedResponse").innerText = response;
    closeDropdown();
}
function selectAbout(about) {
    document.getElementById("about").innerText = about;
    closeDropdown();
}
function selectHome(home) {
    document.getElementById("home").innerText = home.toUpperCase();
    closeDropdown();
}

function closeDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
}
function myPortfolios() {
    alert("still in progress...");
   }

window.onclick = function(event) {
    if (!event.target.matches('.button_2')) {
        closeDropdown();
    }
}
