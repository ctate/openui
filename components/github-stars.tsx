import { getGitHubStars } from "@/lib/getGitHubStars";

export async function GitHubStars() {
  const stars = await getGitHubStars();

  return (
    <div className="flex items-center space-x-1 text-sm">
      <span>{stars}</span>
    </div>
  );
}
