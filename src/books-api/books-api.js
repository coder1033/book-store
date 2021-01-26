const getBooksData = async (search) => {
  search = search.replace(/ /g, "+");
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=paid-ebooks&maxResults=10`,
    { mode: "cors" }
  );
  response = await response.json();

  let keys = Object.keys(response["items"]);
  keys = keys.filter((key) => response["items"][key].volumeInfo.imageLinks);
  response = {
    totalItems: keys.length,
    items: keys.map((key) => response["items"][key]),
  };
  return response;
};

export default getBooksData;
