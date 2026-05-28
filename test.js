const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
    let options = new chrome.Options();
    options.addArguments('--headless'); // Обязательно для серверов GitHub Actions
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        // Открываем локальный файл
        await driver.get('file://' + __dirname + '/index.html');
        
        // Тест 1: Проверка наличия инпута
        let input = await driver.findElement(By.id('nameInput'));
        if (!input) throw new Error('Тест провален: Поле ввода не найдено');

        // Тест 2: Проверка текста на кнопке
        let btnText = await driver.findElement(By.id('submitBtn')).getText();
        if (btnText !== 'Отправить') throw new Error(`Тест провален: Неверный текст кнопки - ${btnText}`);

        console.log('Все UI тесты успешно пройдены!');
    } finally {
        await driver.quit();
    }
})();