export const parseToParagraphs = (text, delimiter = '<br>') => {
  return text
    .split(delimiter)
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
};
