document.addEventListener('DOMContentLoaded', function() {
    updateTime(); // Chama a função updateTime uma vez para exibir o horário atual imediatamente
    setInterval(updateTime, 1000); // Atualiza as horas a cada segundo
});

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
}
