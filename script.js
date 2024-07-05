document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const userTable = document.getElementById("user-table");
    const userData = document.getElementById("user-data");

    // Mostrar el loader
    loader.style.display = "block";

    fetch("https://reqres.in/api/users?delay=3")
        .then(response => response.json())
        .then(data => {
            // Ocultar el loader
            loader.style.display = "none";

            // Mostrar la tabla de usuarios
            userTable.style.display = "block";

            // Poblar los datos de los usuarios en la tabla
            data.data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.avatar}" class="img-fluid rounded-circle" alt="Avatar de ${user.first_name}"></td>
                `;
                userData.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al recuperar los datos:", error);
        });
});