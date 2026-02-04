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
        // ... остальные завтраки
    ],
    lunch: [
        // ... рецепты обеда
    ],
    dinner: [
        {
            title: "Белковый рулет с крабовыми палочками",
            photo: "белковый_рулет.png",
            ingredients: [
                "1 яйцо + 1 белок",
                "крабовые палочки 50-70 г",
                "помидор 1 шт. средний",
                "сметана 1-2 ст. л.",
                "зелень по вкусу",
                "соль и специи"
            ],
            steps: [
                { step: "Яйцо и белок взбить с щепоткой соли и специями." },
                { step: "Вылить на сковороду, жарить 1 минуту с каждой стороны до готовности омлета." },
                { step: "Крабовые палочки нарезать кубиками, помидор мелко нарезать." },
                { step: "Смешать крабовые палочки, помидор, сметану и зелень." },
                { step: "Выложить начинку на омлет, свернуть в рулет." },
                { step: "При желании можно слегка подрумянить рулет на сковороде." }
            ],
            time: "15 минут",
            calories: 180,
            note: "День: 2-й ужин"
        },
        {
            title: "Салат с кальмаром",
            photo: "салат_кальмар.png",
            ingredients: [
                "кальмар 150 г",
                "огурец 1 шт.",
                "яйцо 1 шт.",
                "сметана 2 ст. л.",
                "специи по вкусу"
            ],
            steps: [
                { step: "Кальмара очистить, опустить в кипящую воду, варить не более 10 минут (иначе станет резиновым). Охладить и нарезать соломкой." },
                { step: "Яйцо взбить со щепоткой соли, вылить на сковороду, жарить 1-2 минуты с каждой стороны до готовности омлета. Остудить и нарезать полосками." },
                { step: "Огурец нарезать соломкой или полукружочками." },
                { step: "Соединить кальмара, омлет и огурец в миске." },
                { step: "Заправить сметаной, добавить специи по вкусу, аккуратно перемешать." }
            ],
            time: "20 минут",
            calories: 210,
            note: "День: 3-й ужин"
        },
        {
            title: "Салат с креветками",
            photo: "салат_креветки.png",
            ingredients: [
                "креветки 100-150 г",
                "капуста пекинская 100 г",
                "помидоры черри 5-7 шт.",
                "соевый соус 1 ст. л.",
                "горчица 1 ч. л. для заправки"
            ],
            steps: [
                { step: "Капусту нашинковать, помидоры черри разрезать пополам." },
                { step: "Выложить капусту и помидоры на тарелку горкой." },
                { step: "Креветки обжарить на сковороде 2-3 минуты." },
                { step: "Влить соевый соус к креветкам, жарить ещё 2-3 минуты, пока соус не начнет выпариваться." },
                { step: "Выложить горячие креветки на овощную подушку." },
                { step: "Подавать с горчицей в качестве заправки." }
            ],
            time: "15 минут",
            calories: 190,
            note: "День: 8-й ужин"
        },
        {
            title: "Запеканка с горбушей и брокколи",
            photo: "запеканка_горбуша.png",
            ingredients: [
                "брокколи 150 г",
                "горбуша 150 г",
                "сметана 10% 3-4 ст. л.",
                "яйцо 1 шт.",
                "специи по вкусу"
            ],
            steps: [
                { step: "Брокколи разобрать на соцветия, можно бланшировать 2-3 минуты в кипятке." },
                { step: "Горбушу нарезать на небольшие кусочки." },
                { step: "В миске соединить сметану с яйцом и специями, взбить вилкой." },
                { step: "Добавить брокколи и горбушу к соусу, аккуратно перемешать." },
                { step: "Выложить смесь в форму для запекания." },
                { step: "Выпекать при 160-180°С 20-25 минут до золотистой корочки." }
            ],
            time: "30 минут",
            calories: 240,
            note: "День: 10-й ужин"
        },
        {
            title: "Макароны с копчёными колбасками в сливочном соусе",
            photo: "макароны_колбаски.png",
            ingredients: [
                "макароны из твёрдых сортов пшеницы 200 г",
                "копчёные колбаски или копчёная колбаса 100 г",
                "помидор 180 г (1 шт.)",
                "сливки 20% 150 мл",
                "твёрдый сыр 100 г",
                "фиолетовый лук 60 г (½ шт.)",
                "чеснок 1 зубчик",
                "соль 1 ч. л.",
                "чёрный молотый перец щепотка",
                "сушёный базилик ½ ч. л.",
                "растительное масло 30 мл (2 ст. л.)",
                "свежая кинза или петрушка для подачи"
            ],
            steps: [
                { step: "Лук мелко нарежьте кубиками, чеснок порубите, колбаски — тонкими кружочками." },
                { step: "Разогрейте масло в глубокой сковороде, обжарьте лук, чеснок и колбаски 3–4 минуты до золотистости." },
                { step: "Помидор залейте кипятком на 1 минуту, снимите кожицу и нарежьте мелкими кубиками." },
                { step: "Добавьте помидор в сковороду, жарьте 1–2 минуты до мягкости." },
                { step: "Влейте сливки, добавьте базилик, ½ ч. л. соли и перец. Тушите 7–8 минут на среднем огне до загустения соуса." },
                { step: "Параллельно отварите макароны в 1,5 л подсолённой воды (½ ч. л. соли) 10–12 минут до готовности. Слейте воду." },
                { step: "Добавьте макароны в сковороду с соусом, хорошо перемешайте." },
                { step: "Добавьте тёртый на крупной тёрке сыр, перемешайте и прогрейте 1 минуту до расплавления." },
                { step: "Подавайте с свежей зеленью." }
            ],
            time: "30 минут",
            calories: 420
        }
    ],
    dessert: [
        // ... рецепты десертов
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
    
    // Показываем кнопку обновления сразу после выбора категории
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.style.display = "inline-block";
    }
    
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

    // Добавляем примечание, если оно есть
    const noteElement = document.getElementById("note");
    if (recipe.note) {
        noteElement.innerHTML = `<span>Примечание:</span> ${recipe.note}`;
        noteElement.style.display = "block";
    } else {
        noteElement.style.display = "none";
    }

    // ВСЕГДА показываем кнопку обновления, когда рецепт сгенерирован
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.style.display = "inline-block";
    }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", generateRecipe);
        // Изначально скрываем кнопку
        refreshBtn.style.display = "none";
    }

    // Закрытие модального окна при клике вне его
    const modal = document.getElementById("modal");
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    console.log('Генератор рецептов загружен!');
});
