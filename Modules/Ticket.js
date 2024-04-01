class Ticket {
    #seatNum;
    #flightNum;
    #departureTime;
    #arrivalTime;
    #travellingDate;
    #name
    constructor(name, travellingDate) {
        this.#name = name;
        this.#travellingDate = travellingDate;
        this.#departureTime = this.randomTime();
        this.#arrivalTime = this.randomTime();
        this.#flightNum = Math.round(Math.random() * 100);
        this.#seatNum = Math.round(Math.random() * 100);
    }

    updateTicket(name,travellingDate) {
        this.#name = name;
        this.#travellingDate = travellingDate;
        this.#departureTime = this.randomTime();
        this.#arrivalTime = this.randomTime();
        this.#flightNum = Math.round(Math.random() * 100);
        this.#seatNum = Math.round(Math.random() * 100);
    }

    display() {
        console.log("Name:", this._name);
        console.log("Seat Number:", this.#seatNum);
        console.log("Flight Number:", this.#flightNum);
        console.log("Departure Time:", this.#departureTime);
        console.log("Arrival Time:", this.#arrivalTime);
        console.log("Date:", this.#travellingDate);
    }

    saveData(){
        
            return `Name: ${this.#name}, Seat Number: ${this.#seatNum}, Flight Number: ${this.#flightNum}, Departure time: ${this.#departureTime}, Arrival time: ${this.#arrivalTime}, Date: ${this.#travellingDate}`;
        
    }
    randomTime() {
        const hrs = Math.round(Math.random() * 24);
        const mins = Math.round(Math.random() * 60);
        const hFormat = (hrs < 10 ? "0" : "");
        const mFormat = (mins < 10 ? "0" : "");
        const amPm = (hrs < 12 ? "AM" : "PM");
        const formattedHrs = (hrs % 12 === 0 ? 12 : hrs % 12);
        return `${hFormat}${formattedHrs}:${mFormat}${mins} ${amPm}`;
    }

    
}

module.exports = { Ticket };
