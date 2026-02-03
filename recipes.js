// База данных рецептов
let currentCategory = null;

const data = {
    breakfast: [
        {
            title: "Грибной омлет",
            photo: "грибной омлет(завтрак).png",
            ingredients: ["шампиньоны 100 - 150 гр", "2 яйца", "соль и специи", "лук 1/4"],
            steps: [
                { step: "Грибы режем произвольно, лук измельчаем" },
                { step: "Обжариваем на масле до золотистого цвета" },
                { step: "Яйца взбиваем вилкой и выливаем на обжаренные грибы" },
                { step: "Можно все перемешать - получится скрамбл / пожарить на каждой стороне, как блин" }
            ],
            time: "10 минут",
            calories: 250
        },
        {
            title: "Бутерброды из отрубей (муки или овсянки)",
            photo: "Бутерброды_из_отрубей.png",
            ingredients: [
                "2 ст. л. отрубей (пшеничных или овсяных)",
                "1 яйцо",
                "1,5 ст. л. мягкого творога или сметаны",
                "1/3 ч. л. разрыхлителя",
                "соль, перец, зелень (по вкусу)"
            ],
            steps: [
                { step: "Смешать все ингредиенты." },
                { step: "Выпекать в микроволновке 4 минуты." },
                { step: "Дать остыть, затем намазать хлебную основу на кусок хруста." },
                { step: "Варианты начинки: ветчина 30 г + вареное яйцо + зелень; запеченные баклажаны с чесноком и помидором 100 г; тунец 50 г + яйцо + сметана + зелень; малосоленая рыба 30 г + сметана + зелень." }
            ],
            time: "4 минуты + остывание",
            calories: 180
        },
        {
            title: "Ленивые пирожки с зеленым луком",
            photo: "ленивые_пирожки.png",
            ingredients: [
                "2 яйца (сварить вкрутую)",
                "1 яичный белок (сырой)",
                "зелёный лук — по вкусу",
                "1 ст. ложка сметаны",
                "½ ст. ложки муки",
                "специи — по вкусу"
            ],
            steps: [
                { step: "Нарежьте варёные яйца кубиками, смешайте с мелко нарезанным луком." },
                { step: "В отдельной миске взбейте сырой белок со сметаной, мукой и специями." },
                { step: "Соедините обе смеси, аккуратно перемешайте." },
                { step: "Жарьте на сковороде под крышкой по 3 минуты с каждой стороны." }
            ],
            time: "15 минут",
            calories: 200
        },
        {
            title: "Блинчики с медом",
            photo: "блинчики_мед.jpg",
            ingredients: ["100 г муки", "1 яйцо", "100 мл молока", "мед"],
            steps: [
                { step: "Смешайте муку, яйцо и молоко до однородности." },
                { step: "Выпекайте блины на сковороде." },
                { step: "Полейте медом перед подачей." }
            ],
            time: "10 минут",
            calories: 220
        },
        {
            title: "Ленивые хачапури на кефире",
            photo: "завтрак_хачапури.png",
            ingredients: [
                "100 г сыра (лучше сулугуни + мягкий сыр)",
                "1 яйцо",
                "100 мл кефира (или йогурт/сметана)",
                "50 г муки",
                "15 г сливочного масла",
                "соль (по необходимости — сулугуни и так солёный)"
            ],
            steps: [
                { step: "Натрите сыр на тёрке, добавьте яйцо и кефир, перемешайте." },
                { step: "Всыпьте муку до консистенции густой сметаны." },
                { step: "Вылейте тесто на сковороду с разогретым маслом, разровняйте." },
                { step: "Жарьте под крышкой на малом огне до сухости сверху (~5–7 мин)." },
                { step: "Переверните и дожарьте до золотистой корочки с другой стороны." },
                { step: "Остудите немного, нарежьте порциями, подавайте со сметаной или зеленью." }
            ],
            time: "20 минут",
            calories: 280
        }
    ],
    lunch: [
        {
            title: "Паста с томатным соусом",
            photo: "sup.png",
            ingredients: ["100 г пасты", "100 мл томатного соуса", "сыр", "базилик"],
            steps: [
                { step: "Отварите пасту согласно инструкции." },
                { step: "Разогрейте соус и смешайте с пастой." },
                { step: "Посыпьте сыром и базиликом." }
            ],
            time: "17 минут",
            calories: 400
        },
        {
            title: "Салат Цезарь",
            photo: "sup.png",
            ingredients: ["Листья салата", "Курица", "Сыр Пармезан", "Сухарики", "Соус Цезарь"],
            steps: [
                { step: "Нарежьте курицу и обжарьте." },
                { step: "Смешайте салат, курицу, сыр и сухарики." },
                { step: "Добавьте соус Цезарь." }
            ],
            time: "14 минут",
            calories: 350
        },
        {
            title: "Рис с овощами",
            photo: "sup.png",
            ingredients: ["100 г риса", "100 г овощей", "масло", "соевый соус"],
            steps: [
                { step: "Отварите рис." },
                { step: "Обжарьте овощи на масле." },
                { step: "Смешайте рис с овощами и соевым соусом." }
            ],
            time: "17 минут",
            calories: 300
        }
    ],
    dinner: [
        {
            title: "Запечённый лосось",
            photo: "https://images.unsplash.com/photo-1604908177520-9ff9c4aeb1d0?w=400&h=300&fit=crop",
            ingredients: ["200 г лосося", "специи", "лимон"],
            steps: [
                { step: "Разогрейте духовку до 180°C." },
                { step: "Приправьте лосось специями и лимоном." },
                { step: "Запеките лосось 15 минут." }
            ],
            time: "22 минуты",
            calories: 350
        },
        {
            title: "Курица с овощами",
            photo: "sup.png",
            ingredients: ["200 г курицы", "овощи", "масло", "специи"],
            steps: [
                { step: "Обжарьте курицу до золотистой корочки." },
                { step: "Добавьте овощи и специи." },
                { step: "Тушите до готовности." }
            ],
            time: "22 минуты",
            calories: 320
        },
        {
            title: "Спагетти с овощами",
            photo: "sup.png",
            ingredients: ["100 г спагетти", "овощи", "соус", "сыр"],
            steps: [
                { step: "Отварите спагетти." },
                { step: "Обжарьте овощи с соусом." },
                { step: "Смешайте спагетти с овощами и посыпьте сыром." }
            ],
            time: "17 минут",
            calories: 330
        }
    ],
    dessert: [
        {
            title: "Шоколадный мусс",
            photo: "sup.png",
            ingredients: ["100 г шоколада", "2 яйца", "50 мл сливок", "сахар по вкусу"],
            steps: [
                { step: "Растопите шоколад на водяной бане." },
                { step: "Взбейте яйца со сливками и сахаром." },
                { step: "Смешайте шоколад с взбитой массой." },
                { step: "Охладите в холодильнике минимум 5 минут." }
            ],
            time: "15 минут",
            calories: 300
        },
        {
            title: "Фруктовый салат",
            photo: "sup.png",
            ingredients: ["Фрукты по вкусу", "мед", "йогурт"],
            steps: [
                { step: "Нарежьте фрукты." },
                { step: "Смешайте с йогуртом и медом." }
            ],
            time: "5 минут",
            calories: 150
        },
        {
            title: "Печенье овсяное",
            photo: "sup.png",
            ingredients: ["100 г овсяных хлопьев", "50 г сахара", "1 яйцо", "масло"],
            steps: [
                { step: "Смешайте все ингредиенты." },
                { step: "Выложите тесто на противень и выпекайте 10 минут." }
            ],
            time: "15 минут",
            calories: 200
        },
        {
            title: "Десерт на отрубях с кремом",
            photo: "десерт_отруби_крем.png",
            ingredients: [
                "2 ст. ложки пшеничных/овсяных отрубей",
                "1 яйцо",
                "1 ст. ложка творожка или сметаны",
                "½ ч. ложки разрыхлителя",
                "100 мл кофе или какао с сахаром (для пропитки)",
                "100 г творожка/йогурта + подсластитель + щепотка соли (для крема)"
            ],
            steps: [
                { step: "Смешайте отруби, яйцо, творожок и разрыхлитель. Дайте постоять 1–2 минуты." },
                { step: "Выложите в форму для микроволновки, готовьте 4 минуты на полной мощности (пару раз откройте дверцу для выхода пара)." },
                { step: "Пропитайте готовый корж кофе или какао." },
                { step: "Смажьте кремом (творожок + подсластитель + соль). При желании соберите слоями." }
            ],
            time: "10 минут",
            calories: 180
        }
    ]
};

// Функции для работы с модальным окном
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Выбор категории
function selectCategory(category) {
    currentCategory = category;
    closeModal();
    generateRecipe();
}

// Генерация случайного рецепта
function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipe() {
    if (!currentCategory) {
        alert('Сначала выберите категорию!');
        openModal();
        return;
    }

    if (!data[currentCategory]) {
        alert('Рецепты для этой категории не найдены!');
        return;
    }

    const recipe = random(data[currentCategory]);

    // Обновляем данные на странице
    document.getElementById("category").innerText = currentCategory.toUpperCase();
    document.getElementById("title").innerText = recipe.title;

    const photoEl = document.getElementById("photo");
    photoEl.src = recipe.photo;
    photoEl.style.display = "block";
    photoEl.alt = recipe.title;

    // Отображаем ингредиенты
    const ingredientsText = recipe.ingredients.join(", ");
    document.getElementById("ingredients").innerHTML = `<span>Ингредиенты:</span> ${ingredientsText}`;

    // Отображаем шаги приготовления
    const stepsEl = document.getElementById("steps");
    stepsEl.innerHTML = "";
    recipe.steps.forEach((s, index) => {
        const li = document.createElement("li");
        li.innerText = s.step;
        stepsEl.appendChild(li);
    });

    // Отображаем время и калории
    document.getElementById("time").innerHTML = `<span>Время приготовления:</span> ${recipe.time}`;
    document.getElementById("calories").innerHTML = `<span>Калорийность:</span> ${recipe.calories} ккал`;

    // Показываем кнопку обновления
    document.getElementById("refresh").style.display = "inline-block";
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", generateRecipe);
    }

    // Закрытие модального окна при клике вне его
    document.getElementById("modal").addEventListener("click", function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    console.log('Генератор рецептов загружен!');
});
