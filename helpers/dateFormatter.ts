export const dateFormatter = (): string => {
  const date = new Date();
  return `${date.getDate()}${" "}${date.toLocaleString("en-US", {
    month: "short",
  })}${" "}${date.getFullYear()}, ${date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};
