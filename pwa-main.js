if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the automatic prompt from showing
    e.preventDefault();
    // Save the event so we can trigger it later
    deferredPrompt = e;

    // Display your custom install button if desired
    const installButton = document.getElementById('install-button');
    if (installButton) {
        installButton.style.display = 'block';
    }
});