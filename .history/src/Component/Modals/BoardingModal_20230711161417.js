/** @format */

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export function BoardingModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Find_Work_Modal">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <h6>School for Bartending</h6>
        <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat quis tortor eget pharetra. Proin leo turpis, scelerisque vitae mattis et, porttitor in purus. Maecenas interdum ornare purus id </p>
      
        <div className="two-btn">
          <Link to="/staff" style={{width : '100%'}}>
            <button>FIND TALENT NOW</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}
