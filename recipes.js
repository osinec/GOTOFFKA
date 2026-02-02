let currentCategory = null;

const data = {
    breakfast: [
        {
            title: "Омлет с сыром",
            photo: "https://images.unsplash.com/photo-1601050690462-6f105289b9c4",
            ingredients: ["2 яйца", "50 г сыра", "щепотка соли", "масло для жарки"],
            steps: [
                { step: "Взбейте яйца с щепоткой соли.", time: "2 мин" },
                { step: "Разогрейте сковороду с маслом.", time: "1 мин" },
                { step: "Вылейте яйца и готовьте на среднем огне.", time: "5 мин" },
                { step: "Добавьте сыр, накройте крышкой на 2 минуты.", time: "2 мин" }
            ],
            time: "10 минут",
            calories: 250
        }
    ],
    lunch: [
        {
            title: "Паста с томатным соусом",
            photo: "https://images.unsplash.com/photo-1603074171968-8f0a2a8b7221",
            ingredients: ["100 г пасты", "100 мл томатного соуса", "сыр", "базилик"],
            steps: [
                { step: "Отварите пасту согласно инструкции.", time: "10 мин" },
                { step: "Разогрейте соус и смешайте с пастой.", time: "5 мин" },
                { step: "Посыпьте сыром и базиликом.", time: "2 мин" }
            ],
            time: "17 минут",
            calories: 400
        }
    ],
    dinner: [
        {
            title: "Запечённый лосось",
            photo: "https://images.unsplash.com/photo-1604908177520-9ff9c4aeb1d0",
            ingredients: ["200 г лосося", "специи", "лимон"],
            steps: [
                { step: "Разогрейте духовку до 180°C.", time: "5 мин" },
                { step: "Приправьте лосось специями и лимоном.", time: "2 мин" },
                { step: "Запеките лосось 15 минут.", time: "15 мин" }
            ],
            time: "22 минуты",
            calories: 350
        }
    ],
    dessert: [
        {
            title: "Шоколадный мусс",
            photo: "https://images.unsplash.com/photo-1615475277807-b89ecb00e3a4",
            ingredients: ["100 г шоколада", "2 яйца", "50 мл сливок", "сахар по вкусу"],
            steps: [
                { step: "Растопите шоколад на водяной бане.", time: "5 мин" },
                { step: "Взбейте яйца со сливками и сахаром.", time: "3 мин" },
                { step: "Смешайте шоколад с взбитой массой.", time: "2 мин" },
                { step: "Охладите в холодильнике минимум 5 минут.", time: "5 мин" }
            ],
            time: "15 минут",
            calories: 300
        }
    ]
};

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function selectCategory(category) {
    currentCategory = category;
    document.getElementById("category").innerText = category.toUpperCase();
    generateRecipe();
    closeModal();
    document.getElementById("refresh").style.display = "inline-block";
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipe() {
    if (!currentCategory) return;
    const c = random(data[currentCategory]);

    document.getElementById("title").innerText = c.title;

    const photoEl = document.getElementById("photo");
    photoEl.src = c.photo;
    photoEl.style.display = "block";

    document.getElementById("ingredients").innerHTML = `<span>Ингредиенты:</span> ${c.ingredients.join(", ")}`;

    const stepsEl = document.getElementById("steps");
    stepsEl.innerHTML = "";
    c.steps.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `${s.step} (${s.time})`;
        stepsEl.appendChild(li);
    });

    document.getElementById("time").innerHTML = `<span>Общее время:</span> ${c.time}`;
    document.getElementById("calories").innerHTML = `<span>Калории:</span> ${c.calories} ккал`;
}

// Новая функция: кнопка "Случайный рецепт"
function randomRecipe() {
    if (!currentCategory) {
        const categories = Object.keys(data);
        currentCategory = random(categories);
        document.getElementById("category").innerText = currentCategory.toUpperCase();
        document.getElementById("refresh").style.display = "inline-block";
    }
    generateRecipe();
}
