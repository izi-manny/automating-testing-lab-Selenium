import { Builder, Capabilities, By } from "selenium-webdriver"
import {beforeAll, afterAll, test} from '@jest/globals'


const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('should add a movie to the page', async () => {
    await driver.findElement(By.css('input')).sendKeys('Star Wars')

    await driver.findElement(By.css('button')).click()

    await driver.sleep(3000)
})