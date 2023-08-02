export function getApodData() {
  // Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // Set the URL to the APOD API endpoint with your apikey
  let url = "https://api.nasa.gov/planetary/apod?api_key=kmQOP13MoJhnRftKtbw8wEjK04O4xI6Dls8R0dc6";

  // Open the connection
  xhr.open("GET", url);

  // Send the request
  xhr.send();

  // Return a Promise that resolves with the data and headers
  return new Promise(function(resolve, reject) {
    xhr.onload = function() {
      // Check if the status is OK
      if (xhr.status == 200) {
        // Get the X-RateLimit-Remaining header value
        let rateLimitRemaining = xhr.getResponseHeader("X-RateLimit-Remaining");
        // Parse the response data as JSON
        let data = JSON.parse(xhr.responseText);
        // Resolve the Promise with the data and headers
        resolve({
          date: data.date,
          explanation: data.explanation,
          hdurl: data.hdurl,
          media_type: data.media_type,
          service_version: data.service_version,
          title: data.title,
          url: data.url,
          rateLimitRemaining: rateLimitRemaining
        });
      } else {
        // Reject the Promise with an error message
        reject("Error: " + xhr.statusText);
      }
    };
  });
}
