import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiDeleteBin6Line } from "react-icons/ri";

const AppointmentList = ({ apps, setApps }) => {
  console.log(apps);

  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setApps(
      apps.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "#C80304" }}>
        Ticket List
      </h3>
      {apps.length < 1 && <img src="./img/appointment.jpg" width="70%" />}

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <RiDeleteBin6Line
                className="text-danger fs-3"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
