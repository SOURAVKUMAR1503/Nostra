var closeOffer = document.getElementById("closeOffer")
var offerBar = document.getElementById("offerBar")

if (closeOffer && offerBar) {

    closeOffer.addEventListener("click", function() {

        offerBar.style.display = "none"

    })

}

var filterButtons = document.querySelectorAll(".filter-btn")

var products = document.querySelectorAll(".collection-product")


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        var category = button.getAttribute("data-category")

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active")

        })

        button.classList.add("active")

        products.forEach(function(product) {

            var productCategory =
                product.getAttribute("data-category")


            if (category === "all") {

                product.style.display = "block"

            }

            else if (productCategory === category) {

                product.style.display = "block"

            }

            else {

                product.style.display = "none"

            }

        })

    })

})

var searchInput = document.getElementById("searchInput")


if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        var searchValue =
            searchInput.value.toLowerCase()


        products.forEach(function(product) {

            var productName =
                product.getAttribute("data-name").toLowerCase()


            if (productName.includes(searchValue)) {

                product.style.display = "block"

            }

            else {

                product.style.display = "none"

            }

        })

    })

}