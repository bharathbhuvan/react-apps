function fetchDetails() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(data => {
      return data;
    });
}

export default fetchDetails;
