import { Star } from "lucide-react";

async function getGitHubStars() {
  const res = await fetch("https://api.github.com/repos/ctate/openui", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stars");
  }

  const data = await res.json();
  return data.stargazers_count;
}

export async function GitHubStars() {
  const stars = await getGitHubStars();

  return (
    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Star className="h-4 w-4" />
      <span>{stars}</span>
    </div>
  );
}
