import React, {Component} from 'react';
// import {useState} from 'react-dom';
import {
  Col, 
  Row, 
  Button,
  Container,
  Image,
  Breadcrumb,
  Dropdown,
  Carousel,
  ListGroup,
  Jumbotron,
  Form,
  Modal
  } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ashow : false,
      setShow : false
    };
    this.handleClose= this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    
  }
  handleClose() {
    this.setState(() => {
      return{
        Ashow : false
      }
    });
  }

  handleShow() {
    this.setState(() => {
      return{
        Ashow : true
      }
    });
  }

  // rubahData() {
  //   this.setState((state,props) => {
  //       return { 
  //           // title : "Pilih Menu Makanan",
  //           // title2 : "Pilih Menu Minuman"
  //           title : this.state.title2,
  //           title2 : this.state.title
  //       }
  //   });
  
  render(){
    // const [show,setShow] = useState(false);
    return (
      <div>
        {/* <h1>{this.state.Ashow}</h1>
        <h1>{this.state.setShow}</h1> */}
        <Container>
          <Row>
            <Col md="3">
              <Dropdown>
                <Dropdown.Toggle>Pilih Bahasa</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Indonesia</Dropdown.Item>
                  <Dropdown.Item>Chinese</Dropdown.Item>
                  <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={{span:1, offset:6}} >
            <h6><Image width="30" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />Andreas</h6>
            </Col>
          </Row>
          <Row>
            <Col sm={{span:4, offset:8}}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md={{ span:8, offset:2}}>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="berita bola" />
                  <Carousel.Caption>
                    <h3>Hello Football</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="berita bola" />
                  <Carousel.Caption>
                    <h3>Hello Football</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" alt="berita bola" />
                  <Carousel.Caption>
                    <h3>Hello Football</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row> 
          <br />
          <Row>
            <Col md="3">
              <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Primera</ListGroup.Item>
                <ListGroup.Item>Serie A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundes Liga</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Jumbotron md={{span:6}}>
                <h1>DIVISI PRIMERA</h1>
                <p>Main untuk Catalunya, Grend Pique Dirhormati</p>
                <p>
                  <Button variant="primary">Read More</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col md="3">
              <div className="text-center">
              <Image 
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" 
                  alt="login"
                  width="40"  />
                <h6>Silahkan Login</h6>
              </div>
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Masukan Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Masukan Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" label="Term & Condition"/>
                </Form.Group>
                <Button varian="primary" onClick={this.handleShow}>Login</Button>
              </Form>
            </Col>
          </Row>
          <Modal show={this.state.Ashow} inHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Selamat Anda Berhasil Login
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose} >Close</Button>
              <Button variant="primary" >Save Username & Password</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default App;