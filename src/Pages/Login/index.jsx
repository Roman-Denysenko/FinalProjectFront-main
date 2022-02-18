import { BackDrop } from "../../Components/UI/Backdrop";

const Login = ({ title, ...props }) => {
  document.title = title || "Hello World!";

  return (
    <BackDrop childPosition="centered" bg="grey">
      <div>Login</div>
    </BackDrop>
  );
};

export default Login;
