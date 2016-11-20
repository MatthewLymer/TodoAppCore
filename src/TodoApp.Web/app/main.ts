import {Greeter} from "./Greeter";

const greeter = new Greeter();
const element = document.getElementById("greeting");
element.innerHTML = greeter.greet("Matthew"); 