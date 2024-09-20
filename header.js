function toggleDropdown(){
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


if (typeof window !== 'undefined') {
    window.onclick = function(event) {
        if (!event.target.matches('#button_2')) {
            closeDropdown();
        }
    }
}

if (typeof document !== 'undefined') {
    const image = document.getElementById('personalImage');
    let isUp = false;

image.onclick = function() {
    if (isUp) {
        image.style.transform = 'translateY(0)';
    } else {
        image.style.transform = 'translateY(-60px)'; 
    }
    isUp = !isUp; 
};

}


if (typeof document !== 'undefined') {
    const element = document.getElementById('button_2');
function updateContent() {
    if (window.matchMedia("(max-width: 724px)").matches) {
        element.innerHTML = "&#x2630;";

    } else {
        element.innerHTML = '<span style="font-weight:bold;">FRANK</span>';
    }
}

updateContent();
window.addEventListener('resize', updateContent);

}

