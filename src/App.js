import "./App.css";
import Home from "./Component/Home";
import News from "./Component/News";

import Form from "./Component/Common/Form";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line
import { app } from "./Component/Config/Firebase-Config";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, []);

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          toast.success(`Welcome ${email.substring(0, email.indexOf("@"))}`);
          localStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (!email || !password) {
            toast.error("Email/Password Cannot Be Blank !!");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Invalid Password");
          } else if (error.code === "auth/user-not-found") {
            toast.error("Invalid Username");
          } else if (error) {
            toast.error("Please Check Username/Password");
          }
        });
    }

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          toast.success(`Welcome ${email.substring(0, email.indexOf("@"))}`);
          localStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (!email || !password) {
            toast.error("Email/Password Cannot Be Blank !!");
          } else if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  return (
    <div className="App">
      <>
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="home" element={<Home />}>
            
          </Route>
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path='/home/business' element={<News type='Business' country='us' category="business" />}/>
          <Route path='/home/entertainment' element={<News type='Entertainment' country='us' category="entertainment" />}/>
            <Route path='/home/general' element={<News type='General' country='us' category="general" />}/>
            <Route path='/home/health' element={<News type='Health' country='us' category="health" />}/>
            <Route path='/home/science' element={<News type='Science' country='us' category="science" />}/>
            <Route path='/home/sports' element={<News type='Sports' country='us' category="sports" />}/>
            <Route path='/home/technology' element={<News type='Technology' country='us' category="technology" />}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </div>
  );
}

export default App;
