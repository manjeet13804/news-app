import News from "./News";
import Navbar from "./Navbar";
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");
    // console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/register");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar />
      <News />
    </div>
  );
};

export default Home;
