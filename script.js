let language = "FR";
function changeLanguage() {
    if (language == "FR") {
        document.styleSheets[0].cssRules.item(0).style.cssText = "display: block";
        document.styleSheets[0].cssRules.item(1).style.cssText = "display: none";
        language = "EN";
    }
    else {
        document.styleSheets[0].cssRules.item(0).style.cssText = "display: none";
        document.styleSheets[0].cssRules.item(1).style.cssText = "display: block";
        language = "FR";
    }
}