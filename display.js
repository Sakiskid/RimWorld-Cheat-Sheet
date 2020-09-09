/*
Pros / Cons to having a foreach loop (instead of manually inputting properties)
Pros:
- Modular
- Ability to check if property exists
Cons:
- Ugly css ids
- 
*/

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
        for (prop in item) {
            
        }
        $("#pop\\-app\\-clothingtype span").text(item.clothingType);
        $("#pop\\-app\\-research span").text(item.researchRequirement);
        $("#pop\\-app\\-special span").text(item.);
        $("#pop\\-app\\-fabric span").text(item.name);
        
    }

    function displayEquipment() {

    }

    function displayTextile() {
        
    }

    function displayMaterial() {

    }
}