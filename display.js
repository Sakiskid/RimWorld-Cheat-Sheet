/*
Pros / Cons to having a foreach loop (instead of manually inputting properties)
Pros:
- Modular
- Ability to check if property exists
Cons:
- Ugly css ids
- 

when displaying apparel,
- go thru all of the popup-data classes that are under popup-container or popup-active
*/

function displayItemInPopup(item) {
    let popupContainerEl = $("#popup\\-container");

    switch(item.type) {
        case "Apparel": 
            displayItem();
            break;
        case "Equipment": 
            displayItem();
            break;
        case "Textile": 
            displayItem();
            break;
        case "Material": 
            displayItem();
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

    function displayItem() {
        /* Go through each property for the item,
        Find it's respective element (using data-property)
        then set it's corresponding span element's text.
        If the property is "resourcesToMake" or "imageURL",
        Special care is needed with these, and they are set accordingly */
        for (prop in item) {
            // The span element to put the values in
            let popupInfoValueEl = $("[data-property='"+prop+"'] span");
            let value = item[prop];

            // If it's resourcesToMake, we need to iterate thru the object
            if(prop === "resourcesToMake") {
                popupInfoValueEl.empty();
                for(resource in value) {
                    let material = resource.toString();
                    let count = value[resource].toString();
                    $(popupInfoValueEl).append(count + " " + material + " ");
                }
            }

            // If the property is an image
            else if (prop === "imageURL") {
                $("[data-property='"+prop+"'").attr("src", value);
            }
            else {
                $(popupInfoValueEl).text(value);
            }
        }
    }

    function displayEquipment() {

    }

    function displayTextile() {
        
    }

    function displayMaterial() {

    }
}