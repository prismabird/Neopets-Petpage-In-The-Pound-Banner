// ==UserScript==
// @name         Petpage "In The Pound" Banner
// @version      0.0.1
// @description  Displays a banner at the top of a petpage if the Neopet is in the pound.
// @author       prismabird
// @match        *://*.neopets.com/~*
// @match        *://neopets.com/~*
// @icon         https://www.neopets.com/favicon.ico
// @grant        none
// ==/UserScript==

const body = document.body;
const referLink = document.querySelectorAll('a[href*="refer.phtml?username="]');
const href = referLink[0].getAttribute("href");
const username = href.split('=')[1];

function createPoundText() {
    if (username === "none") {
        console.log("In the pound!");
        const para = document.createElement("p");
        para.setAttribute("style", "font-size:10pt; text-align: center; background-color: #184818; padding: 1; font-family: Helvetica; color: #FFF; margin: 0;");
        const textNode = document.createTextNode("✨ [IN THE POUND] ✨");
        para.appendChild(textNode);
        const first = body.firstChild;
        body.insertBefore(para, first.nextSibling.nextSibling);
    };
};

createPoundText();
