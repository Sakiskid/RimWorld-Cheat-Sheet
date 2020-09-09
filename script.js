let itemsDisplayEl = document.getElementsByClassName("items-display")[0];
let itemTemplate;
let data = [];

function init() {
    initializeTemplates();
    populateItemsDisplay();
}

function initializeTemplates () {
    itemTemplate = $("#itemTemplate").clone();
    $("#itemTemplate").remove();
    $(itemTemplate).removeAttr("id");
}

function populateItemsDisplay() {
    data = apparelData.concat(weaponsData, materialsData, textilesData);
    data.forEach(item => {
        let newItem = $(itemTemplate).clone();
        $(newItem).children("img").attr("src", item.imageURL);
        $(newItem).attr("data-name", item.name);
        $(itemsDisplayEl).append(newItem);
    });
}

function getItemUsingName(name) {
    let item = data.find(item => item.name === name);
    displayItemInPopup(item);
}

// ANCHOR Event Listeners

$(document).on("click", ".item", function (event) {
    let name = $(this).attr("data-name");
    getItemUsingName(name);
});

init();