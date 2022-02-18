import { Suspense } from "react";
import Loader from "react-loader-spinner";
import { BackDrop } from "../Components/UI/Backdrop/";

const WithSuspense = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <BackDrop childPosition={"centered"} bg={"grey"}>
          <Loader type="Oval" color="blue" height={40} width={40} />
        </BackDrop>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default WithSuspense;
