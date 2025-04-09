import {
  handleFetchOrder,
  handleLogin,
  handleRegister,
  handleUpdate,
} from "../services/api.js";

const registerButton = document.getElementById("btn-register");
const loginButton = document.getElementById("btn-login");
const updateButton = document.getElementById("btn-update");
const ordersButton = document.getElementById("btn-orders");

registerButton.addEventListener("click", async () => {
  try {
    await handleRegister();
    window.alert("Registro efetuado com sucesso");
  } catch (err) {
    window.alert(`Erro ao realizar cadastro: ${err.message}`);
  }
});

loginButton.addEventListener("click", async () => {
  try {
    const { userId } = await handleRegister();
    window.alert("Registro efetuado com sucesso");

    await handleLogin(userId);
    window.alert("Login efetuado com sucesso");
  } catch (err) {
    window.alert(`Erro ao realizar login: ${err.message}`);
  }
});

updateButton.addEventListener("click", async () => {
  try {
    const { userId } = await handleRegister();
    window.alert("Registro efetuado com sucesso");

    await handleLogin(userId);
    window.alert("Login efetuado com sucesso");

    await handleUpdate(userId);
    window.alert("Atualização efetuada com sucesso");
  } catch (err) {
    window.alert(`Erro ao realizar atualização: ${err.message}`);
  }
});

ordersButton.addEventListener("click", async () => {
  try {
    const { userId } = await handleRegister();
    window.alert("Registro efetuado com sucesso");

    await handleLogin(userId);
    window.alert("Login efetuado com sucesso");

    await handleUpdate(userId);
    window.alert("Atualização efetuada com sucesso");

    await handleFetchOrder(userId);
    window.alert("Busca de pedidos efetuada com sucesso");
  } catch (err) {
    window.alert(`Erro ao realizar busca de pedidos ${err.message}`);
  }
});
