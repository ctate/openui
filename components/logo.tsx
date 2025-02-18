import React from "react";

interface LogoProps {
  size?: number;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 700 700"
      className="fill-current"
      style={{ color }}
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">OpenUI Logo</title>
      <path d="M350,0C156.7,0,0,156.7,0,350s156.7,350,350,350,350-156.7,350-350S543.3,0,350,0ZM535,392.5c.2,57.7-22.8,107.2-58.6,139-35.6,31.7-81.3,46.3-126.1,46.1-44.8-.2-90.3-15-125.9-46.6-35.8-31.7-59.2-80.9-59.4-138.2v-182.6c0-28.6,23.3-51.9,51.9-51.9h0s0,0,0,0c28.6,0,51.9,23.3,51.9,51.9v182.3c.1,31.3,9.8,47.8,24.5,60.9,14.3,12.7,35.7,20.4,57.4,20.5,21.7,0,42.7-7.4,56.7-19.9,14.4-12.8,24-29.2,23.9-61.1,0,0,0-.1,0-.2v-43.5c0-28.7,23.2-51.9,51.9-51.9s51.9,23.2,51.9,51.9v43.3ZM483.1,262.2c-28.7,0-51.9-23.2-51.9-51.9s23.2-51.9,51.9-51.9,51.9,23.2,51.9,51.9-23.2,51.9-51.9,51.9Z" />
    </svg>
  );
};
