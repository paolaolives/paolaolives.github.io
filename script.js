const weeks = [
    {
        week: "Semana 1 – Adaptarse",
        days: {
            "Lunes": ["20 sentadillas", "15 abdominales bicicleta", "20 lunges", "20 flutter kicks", "15 push-ups", "30 seg plancha"],
            "Martes": ["15 sentadillas con salto", "20 glute bridge", "15 sumo squats", "20 donkey kicks por pierna", "15 step-ups", "40 mountain climbers"],
            "Miércoles": ["15 dips", "20 elevaciones laterales", "15 superman", "20 abdominales elevadas", "30 seg plancha lateral", "20 jumping jacks"],
            "Jueves": ["20 crunch", "20 elevaciones de pierna", "15 sumo squat pulse", "20 seg plancha + 10 climbers", "20 sentadillas", "1 min jumping jacks"],
            "Viernes": ["15 hip thrust", "20 fire hydrants", "15 superman + pulso", "20 jumping jacks", "10 burpees", "1 min plancha"],
            "Sábado": ["30 min HIIT", "20 min estiramiento profundo"],
            "Domingo": ["Caminar 30 min", "Estiramiento", "Visualización de metas"]
        }
    },
    {
        week: "Semana 2 – Resistencia",
        days: {
            "Lunes": ["4 rondas: mismos ejercicios + 20 seg descanso"],
            "Martes": ["4 rondas: mismos ejercicios + peso ligero"],
            "Miércoles": ["4 rondas: enfócate en forma + carga ligera"],
            "Jueves": ["3 rondas intensas + bonus de burpees"],
            "Viernes": ["Mismos ejercicios + peso progresivo"],
            "Sábado": ["HIIT + nuevos movimientos rápidos"],
            "Domingo": ["Respira, evalúa y estira profundamente"]
        }
    },
    {
        week: "Semana 3 – Intensidad Progresiva",
        days: {
            "Lunes": ["4 rondas con mochila con libros (2–5 kg)"],
            "Martes": ["Más explosividad y menos descanso"],
            "Miércoles": ["Cargas en brazos con botellas pesadas"],
            "Jueves": ["Sumo squat pulse con peso", "Crunches lentos y fuertes"],
            "Viernes": ["Hip thrusts más lentos + 3 seg pulso"],
            "Sábado": ["HIIT 30 min a máxima energía"],
            "Domingo": ["Descanso mental y estiramiento guiado"]
        }
    },
    {
        week: "Semana 4 – Definición Final",
        days: {
            "Lunes": ["5 rondas full body", "Push-ups con palmada"],
            "Martes": ["Glúteo con mochila + pausa 2 seg en reps"],
            "Miércoles": ["Planchas con shoulder taps", "Superman lentos"],
            "Jueves": ["Circuito sin descanso + burpees extremos"],
            "Viernes": ["Último test: 6 rondas si puedes"],
            "Sábado": ["HIIT con música + visualización de victoria"],
            "Domingo": ["Cierre total: reflexión + reset"]
        }
    }
];

function createWeek(weekObj, index) {
    const weekDiv = document.createElement("div");
    weekDiv.className = "week";
    const title = document.createElement("h2");
    title.textContent = weekObj.week;
    weekDiv.appendChild(title);

    for (const [day, exercises] of Object.entries(weekObj.days)) {
        const dayTitle = document.createElement("h3");
        dayTitle.textContent = day;
        weekDiv.appendChild(dayTitle);

        exercises.forEach((exercise, exIndex) => {
            const exDiv = document.createElement("div");
            exDiv.className = "exercise";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `w${index}-d${day}-${exIndex}`;
            checkbox.checked = localStorage.getItem(checkbox.id) === "true";
            checkbox.addEventListener("change", () => {
                localStorage.setItem(checkbox.id, checkbox.checked);
            });
            const label = document.createElement("label");
            label.textContent = exercise;
            label.setAttribute("for", checkbox.id);
            exDiv.appendChild(checkbox);
            exDiv.appendChild(label);
            weekDiv.appendChild(exDiv);
        });
    }

    return weekDiv;
}

function renderWeeks() {
    const container = document.getElementById("weeks-container");
    weeks.forEach((week, index) => {
        const weekElem = createWeek(week, index);
        container.appendChild(weekElem);
    });
}

function resetProgress() {
    if (confirm("¿Reiniciar todo el progreso?")) {
        localStorage.clear();
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", renderWeeks);
