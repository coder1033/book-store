import { Spinner } from "react-bootstrap";

const Spin = () => (
  <Spinner
    style={{ position: "fixed", top: "50%", left: "50%" }}
    animation="border"
    variant="dark"
  />
);

export default Spin;
