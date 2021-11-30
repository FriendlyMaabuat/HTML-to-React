import port5 from "../../../assets/css/img/portfolio/5.jpg";
import closeicon from "../../../assets/css/img/close-icon.svg";

export default function Modal5() {
  return (
    <div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeicon} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={port5}
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client: </strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category: </strong>
                        Website Design
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
