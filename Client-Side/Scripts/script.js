// document.getElementsByTagName("h1")[0].addEventListener("click",()=>{
//     alert("h1 clicked")
// })

document.addEventListener("DOMContentLoaded", () => {
    const fetchClientsBtn = document.getElementById("fetchClientsBtn");
    const clientInfoContainer = document.getElementById("clientInfoContainer");

    fetchClientsBtn.addEventListener("click", () => {
        fetch("../../Server-Side/clients.json")
            .then(response => response.json())
            .then(data => {
                
                clientInfoContainer.innerHTML = "";

                
                data.forEach(client => {
                    const clientDiv = document.createElement("div");
                    clientDiv.classList.add("client-info");
                    clientDiv.innerHTML = `
                        <h2>${client.userName}</h2>
                        <p>Mobile Number: ${client.userNumber}</p>
                        <p>Email: ${client.userEmail}</p>
                        <p>Address: ${client.userAddress}</p>
                    `;
                    clientInfoContainer.appendChild(clientDiv);
                });
            })
            .catch(error => console.error("Error fetching client information:", error));
    });
});
