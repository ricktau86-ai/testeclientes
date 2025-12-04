// Service worker simples só para tornar a app instalável

self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker ativo');
});

self.addEventListener('fetch', (event) => {
    // Neste momento não fazemos cache especial; apenas deixamos passar os pedidos
});
