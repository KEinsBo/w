document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('persistent-checkbox');

    // Funktion zum Abrufen eines Cookies nach dessen Namen
    function getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Setze den Zustand der Checkbox basierend auf dem Cookie
    const savedState = getCookie('checkboxState');
    if (savedState !== undefined) {
        checkbox.checked = JSON.parse(savedState);
    }

    // Funktion zum Setzen eines Cookies mit einem Namen, Wert und einer Ablaufzeit in Tagen
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
    }

    // Event Listener, um den Zustand in einem Cookie zu speichern
    checkbox.addEventListener('change', () => {
        setCookie('checkboxState', checkbox.checked, 7); // Cookie wird für 7 Tage gespeichert
    });
});