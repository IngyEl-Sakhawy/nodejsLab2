const myMod = require('./Modules/Ticket');
console.log("Server:",myMod);
const fs = require('fs');


let Myticket= myMod.Ticket;
let TravelerOne = new Myticket("Ingy", "11/12/2024");
let updatedinfo = TravelerOne.updateTicket("Ingy","1/1/2025")
var travelerinfo =TravelerOne.saveData();
console.log(travelerinfo);
fs.appendFileSync('TicketsAgenda.txt',`${travelerinfo}\n`,()=>{});
