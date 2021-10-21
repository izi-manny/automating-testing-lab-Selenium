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
    // await driver.findElement(By.css('input')).sendKeys('Star Wars')
    // await driver.findElement(By.css('button')).click()

    let addMovie = await driver.findElement(By.xpath('//form//input'))

    // Add Star Wars to the Movie List
    await addMovie.sendKeys('Star Wars\n')

    await driver.sleep(1000)

    // Marked Star Wars as Watched
    await driver.findElement(By.xpath("//span[text()='Star Wars']")).click()
    await driver.sleep(1000)

    await addMovie.sendKeys('Inside Out\n')
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//span[text()='Inside Out']")).click()
    await driver.sleep(1000)

    await addMovie.sendKeys('Star Wars: The Rise of Skywalker\n')
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//span[text()='Star Wars: The Rise of Skywalker']")).click()
    await driver.sleep(1000)

    // Delete Star Wars from the Movie List
    await driver.findElement(By.id('StarWars:TheRiseofSkywalker')).click()
    await driver.sleep(1000)
})