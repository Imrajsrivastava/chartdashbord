import React, { useEffect, useState } from "react";
import "./Main.css";

export const Filters = () => {
  const [data, setData] = useState([]);
  const [gdata, setGdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let data = await fetch("/getalldata");
      let jadata = await data.json();
      console.log(jadata);
      setData(jadata);
      setGdata(jadata);
    } catch (error) {
      console.log(error);
    }
  };

  const filterGas = () => {
    let fildata = data.filter((elm) => {
      if (elm.topic == "gas") {
        return elm;
      }
    });
    setGdata(fildata);
  };

  const topicFilter = (tc) => {
    if (tc == "") {
      return setGdata(data);
    } else if (tc == "oil") {
      let oilarr = data.filter((elm) => {
        return elm.topic == tc;
      });
      setGdata(oilarr);
    } else if (tc == "gas") {
      let arr = data.filter((elm) => {
        return elm.topic == tc;
      });
      setGdata(arr);
    }
  };

  const countryFilter = (tc) => {
    if (tc == "") {
      return setGdata(data);
    } else if (tc == "United States of America") {
      let oilarr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(oilarr);
    } else if (tc == "China") {
      let arr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(arr);
    } else if (tc == "India") {
      let arr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(arr);
    } else if (tc == "Colombia") {
      let arr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(arr);
    } else if (tc == "South Africa") {
      let arr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(arr);
    } else if (tc == "Russia") {
      let arr = data.filter((elm) => {
        return elm.country == tc;
      });
      setGdata(arr);
    }
  };

  const regionFilter = (tc) => {
    if (tc == "") {
      return setGdata(data);
    } else if (tc == "Northern America") {
      let oilarr = data.filter((elm) => {
        return elm.region == tc;
      });
      setGdata(oilarr);
    } else if (tc == "Eastern Europe") {
      let arr = data.filter((elm) => {
        return elm.region == tc;
      });
      setGdata(arr);
    } else if (tc == "Western Asia") {
      let arr = data.filter((elm) => {
        return elm.region == tc;
      });
      setGdata(arr);
    } else if (tc == "Western Africa") {
      let arr = data.filter((elm) => {
        return elm.region == tc;
      });
      setGdata(arr);
    }
  };

  const filterEndyear = () => {
    let endarr = data.filter((elm) => {
      if (elm.end_year != "") {
        return elm;
      }
    });
    setGdata(endarr);
  };

  // getData()
  return (
    <div>
      <h1 style={{ color: "teal" }}>Filters</h1>

      <div className="filterDiv">
        <div>
          <button
            style={{ border: "none" }}
            onClick={() => {
              filterEndyear();
            }}
          >
           Have End Year
          </button>
        </div>

        <div>
          <select
            id="filter"
            onChange={(e) => {
              topicFilter(e.target.value);
            }}
          >
            <option value="">Topic</option>
            <option value="oil">Oil</option>
            <option value="gas">Gas</option>
          </select>
        </div>

        <div>
          <select
            id="filter"
            onChange={(e) => {
              regionFilter(e.target.value);
            }}
          >
            <option value="">Region</option>
            <option value="Northern America">Northern America</option>
            <option value="Western Africa">Western Africa</option>
            <option value="Western Asia">Western Asia</option>
            <option value="Eastern Europe">Eastern Europe</option>
          </select>
        </div>

        <div>
          <select
            id="filter"
            onChange={(e) => {
              countryFilter(e.target.value);
            }}
          >
            <option value="">Country</option>
            <option value="United States of America">
              United States of America
            </option>
            <option value="Russia">Russia</option>
            <option value="South Africa">South Africa</option>
            <option value="Colombia">Colombia</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
        </div>
      </div>

      <hr />
      <table>
        <tr>
          <th>Country</th>
          <th>region</th>
          <th>Topic</th>
          <th>added</th>
          <th>published</th>
          <th>End Year</th>
        </tr>
        <tbody>
          {gdata.length > 0 ? (
            gdata.map((elm) => {
              return (
                <tr key={elm.id}>
                  <td>{elm.country}</td>
                  <td>{elm.region}</td>
                  <td>{elm.topic}</td>
                  <td>{elm.added}</td>
                  <td>{elm.published}</td>
                  <td>{elm.end_year}</td>
                </tr>
              );
            })
          ) : (
            <h1 style={{ color: "blue", marginLeft: "50px" }}>Loading...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};
