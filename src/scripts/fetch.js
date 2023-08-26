const NASA_TOKEN = import.meta.env.NASA_KEY
const apodApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_TOKEN}`

export const fetchApodData = async () => {
  try {
    const response = await fetch(apodApiUrl);
    const rateLimitRemaining = response.headers.get("X-RateLimit-Remaining");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    data.rateLimitRemaining = rateLimitRemaining;
    return data;
  } catch (error) {
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
  let list = localStorage.getItem('listApodData');
  list = list && JSON.parse(list);
  return list
}

function getCurrentApodData() {
  const list = getApodDataFromCache() ? getApodDataFromCache() : [];
  const todayData = list && list.find(item => item.date === getCurrentDate());
  return todayData ? todayData : null;
}

function saveApodDataToCache(apodData) {
  const list = getApodDataFromCache() ? getApodDataFromCache() : [];
  list.push(apodData);
  localStorage.setItem('listApodData', JSON.stringify(list));
}

export async function getApodData() {
  const cachedApodData = getCurrentApodData();
  if (cachedApodData && cachedApodData.date === getCurrentDate()) {
    return cachedApodData;
  } else {
    const newApodData = await fetchApodData();
    saveApodDataToCache(newApodData);
    console.log(newApodData.rateLimitRemaining);
    return newApodData;
  }
}
