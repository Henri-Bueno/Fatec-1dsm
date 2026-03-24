const e = require("express");

const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const usersTabelBody = document.getElementById("users-table-body");

function renderEmptyTable(message) {
    usersTabelBody.innerHTML = `
    <tr>
      <td colspan="3" class="user-table-empty"> ${message} </td>
    </tr>
  `;
}

function renderUsers(users) {
    if (users.length === 0) {
        renderEmptyTable("Nenhum usuário encontrado");
    } else {
        usersTabelBody.innerHTML = "";
        let rowsTemp = "";
        for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
            rowsTemp += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="user-table-actions-cell" >
                    <button class= "delete-user-button"> 
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V11zm4 0h2v8H8V11zm4 0h2v8h-2V11z"
                            fill="currentColor">
                    </path>
                    </svg>
                    </button>
                </td>
            </tr>
        `;
        }
        usersTabelBody.innerHTML = rowsTemp;
    }
}

async function loadUsers() {
    const response = await fetch("users")
    if (response.ok) {
        const users = await response.json();
        renderUsers(users);
    } else {
        renderEmptyTable("Erro ao carregar usuários");
    }
}

loadUsers();