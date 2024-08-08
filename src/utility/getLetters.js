function getLetters(text) {
  // Split the text into words
  const words = text.split(" ");

  // Extract the first letter of each word
  const capArr = words.map((word) => word[0].toUpperCase());

  // Join the initials and limit the result to two letters
  return capArr.join("").substring(0, 2);
}

export default getLetters;
