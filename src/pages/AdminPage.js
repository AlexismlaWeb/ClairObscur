import React, { useState, useRef, useEffect } from "react";
import Header from "../components/layouts/Header";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const AdminPage = () => {
  const form = useRef();

  // Exemple de données
  const items = [
    {
      id: 1,
      title: "Article 1",
      description: "Description 1",
      imgVideo: "vrtist1.svg",
    },
    {
      id: 2,
      title: "Article 2",
      description: "Description 2",
      imgVideo: "vrtist2.svg",
    },
    {
      id: 3,
      title: "Article 3",
      description: "Description 3",
      imgVideo: "vrtist3.svg",
    },
    {
      id: 4,
      title: "Article 4",
      description: "Description 4",
      imgVideo: "vrtist4.svg",
    },
    { id: 5, title: "Article 5", description: "Description 5", imgVideo: "" },
  ];
  const [itemsState, setItemsState] = useState(items);
  const [itemSelected, setItemSelected] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [update, setUpdate] = useState({
    description: "",
    title: "",
    imgVideo: "",
  });

  useEffect(() => {
    if (itemSelected.length > 0) {
      console.log(itemSelected);
      setUpdate({
        title: itemSelected[0].title,
        description: itemSelected[0].description,
        imgVideo: itemSelected[0].imgVideo,
      });
      setOpen(true);
    }
  }, [itemSelected]); // Cette fonction s'exécute après que itemSelected a été mis à jour

  const handleDelete = (itemId) => {
    // Logique de suppression
    if (itemId) {
      let isInArray = itemsState.some((x) => x.id === itemId);
      if (isInArray) {
        const newItems = itemsState.filter((x) => x.id !== itemId);
        setItemsState(newItems);
      }
    }
  };

  const handleEdit = (itemId) => {
    // Logique de modification
    if (itemId) {
      let isInArray = itemsState.filter((x) => x.id === itemId);
      setItemSelected(isInArray);
    }
  };

  const handleView = (itemId) => {
    // Logique de visualisation
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Header />
      <Row className="gx-0">
        <h1 className="text-center">Projets Liste</h1>
      </Row>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th className="table-title">Titre</th>
            <th className="table-description">Description</th>
            <th className="table-imgVideo">Image/Video</th>
            <th className="table-actions"></th>
          </tr>
        </thead>
        <tbody>
          {itemsState.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="table-title">{item.title}</td>
              <td className="table-description">{item.description}</td>
              <td className="table-imgVideo">
                <img
                  src={`./${item.imgVideo}`}
                  alt={item.title}
                  style={{ width: "300px", height: "50px" }}
                />
              </td>
              <td className="table-actions">
                <Button
                  variant="outline-info"
                  onClick={() => handleView(item.id)}
                  className="me-2"
                >
                  <FaEye size={18} style={{ cursor: "pointer" }} />
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handleEdit(item.id)}
                  className="me-2"
                >
                  <FaEdit size={18} style={{ cursor: "pointer" }} />
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrashAlt size={18} style={{ cursor: "pointer" }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={open} onHide={() => setOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Modifier l'élément</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={form}>
            <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
              <Col xs={10} sm={8}>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  name="title"
                  value={update.title}
                  onChange={(e) => setUpdate({ title: e.target.value })}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
              <Col xs={10} sm={8}>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  placeholder="Prénom"
                  name="prénom"
                  value={update.description}
                  onChange={(e) => setUpdate({ description: e.target.value })}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
              {selectedFile && (
                <div className="mb-3">
                  <img src={selectedFile} alt="Preview" className="img-fluid" />
                </div>
              )}
            </Row>
            <Row className="d-flex justify-content-center align-items-center gx-0">
              <Col xs={10} sm={8}>
                <div className="custom-file">
                  <input
                    type="file"
                    className="form-control"
                    id="fileInput"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                  <label className="custom-file-label" htmlFor="fileInput">
                    Choose file
                  </label>
                </div>
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={() => handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPage;
