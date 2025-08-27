// Carga el archivo de IPs bloqueadas
const script = document.createElement("script");
script.src = "ips-bloqueadas.js"; // Asegúrate de que esta ruta sea correcta
script.onload = () => {
  // Obtener la IP (IPv4 o IPv6)
  fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      const userIP = data.ip;

      // Verifica si la IP está en la lista
      if (Array.isArray(IPS_BLOQUEADAS) && IPS_BLOQUEADAS.includes(userIP)) {
        window.location.href = "sapito.html";
      }
    })
    .catch(error => {
      console.error("Error al obtener la IP:", error);
    });
};
document.head.appendChild(script);