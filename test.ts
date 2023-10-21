import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Replace with your Twitter API credentials

// Your Twitter Bearer Token
const bearerToken = "";

// The tweet you want to post
const tweetText = "🔥";

// Set up the request data
const requestData = {
  status: tweetText,
};

// Set up the request configuration
const axiosConfig: AxiosRequestConfig = {
  method: "post",
  url: "https://api.twitter.com/1.1/statuses/update.json",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
  },
  data: requestData,
};

// Make the HTTP request using Axios
axios(axiosConfig)
  .then((res: AxiosResponse) => {
    if (res.status === 200) {
      console.log("Tweet posted successfully!");
    } else {
      console.error(`Error posting tweet. Status Code: ${res.status}`);
      console.error(res.data);
    }
  })
  .catch((error) => {
    console.error("Error making the request:", error.response.data);
  });
