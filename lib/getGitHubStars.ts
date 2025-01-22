const CACHE_KEY = "github_stars";
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

export async function getGitHubStars() {
  // Check if we have a cached value
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const { stars, timestamp } = JSON.parse(cachedData);
    if (Date.now() - timestamp < CACHE_EXPIRY) {
      return stars;
    }
  }

  // If no valid cached data, fetch from API
  const res = await fetch("https://api.github.com/repos/ctate/openui", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stars");
  }

  const data = await res.json();
  const stars = data.stargazers_count;

  // Cache the new value
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ stars, timestamp: Date.now() }),
  );

  return stars;
}
