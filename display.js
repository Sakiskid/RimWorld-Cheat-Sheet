function displayItemInPopup(item) {
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

    function displayApparel() {
        let popupElappend = $("#popup").append($("<div>"));
        // $(popupEl).append($("<div>").text());
        $(popupElappend).text("test!");

        console.log("Apparel!", item);
    }

    function displayEquipment() {

    }

    function displayTextile() {
        
    }

    function displayMaterial() {

    }
}