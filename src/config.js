export let api = window.location.origin === "http://localhost:3000" ? "http://localhost:3005/api" : "api.vortex.kaanlikescoding.me";

console.log(import.meta.env);