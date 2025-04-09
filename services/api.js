const baseUrl = "http://localhost:4001";

async function fethApi({ endpoint, query, method, headers, body }) {
  try {
    const response = await fetch(
      `${baseUrl}${endpoint}${query ? `?${query}` : ""}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      }
    );
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

export async function handleRegister() {
  try {
    const response = await fethApi({
      endpoint: "/cadastro",
      method: "POST",
      body: {
        name: "Jhony",
        mail: "setDevJohn@gmail.com",
        password: "123456",
        origin: "web",
      },
    });

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function handleLogin(userId) {
  try {
    const response = await fethApi({
      endpoint: "/login",
      method: "GET",
      query: `usuarioId=${userId}`,
    });

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function handleUpdate(userId) {
  try {
    const response = await fethApi({
      endpoint: "/alteracoes",
      method: "PUT",
      query: `usuarioId=${userId}`,
    });

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function handleFetchOrder(userId) {
  try {
    const response = await fethApi({
      endpoint: "/pedidos",
      method: "GET",
      query: `usuarioId=${userId}`,
    });

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}
