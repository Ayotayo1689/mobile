const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "https://dsoftuae.com/alshaalimarine/api"

export async function loginUser(username: string, password: string) {
  try {
    const params = new URLSearchParams({ username, password }).toString()
    const response = await fetch(`${API_BASE_URL}/login.php?${params}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    })

    console.log("Request URL:", `${API_BASE_URL}/login.php?${params}`)

    const data = await response.json()
    console.log("[v0] Login response:", data)

    if (!data.results || data.results.length === 0) {
      throw new Error("Unexpected response from server")
    }

    const user = data.results[0]
    if (user.id === "Invalid") throw new Error("Invalid username or password")

    return {
      userid: user.id,
      name: user.name,
      user_type_id: user.user_type_id,
      active: user.active,
    }
  } catch (error) {
    console.error("Login error:", error)
    throw error instanceof Error ? error : new Error("An error occurred during login")
  }
}
