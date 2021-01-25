const getBooksData = async (search) => {
  search = search.replace(/ /g, "+");
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=paid-ebooks&maxResults=10`,
    { mode: "cors" }
  );
  response = await response.json();
  return response;
};

export default getBooksData;
