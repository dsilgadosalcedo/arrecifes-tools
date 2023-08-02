const apiKey = "kmQOP13MoJhnRftKtbw8wEjK04O4xI6Dls8R0dc6";
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

export async function getApodData() {
  try {
    const response = await fetch(apiUrl);
    const rateLimitRemaining = response.headers.get("X-RateLimit-Remaining");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    data.rateLimitRemaining = rateLimitRemaining; // Add rateLimitRemaining to the data object
    return data;
  } catch (error) {
    console.error("Error fetching APOD data:", error);
    throw error;
  }
}
