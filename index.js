document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('persistent-checkbox');

    function getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    const savedState = getCookie('checkboxState');
    if (savedState !== undefined) {
        checkbox.checked = JSON.parse(savedState);
        
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
    }

    checkbox.addEventListener('change', () => {
        setCookie('checkboxState', checkbox.checked, 7);
    });
});