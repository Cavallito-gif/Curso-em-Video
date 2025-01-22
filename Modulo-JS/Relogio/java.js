function atualizarHorario() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes().toString().padStart(2, "0"); // Garantir dois dígitos nos minutos
    var semana = data.getDay();

    // Selecionar os elementos
    var relo = document.getElementById("horas");
    var dias = [
        document.getElementById("dom"),
        document.getElementById("seg"),
        document.getElementById("ter"),
        document.getElementById("quar"),
        document.getElementById("quin"),
        document.getElementById("sex"),
        document.getElementById("sab"),
    ];

    // Atualizar o horário no elemento
    relo.innerHTML = `${hora}:${min}`;

    // Limpar cores de todos os dias
    dias.forEach((dia) => (dia.style.color = ""));

    // Destacar o dia atual
    dias[semana].style.color = "white";
}

// Configurar a atualização contínua a cada segundo
setInterval(atualizarHorario, 1000);
