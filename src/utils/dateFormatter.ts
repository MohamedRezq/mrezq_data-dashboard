export const dateFormatter = (date?: any): string => {
  // console.log("date: ", date, typeof date);
  if (typeof date !== date) date = new Date();
  else date = new Date(date);
  console.log("date: ", date, typeof date);
  return `${date.getDate()}${" "}${date.toLocaleString("en-US", {
    month: "short",
  })}${" "}${date.getFullYear()}, ${date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};
