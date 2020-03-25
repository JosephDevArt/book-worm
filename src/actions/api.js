const handleFetchError = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const handleFetch = (input, startIndex) => {
  //startIndex equals to books.length(so that same books won't be loaded)
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=20&startIndex=${startIndex}`,
    { method: "GET" }
  ).then(handleFetchError);
};
