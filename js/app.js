const InputHandler = require("./src/userInputHandler");
const BookingCalculator = require("./src/bookingCalculator");


var firstName=document.contactForm.fname.value;
var userType=document.contatForm.userType.value;

document.writeln("You entered"+firstName+"for your first name");
document.writeln("You entered"+userType+"for your last name");
documetn.writeln("IS this correct?")

class App {

    constructor() {
        this.inputHandler = new InputHandler();
        this.calculator = new BookingCalculator();
    }


    cheaperHotel(data) {
        try {
            let input = this.inputHandler.extractValues(data);
            console.log("output:" + this.calculator.cheaperPrice(input.clientType, input.dates))
        } catch(error) {
            console.log(error.message)
        }
    }

    showMenu() {
        console.log("--------------------------------");
        console.log("Digite os dados da reserva e pressione enter (ou s para sair):");
    }
}

const app = new App()
app.run();