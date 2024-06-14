const FormatTitles = ({ title }) => {
  // Split the title by "_" and map each part
  let formattedKey = title
    .split("_") // Split by underscore
    .map((part) => {
      // Capitalize the first letter of each part
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" "); // Join parts back with space
  return formattedKey;
};

export default FormatTitles;
