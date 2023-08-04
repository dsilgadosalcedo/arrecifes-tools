const apiKey = "kmQOP13MoJhnRftKtbw8wEjK04O4xI6Dls8R0dc6";
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

async function fetchApodData() {
  try {
    const response = await fetch(apiUrl);
    const rateLimitRemaining = response.headers.get("X-RateLimit-Remaining");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    data.rateLimitRemaining = rateLimitRemaining;
    return data;
  } catch (error) {
    console.error("Error fetching APOD data:", error);
    throw error;
  }
}

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getApodDataFromCache() {
  const apodData = localStorage.getItem('apodData');
  apodData && console.log("apodData received");
  return apodData ? JSON.parse(apodData) : null;
}

function saveApodDataToCache(apodData) {
  console.log("Saving APOD data to cache");
  localStorage.setItem('apodData', JSON.stringify(apodData));
}

export async function getApodData() {
  const cachedApodData = getApodDataFromCache();
  if (cachedApodData && cachedApodData.date === getCurrentDate()) {
    return cachedApodData;
  } else {
    const newApodData = await fetchApodData();
    saveApodDataToCache(newApodData);
    return newApodData;
  }
}
