document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('persistent-checkbox');

    // Lade den Zustand aus Local Storage
    const savedState = localStorage.getItem('checkboxState');
    if (savedState !== null) {
        checkbox.checked = JSON.parse(savedState);
    }

    // Speichere den neuen Zustand bei jedem Klick
    checkbox.addEventListener('change', () => {
        localStorage.setItem('checkboxState', JSON.stringify(checkbox.checked));
    });
});