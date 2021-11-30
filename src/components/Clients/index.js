import mc from "../../assets/css/img/logos/microsoft.svg";
import go from "../../assets/css/img/logos/google.svg";
import fb from "../../assets/css/img/logos/facebook.svg";
import ibm from "../../assets/css/img/logos/ibm.svg";

export default function Clients() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={mc}
                alt="..."
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={go}
                alt="..."
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={fb}
                alt="..."
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={ibm}
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
