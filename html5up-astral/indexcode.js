document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter_views");

  async function updateviews() {
    try {
      const response = await fetch("https://5s7psr44dd7gf6ty37k2x3n2z40ewzdm.lambda-url.ap-south-1.on.aws/");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      counter.innerHTML = `Views: ${data.views}`;
    } catch (error) {
      console.error("Error fetching views:", error);
    }
  }

  updateviews();
});
