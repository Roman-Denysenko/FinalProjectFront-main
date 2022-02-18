import { BackDrop } from "../../Components/UI/Backdrop";

const Dashboard = ({ title }) => {
  document.title = title || "Hello World!";

  return (
    <BackDrop childPosition="centered" bg="grey">
      <div>Dashboard</div>
    </BackDrop>
  );
};

export default Dashboard;
