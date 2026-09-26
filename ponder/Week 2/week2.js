
const themeSelector = document.querySelector('#theme');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

themeSelector.addEventListener('change', changeTheme);