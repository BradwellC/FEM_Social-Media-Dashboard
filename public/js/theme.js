
(function () {
var toggle = document.querySelector('input[type="checkbox"]'),
root = document.documentElement,
currentTheme = localStorage.getItem('theme') || "light";

if (currentTheme == "dark") toggle.removeAttribute('checked');

else toggle.checked = "true"; 
root.setAttribute('data-theme', currentTheme);

toggle.addEventListener('change', toggleTheme, false);

function toggleTheme(e) {
if (this.checked) {
    root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }

    else {
        

        root.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
    }
}
})();