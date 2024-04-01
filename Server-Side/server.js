//Launch Server ==> req[ url - Method ]

const http = require('http');
const fs = require('fs');

//#region filesreading
var Homehtml = "";

fs.readFile("../Client-Side/Pages/home.html","utf-8",(err,data)=>{

    if(err){
        console.log("ERROR");
    } else {
        Homehtml = data;
    }

})

var ScripJS = fs.readFileSync("../Client-Side/Scripts/script.js","utf-8");
var StyleCSS = fs.readFileSync("../Client-Side/Styles/style.css","utf-8");
var ImageJPG = fs.readFileSync("../Client-Side/Images/stones.jpg");
var Profile = fs.readFileSync("../Client-Side/Pages/profile.html","utf-8");
var Clients = require('fs');
//#endregion filereading

http.createServer((req, res)=>{

//#region GET
        if(req.method == "GET"){
            switch(req.url){
                case "/":
                    res.setHeader("Content-Type","text/html");//mime types ==>> text/html
                    // res.setHeader("Set-Cookie","userName='ingy'"); // add expires to cookies
                    res.write(Homehtml);
                    break;


                case "/Styles/style.css":
                    res.setHeader("Content-Type","text/css");
                    res.write(StyleCSS);
                    break;


                case "/Scripts/script.js":
                    res.setHeader("Content-Type","text/javascript");
                    res.write(ScripJS);
                    break;

                case "/Images/stones.jpg":
                    res.setHeader("Content-Type", "image/jpeg");
                    res.write(ImageJPG);
                    break;
                
                default:
                    if (req.url.includes("profile.html")){
                        res.setHeader("Content-Type","text/html")
                        res.write(Profile)
                    }
                    else
                    res.write("Invalid URL");
                    break;
            }
            res.end();
        }
//#endregion GET
//#region POST       
        else if (req.method == "POST"){
            let userName;
            let userNumber;
            let userEmail;
            let userAddress;

            req.on("data", (data)=>{
                console.log(data.toString());
                let userData = data.toString();
                userName = userData.split("&")[0].split("=")[1];
                userNumber = userData.split("&")[1].split("=")[1];
                userEmail = userData.split("&")[2].split("=")[1];
                userAddress = userData.split("&")[3].split("=")[1];

                const userObj = {
                    userName,
                    userNumber,
                    userEmail,
                    userAddress
                };

                const userJSON = JSON.stringify(userObj);

                Clients.appendFile("clients.json", userJSON + '\n', (err) => {
                    if (err) {
                        console.error("Error writing to file:", err);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    } else {
                        // Send response
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end("User data saved successfully!");
                    }
                });

            });
            req.on("end",()=>{
                res.setHeader("Content-Type","text/html");
                const replacedProfile = Profile
                    .replace("{UserName}", userName)
                    .replace("{UserEmail}", userEmail)
                    .replace("{UserNumber}", userNumber)
                    .replace("{UserAddress}", userAddress);

                res.write(replacedProfile);
                console.log("Ended");
                res.end();
            });
            req.on("close", ()=>{});
            req.on("error",()=>{});
        }
//#endregion POST
//#region PUT       
        else if (req.method == "PUT"){
            
        }
//#endregion PUT   
//#region DELETE   

        else if (req.method == "DELETE"){
            
        } 
//#endregion DELETE        
//#region OTHER        
else {

        }
//#endregion OTHER
    
}).listen(7010,()=>{console.log("http://localhost:7010")})//now that link is clickable