const api_key = "kmQOP13MoJhnRftKtbw8wEjK04O4xI6Dls8R0dc6"

const today = new Date().toISOString().slice(0, 10);
console.log(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${today}`);
export async function getData(date = today) {
  const {response} = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
  );
  
  if (response.ok) {
    return response.json();
  }
}