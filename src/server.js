const request = require('request')
const express = require('express')
const app = express()
const path = require('path')

console.log(path.join(__dirname, "../dist"))

app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, "../node_modules")))

const port = 8080
app.listen(port, function (req, res) {
    console.log("You're connected to the server: All good, OK.")
})

// \\ 03 - Set Up Your Server
app.get("/sanity", function (req, res) {
    console.log("OK")
})


// 04 Request to the Recipe API
app.get("/recipes/:ingredient", function (req, res) {
    const ingredient = req.params.ingredient
    console.log(ingredient)

    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {

        const recipe = JSON.parse(response.body)

        const recipeData = recipe.results.map(p => {
            return {
                title: p.title,
                videoLink: p.href,
                picture: p.thumbnail,
                ingredients: p.ingredients
            }
        })

        console.log(recipeData)
        res.send(recipeData)
    })
})