import React, { useState } from "react";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../redux/user/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/UI/PageContainer/PageContainer";
import LoginButton from "../components/UI/Button/Button"
import LoginInput from "../components/UI/Input/Input"

const Login = ({ type = "login" }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [registration] = useRegistrationMutation();
  const [handleLogin] = useLoginMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirm)
             console.log("login", login);

    if (login.length && pass.length && confirm) {
      try {
        if (type === "login") {
          const data = await handleLogin({ login, password: pass }).unwrap();
          dispatch(setCredentials(data));
        } else if (type === "registration") {
          await registration({ login, password: pass });
        }

        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <>
      <PageContainer
        pageName={"page page_login"}
        sectionName={"login container"}
      >
        <h2 className="project__title  project__title_login">
          Login
        </h2>
        <form name={"tarifForm"} onSubmit={handleSubmit} className="login_form">
          <fieldset className="login_form_group_input">
            <div className="login_input_email">
              <LoginInput
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Enter user login"
              />
            </div>
            <div className="login_input_pass">
              <LoginInput
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter user password"
              />
            </div>
          </fieldset>
          <a href="/" className="login_forget_pass">
           Forgot password?
          </a>
          <div className="age_proof_group">
            <LoginInput
              onChange={(e) => {
                setConfirm(e.target.checked);
              }}
              type="checkbox"
              id="age_proof"
              name="age_proof"
            />
            <label htmlFor="age_proof" className="age_proof">
              I  confirm that I am over 18 years old and agree to the Terms of Use and Privacy Policy.
            </label>
          </div>
          <LoginButton
            onClick={handleSubmit}
            type="submit"
            form="tarifForm"
            className="table__button btn btn_table"
          >
            Login
          </LoginButton>
        </form>
        <h3>Social account login</h3>
        <div className="login_networks">
          <a href="/">
            <img alt={""} src={require("../assets/img/fb-network.png")} />
          </a>
          <a href="/">
            <img alt={""} src={require("./../assets/img/g-network.png")} />
          </a>
        </div>
      </PageContainer>
    </>
  );
};

export default Login;
