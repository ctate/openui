export async function getGitHubStars() {
  const res = await fetch("https://api.github.com/repos/ctate/openui", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stars");
  }

  const data = await res.json();
  return data.stargazers_count;
}
