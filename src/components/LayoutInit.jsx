import Footers from "./Footers";
import Headers from "./Headers";

const LayoutInit = ({ children }) => {
  return (
    <div className="">
      <Headers />
      <section className="container">
        <div className="">{children}</div>
      </section>
      <Footers />
    </div>
  );
};

export default LayoutInit;
