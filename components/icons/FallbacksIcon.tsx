import { useTheme } from "next-themes";
import Image from "next/image";

export const FallbacksIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Image
      src={
        currentTheme == "light"
          ? "/icons/fallbacks_light.png"
          : "/icons/fallbacks_light.png"
      }
      width={width}
      height={height}
      alt="Fallbacks Icon"
    />
  );
};
