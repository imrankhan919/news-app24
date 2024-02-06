const today = new Date(Date.now()).toLocaleDateString();

let year = today.split("/")[2];
let day = today.split("/")[1];
let month = today.split("/")[0];

let formattedDate = `${year}-0${day}-0${month}`;

export const fetchNews = async (topic) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2024-01-0${day}&sortBy=publishedAt&apiKey=557a4679cd2c4e6d9ce3dde8a909928c`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    window.alert("Please Enter Valid Topic");
  }
};
