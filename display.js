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
    displayItem();

    // switch(item.type) {
    //     case "Apparel": 
    //         displayItem();
    //         break;
    //     case "Equipment": 
    //         displayItem();
    //         break;
    //     case "Textile": 
    //         displayItem();
    //         break;
    //     case "Material": 
    //         displayItem();
    //         break;
    //     default:
    //         console.log("Item type " + item.type + " not found!");
    //         break;
    // }

    function clearPopup() {
        $(".popup-info span").empty();
        $(".popup-info img").empty();
        $(".popup-info").css("display", "none");
    }

    function displayItem() {
        /* Go through each property for the item,
        Find it's respective element (using data-property)
        then set it's corresponding span element's text.
        If the property is "resourcesToMake" or "imageURL",
        Special care is needed with these, and they are set accordingly */
        clearPopup();

        for (prop in item) {
            // The span element to put the values in
            let popupInfoEl = $("[data-property='"+prop+"']");
            let value = item[prop];

            // Show this property info
            popupInfoEl.css("display", "block");

            // If it's resourcesToMake, we need to iterate thru the object
            if(prop === "resourcesToMake") {
                popupInfoEl.empty();
                for(resource in value) {
                    let material = resource.toString();
                    let count = value[resource].toString();
                    $(popupInfoEl).append(count + " " + material + " ");
                }
            }

            // If the property is an image
            else if (prop === "imageURL") {
                $(popupInfoEl).attr("src", value);
            }
            else {
                $(popupInfoEl).children("span").text(value);
            }
        }
    }
}