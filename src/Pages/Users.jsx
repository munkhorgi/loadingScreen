import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Users = ({ user }) => {
  console.log(user);
  return (
    <Link
      href="#"
      class="text-decoration-none"
      style={{ color: "black" }}
      to={`/${user.id}`}
    >
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={user.images[0]}
            style={{ height: 200 }}
            onMouseOver={(e) =>
              user.images.length === 1
                ? (e.target.src = user.images[0])
                : (e.target.src = user.images[1])
            }
            onMouseLeave={(e) => (e.target.src = user.images[0])}
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{}}></Card.Title>
            <Card.Title>
              {" "}
              <p>Name : {user.title}</p>
            </Card.Title>
            <Card.Title>
              <p>description : {user.description}</p>
            </Card.Title>
            <Card.Title>
              {" "}
              <p>id : {user.id}</p>
            </Card.Title>
            <Card.Title>
              <p>Stock : {user.stock}</p>
            </Card.Title>
            <Card.Title>
              {" "}
              <p>Brand : {user.brand}</p>
            </Card.Title>
            <Card.Title>
              {" "}
              <p>image number : {user.images.length}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </Link>
  );
};

export default Users;
