document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("button");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email1");
    const number = document.getElementById("number1");
    const resultBody = document.getElementById("resultBody");

    button.addEventListener("click", e => {
        e.preventDefault();

        const inputNameValue = nome.value;
        const inputEmailValue = email.value;
        const inputNumberValue = number.value;

        if (inputNameValue === "" || inputEmailValue === "" || inputNumberValue === "") {
            alert("Preencha todos os campos");
            return false;
        } else {
            
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${inputNameValue}</td>
                <td>${inputEmailValue}</td>
                <td>${inputNumberValue}</td>
                <td>
                    <button class="btnDeletar">Deletar</button>
                </td>
            `;

            
            resultBody.appendChild(row);
            
            const deleteButton = row.querySelector(".btnDeletar");
            deleteButton.addEventListener("click", () => {
                row.remove();
            });
        }

        
        nome.value = "";
        email.value = "";
        number.value = "";
    });
});