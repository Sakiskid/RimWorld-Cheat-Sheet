function displayItemInPopup(item) {
    let popupEl = $("#popup");

    switch(item.type) {
        case "Apparel": 
            displayApparel();
            break;
        case "Equipment": 
            displayEquipment();
            break;
        case "Textile": 
            displayTextile();
            break;
        case "Material": 
            displayMaterial();
            break;
        default:
            console.log("Item type " + item.type + " not found!");
            break;
    }

    function appendProperty(propertyName, value) {
        // Get popup element

        // create div and set text to propertyName
        let div = $(popupEl).append($("<div>").text(propertyName));
        // append div and set text to property value
        $(div).append($("<div>").text(value));
    }

    function clearPopup() {
        $(popupEl).empty();
    }

    function displayApparel() {
        clearPopup();
        
    }

    function displayEquipment() {

    }

    function displayTextile() {
        
    }

    function displayMaterial() {

    }
}