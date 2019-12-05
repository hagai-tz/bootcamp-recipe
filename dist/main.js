const render = new Renderer 


// 05 - Client Setup
$("#ingredient-btn").on("click", function () {
    let ingredientInput = $("#ingredient-input").val()
    console.log(ingredientInput)

    $.get(`/recipes/${ingredientInput}`, function (ingredientRecipe) {
        console.log(ingredientRecipe)
        render.renderIngredients(ingredientRecipe)
        // renderTeam(teamData)
    })

})

// 07 - img listner

$("#container").on("click", ".picture-design" ,function(){
    let firstIng = $(this).siblings(".ingredient").text()
    // let firstIng = $(this).children("li.first")
    console.log(firstIng)
    })  
