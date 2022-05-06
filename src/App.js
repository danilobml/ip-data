import { useEffect, useState } from "react";
import IpInfo from "./IpInfo";
import MyMap from "./MyMap";
import "./App.css";
import Flag from "./Flag";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const endpointIp = process.env.REACT_APP_API_ENDPOINT_IP;
  const enpointCountries = process.env.REACT_APP_API_ENDPOINT_COUNTRIES;
  const [info, setInfo] = useState();
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    fetch(endpointIp + apiKey)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setInfo(data);
        return fetch(enpointCountries + data.location.country);
      })
      .then((res) => {
        return res.json();
      })
      .then((ret) => {
        setCountryInfo(ret);
      })
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  }, []);

  return (
    <>
      {info && (
        <div className="container-div">
          <IpInfo info={info} />
          {countryInfo && <Flag countryInfo={countryInfo} />}
          <MyMap info={info} />
        </div>
      )}
    </>
  );
}

export default App;
