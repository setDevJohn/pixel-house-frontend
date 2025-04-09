export async function handleRegister() {
  try {
    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jhony",
        mail: "setDevJohn@gmail.com",
        password: "123456",
        origin: "web",
      }),
    });

    const result = await response.json();

    if (response.ok) return result;

    throw new Error(result.message || "Error ao registrar");
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Error ao registrar");
  }
}
