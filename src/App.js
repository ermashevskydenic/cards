import { useEffect, useState } from "react";

function App() {
  const url =
      "https://api.unsplash.com/photos/?client_id=jvBktePoEXo1HhmaW546-MTuJpHSYCcVD9yzYe0VwVk";
  const [data, setData] = useState(null);
  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch(url);
        const dataJson = await res.json();
        console.log(dataJson);
        setData(() => dataJson.slice(0, 10));
      } catch (e) {
        console.warn(e);
      }
    };
    response();
  }, []);
  const upperCaseLetter = (words) => {
    const w = words?.[0].toUpperCase() + words?.slice(1);
    return w;
  };
  return (
      <div className={"App"}>
        {data?.map(({ title, urls, alt_description, description }) => (
            <div className="card" key={title} style={{ width: "28em" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {upperCaseLetter(alt_description) || "Title"}
                </h5>
                <p className="card-text">
                  {upperCaseLetter(description) ||
                      "This is a wider card with supporting text below as a natural\n" +
                      "              lead-in to additional content. This content is a little bit\n" +
                      "              longer."}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <img
                  src={urls.small}
                  className="card-img-top"
                  alt={alt_description}
              />
            </div>
        ))}
      </div>
  );
}

export default App;