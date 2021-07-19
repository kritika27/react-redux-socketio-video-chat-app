import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";

const Login = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const googleSignIn = async () => {
    try {
      await Auth();
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setFirstName(user.displayName);

        history.push("/video");
      } else console.log("No user is logged in.");
    });
  }, [history, firstName]);

  return (
    <header>
      <div>
        {firstName ? (
          <Link
            to="/"
            onClick={() => {
              auth().signOut();
              setFirstName("");
            }}
          >
            {" "}
            <button className="btn">Sign Out</button>
          </Link>
        ) : (
          <button className="btn" onClick={googleSignIn}>
            Sign Up
          </button>
        )}
      </div>
    </header>
  );
};
export default Login;
