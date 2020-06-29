import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "components/App";
import DataApi from "../interfaces/DataApi";
import config from "config";
import axios from "axios";
const serverRender = async () => {
  const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(rawData.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
      //what we are doing here is passing initial data into the app for server side rendering
    ),
    initialData,
  };
};
export default serverRender;
