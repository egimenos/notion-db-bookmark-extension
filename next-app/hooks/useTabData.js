import { useState, useEffect } from "react";

const useTabData = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const title = tabs[0].title;

      setUrl(url);
      setTitle(title);
    });
  }, []);

  return [url, title];
};

export default useTabData;
