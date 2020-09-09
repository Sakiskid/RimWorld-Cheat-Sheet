function displayItemInPopup(item) {
    let popupContainerEl = $("#popup\\-container");

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
        // TODO if property is null or undefined, then dont append
        // Get popup element

        // create div and set text to propertyName
        let div = $(popupContainerEl).append($("<div>").text(propertyName));
        // append div and set text to property value
        $(div).append($("<div>").text(value));
    }

    function clearPopup() {
        
    }

    function displayApparel() {
        
    }

    function displayEquipment() {

    }

    function displayTextile() {
        
    }

    function displayMaterial() {

    }
}