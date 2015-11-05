//calc.js

// var divElement = document.createElement ("divElement");
// document.body.appendChild(divElement);

// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn); 

// var masterDiv = document.createElement("div");
// var calculatorDiv = document.createElement("div");
var solutionBar = document.createElement("div");
// masterDiv.id="calculator";
// calculatorDiv.id="calculator";
solutionBar.id="solution_bar";
document.body.appendChild(solutionBar)
document.getElementByID("solution_bar").innerHTML="Calculate"

// document.getElementByID("calculatorDiv");

var calculatorDiv = document.createElement("div");


for (i=0; i<=11; i++){
    if (i>=0 && i<3) {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode(i+1);       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn); // Append <button> to <body>
    }
    else if (i===3) {

        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("+");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);             // Append <button> to <body>
    }
    else if (i>3 && i<7) {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode(i);       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);             // Append <button> to <body>
    }
    else if (i===7) {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("-");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);             // Append <button> to <body>
    }
    else if (i>7 && i<11) {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode(i-1);       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);             // Append <button> to <body>
    }
    else {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("=");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);             // Append <button> to <body>
    }

    // else {
    //     var btn = document.createElement("BUTTON");        // Create a <button> element
    //     var t = document.createTextNode(i+1);       // Create a text node
    //     btn.appendChild(t);                                // Append the text to <button>
    //     document.body.appendChild(btn);              // Append <button> to <body>
    // }
      
}

// var div = document.createElement("div")
