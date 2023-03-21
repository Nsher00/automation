const { Builder, Capabilities } = require("selenium-webdriver")
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { movieWatched, addedText, textHide } = require('../testFunctions/testFunctions')

beforeAll(async ()=>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

describe('movie list funtions test.', ()=>{
    it('movie was watched', async ()=>{
        await movieWatched(driver)
        await driver.sleep(3000)
    })

    it('text was hidden', async ()=>{
        await textHide(driver)
        await driver.sleep(3000)
    })

    it('movie title is on the message text', async ()=>{
        await addedText(driver)
        await driver.sleep(3000)
    })
})