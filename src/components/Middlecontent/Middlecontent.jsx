import { Middlebanner } from "../Middlebanner/Middlebanner";
import "./Middlecontent.scss";

export const Middlecontent = () => (
  <>
    <div className="middleContent">
      <div className="desktop">
        <Middlebanner />
      </div>
    </div>
    <div className="mobile">
      <Middlebanner />
    </div>
  </>
);
