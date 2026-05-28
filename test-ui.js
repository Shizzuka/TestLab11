const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runUITests() {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        await driver.get('file://' + __dirname + '/index.html');
        
        let inputVal = await driver.findElement(By.id('nameInput')).getAttribute('value');
        if (!inputVal.includes('Никита')) {
            throw new Error('UI Тест провален: Неверное значение в поле ввода');
        }

        let btnText = await driver.findElement(By.id('submitBtn')).getText();
        if (btnText !== 'Подтвердить') {
            throw new Error(`UI Тест провален: Ожидалось "Подтвердить", получено "${btnText}"`);
        }

        console.log('UI тесты успешно пройдены!');
    } finally {
        await driver.quit();
    }
})();