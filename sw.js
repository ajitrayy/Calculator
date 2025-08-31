self.addEventListener("install" , e => {
    console.log("Service Worker Installed");
});

self.addEventListener("fetch" , e => {
    console.log("fetching", e.request.url);
});