import { getGitHubStars } from "@/lib/getGitHubStars";
import { useCallback, useEffect, useState } from "react";

export function GitHubStars() {
  const [stars, setStars] = useState(0);

  const init = useCallback(async () => {
    try {
      const newStars = await getGitHubStars();
      setStars(newStars);
    } catch (error) {
      console.error("Failed to fetch GitHub stars:", error);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="flex items-center space-x-1 text-sm">
      <span>
        {stars ? stars : <div className="h-[20px] w-[17.5px] bg-background" />}
      </span>
    </div>
  );
}
