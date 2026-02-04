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
            photo: "Ленивый_хачапури.png",
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
            title: "Куриная запеканка с овощами",
            photo: "куриная_запеканка.png",
            ingredients: [
                "Куриное филе — 100 г",
                "Баклажан — 100 г",
                "Помидор — 1 шт.",
                "Лук — 1 шт.",
                "Сыр — 1 ст. л.",
                "Сметана — 20 г",
                "Специи по вкусу"
            ],
            steps: [
                { step: "Обжарьте кубиками курицу и баклажаны с луком, добавьте специи." },
                { step: "Влейте яйцо, добавьте помидор и сметану, перемешайте." },
                { step: "Выложите в форму для запекания, запекайте 30 минут при 180°C." },
                { step: "Добавьте сметану, запекайте ещё 5 минут." }
            ],
            time: "40 минут",
            calories: 320,
            note: "День: 1-й обед"
        },
        {
            title: "Курочка тушеная с фасолью",
            photo: "курица_с_фасолью.png",
            ingredients: [
                "Куриное филе — 100 г",
                "Помидор — 1 шт.",
                "Болгарский перец — 1 шт.",
                "Лук — ½ шт.",
                "Фасоль консервированная — 100 г",
                "Томатная паста/соус — 1 ст. л.",
                "Специи и зелень по вкусу"
            ],
            steps: [
                { step: "Обжарьте курицу 5 минут, добавьте лук, готовьте 3–4 минуты." },
                { step: "Влейте томатную пасту, добавьте перец, помидор, специи, тушите 5–7 минут." },
                { step: "Добавьте фасоль, перемешайте, накройте крышкой и тушите до готовности." }
            ],
            time: "25 минут",
            calories: 280,
            note: "День: 6-й обед"
        },
        {
            title: "Куриный рулет с яйцом и ветчиной",
            photo: "куриный_рулет.png",
            ingredients: [
                "Куриная грудка — 150 г",
                "Лук — ½ шт.",
                "Яйцо — 1 шт.",
                "Ветчина — 30–50 г",
                "Паприка/специи по вкусу"
            ],
            steps: [
                { step: "Измельчите грудку в блендере с луком и специями." },
                { step: "Если масса густая, разбавьте молоком." },
                { step: "На пергамент выложите смесь, добавьте ветчину и яйцо, сверните в рулет." },
                { step: "Запекайте при 180°C 25–30 минут." }
            ],
            time: "40 минут",
            calories: 350,
            note: "День: 7-й обед"
        },
        {
            title: "Рыба с горчицей и сметаной",
            photo: "рыба_с_горчицей.png",
            ingredients: [
                "Рыба (филе: палтус, минтай, горбуша) — 150–200 г",
                "Сметана — 1 ст. л.",
                "Горчица — 1 ст. л.",
                "Сыр — 10 г"
            ],
            steps: [
                { step: "Посолите рыбу, выложите в форму." },
                { step: "Смешайте сметану с горчицей, намажьте на рыбу." },
                { step: "Запекайте при 180°C 15–20 минут." },
                { step: "За 5 минут до готовности добавьте сыр." }
            ],
            time: "25 минут",
            calories: 220,
            note: "День: 8-й обед"
        },
        {
            title: "Говядина с томатами и перцем",
            photo: "говядина_с_томатами.png",
            ingredients: [
                "Говядина (вырезка) — 150 г",
                "Помидор — 1 шт.",
                "Болгарский перец — 1 шт.",
                "Лук — ½ шт.",
                "Томатная паста — 1 ст. л.",
                "Специи/соль по вкусу"
            ],
            steps: [
                { step: "Обжарьте говядину на масле 10 минут." },
                { step: "Добавьте лук, готовьте 3–5 минут." },
                { step: "Влейте томатную пасту, добавьте перец, специи." },
                { step: "Тушите под крышкой до готовности." }
            ],
            time: "30 минут",
            calories: 280,
            note: "День: 10-й обед"
        }
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
                "100 г творожки/йогурта + подсластитель + щепотка соли (для крема)"
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

// Кэш для предзагрузки изображений
const imageCache = new Map();
const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGMEYwRjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjODg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+PHQzc3Bhbj5Gb29kIEltYWdlPC90c3Bhbj48L3RleHQ+PC9zdmc+';

// Предзагрузка изображений для быстрого отображения
function preloadImages() {
    console.log('Начинаем предзагрузку изображений...');
    
    const allRecipes = Object.values(data).flat();
    let loadedCount = 0;
    const totalImages = allRecipes.length;
    
    allRecipes.forEach(recipe => {
        if (recipe.photo) {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                imageCache.set(recipe.photo, img);
                if (loadedCount === totalImages) {
                    console.log('Все изображения загружены!');
                }
            };
            img.onerror = () => {
                loadedCount++;
                console.log(`Ошибка загрузки: ${recipe.photo}`);
                // Используем fallback изображение
                const fallbackImg = new Image();
                fallbackImg.src = fallbackImage;
                imageCache.set(recipe.photo, fallbackImg);
            };
            img.src = recipe.photo;
        }
    });
}

// Функции для работы с модальным окном
function openModal() {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
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
    
    // Сначала скрываем изображение
    photoEl.style.display = "none";
    
    // Используем кэшированное изображение или загружаем новое
    if (imageCache.has(recipe.photo)) {
        const cachedImg = imageCache.get(recipe.photo);
        photoEl.src = cachedImg.src;
        photoEl.style.display = "block";
        console.log('Изображение загружено из кэша:', recipe.title);
    } else {
        // Если нет в кэше, загружаем с обработкой ошибок
        photoEl.onload = function() {
            this.style.display = "block";
            console.log('Изображение загружено напрямую:', recipe.title);
        };
        photoEl.onerror = function() {
            console.log('Ошибка загрузки изображения, используем fallback:', recipe.title);
            this.src = fallbackImage;
            this.style.display = "block";
        };
        photoEl.src = recipe.photo;
    }
    
    photoEl.alt = recipe.title;

    // Отображаем ингредиенты
    const ingredientsText = recipe.ingredients.join(", ");
    document.getElementById("ingredients").innerHTML = `<span>Ингредиенты:</span> ${ingredientsText}`;

    // Отображаем шаги приготовления
    const stepsEl = document.getElementById("steps");
    stepsEl.innerHTML = "";
    recipe.steps.forEach((s, index) => {
        const li = document.createElement("li");
        li.innerText = `${index + 1}. ${s.step}`;
        stepsEl.appendChild(li);
    });

    // Отображаем время и калории
    document.getElementById("time").innerHTML = `<span>Время приготовления:</span> ${recipe.time}`;
    document.getElementById("calories").innerHTML = `<span>Калорийность:</span> ${recipe.calories} ккал`;

    // Добавляем примечание, если оно есть
    const noteElement = document.getElementById("note");
    if (noteElement) {
        if (recipe.note) {
            noteElement.innerHTML = `<span>Примечание:</span> ${recipe.note}`;
            noteElement.style.display = "block";
        } else {
            noteElement.style.display = "none";
        }
    }

    // ВСЕГДА показываем кнопку обновления, когда рецепт сгенерирован
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.style.display = "inline-block";
    }
    
    // Прокручиваем к началу для удобства
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    console.log('Генератор рецептов загружен! Всего рецептов:', 
        Object.values(data).reduce((sum, arr) => sum + arr.length, 0));
    
    // Предзагрузка изображений
    setTimeout(preloadImages, 100);
    
    // Назначаем обработчики для кнопок
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", generateRecipe);
        refreshBtn.style.display = "none";
    }
    
    // Назначаем обработчики для кнопок в модальном окне
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category') || this.getAttribute('onclick')?.match(/selectCategory\('(\w+)'\)/)?.[1];
            if (category) {
                selectCategory(category);
            }
        });
    });

    // Закрытие модального окна при клике вне его
    const modal = document.getElementById("modal");
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Закрытие модального окна по клавише Escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal && modal.style.display === "flex") {
            closeModal();
        }
    });

    // Инициализация примечания
    const noteElement = document.getElementById("note");
    if (noteElement) {
        noteElement.style.display = "none";
    }
});

// Экспортируем функции для использования в HTML
window.openModal = openModal;
window.closeModal = closeModal;
window.selectCategory = selectCategory;
window.generateRecipe = generateRecipe;
