async function fetchDataAndProcess() {
    try {
        // Отправляем запрос к указанному URL
        const response = await fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json');
        const data = await response.json(); // Получаем JSON данные

        // Извлекаем необходимую информацию
        const address = `Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`;
        const personInfo = `фамилия ${data.person.lastName} имя ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`;

        // Выводим результаты
        console.log(address);
        console.log(personInfo);
    } catch (error) {
        console.error('Ошибка при получении или обработке данных:', error);
    }
}

// Вызываем функцию для выполнения запроса и обработки данных
fetchDataAndProcess();
