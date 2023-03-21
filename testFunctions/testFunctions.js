const {By} = require('selenium-webdriver')

const movie = 'Sonic the Hedgehog.'

const movieWatched = async (driver) => {
    //adds a movie to the list
    await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n")
    //clicks the movie to mark it as 'checked' in it's class
    await driver.findElement(By.xpath("//li/span")).click()
    //sets a varible to the value of true of false depending if consitions were met
    const checked = await driver.findElement(By.className('checked'))
    //states what we were expecting for the out come.
    expect(checked.isDisplayed()).toBeTruthy()
}

const textHide = async (driver) =>{
    const added = await driver.findElement(By.className('hide'))
    const addedText = added.getText()
    expect(added.isDisplayed()).toBeTruthy()
}

const addedText = async (driver) =>{
    const added = await driver.findElement(By.id('message'))
    const addedText = added.getText()
    expect(addedText).toStrictEqual(added.getText())
}

module.exports = {
    movieWatched,
    textHide,
    addedText
}