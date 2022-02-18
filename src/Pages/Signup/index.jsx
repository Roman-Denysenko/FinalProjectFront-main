import { BackDrop } from "../../Components/UI/Backdrop";

const Signup = ({ title, ...props }) => {
  document.title = title || "Hello World!";
  return (
    <BackDrop childPosition="centered" bg="grey">
      <div>Signup</div>
    </BackDrop>
  );
};

export default Signup;
