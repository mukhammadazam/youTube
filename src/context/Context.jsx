import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const MyContext = createContext();
export const Myprovayder = ({ children }) => {
  const [togle, setTogle] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: { id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "891c1edd4dmshfdd1a29b11443b6p1d75b5jsn879f3a6573f2",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  useEffect(() => {

  axios
    .request(options)
    .then(function (response) {
      setData(response.data.contents);
    })
    .catch(function (error) {
      console.error(error);
    });
  }, []);

  // const obj = {
  //   id: 1111,
  // }

  // obj.name = `video${id}`

  // console.log(obj);

  // const searchFunction = data.filter((value) => {
  //   if (search === "") {
  //     return value;
  //   } else if (value?.title.toLowerCase().includes(search?.toLowerCase())) {
  //     return value;
  //   }
  // });
  return (
    <MyContext.Provider value={{ togle, setTogle, data }}>
      {children}
    </MyContext.Provider>
  );
};
