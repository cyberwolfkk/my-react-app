import React, { Component } from "react";
import "./App.css";

import a1 from "./1.jpg";
import a2 from "./2.jpg";
import a3 from "./3.jpg";
import a4 from "./4.jpg";
import a5 from "./5.jpg";
import a6 from "./6.jpg";
import { Container, Col, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <nav className="nav">
            <a href="/" className="iqgen-title">
              Ziya-KK
            </a>

            <ul>
              <li className="">
                <a href="/">Home</a>
              </li>
              <li className="">
                <a href="/">Buy</a>
              </li>
              <li className="">
                <a href="/">Cart</a>
              </li>
              <li className="">
                <a href="/">Whats New?</a>
              </li>
              <li className="button">
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="banner">
          Welcome to the world of the clothing. Wear the label...
        </div>
        <Container>
          <Row>
            <Col>
              <table>
                <tr>
                  <td>
                    {" "}
                    <img alt="1" src={a1} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a2} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a3} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a4} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a5} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a6} width={200} height={200} />
                  </td>
                </tr>
                <tr>
                  <td>Buy now @10000 Rs</td>
                  <td>Buy now @50000 Rs</td>
                  <td>Buy now @1000 Rs</td>
                  <td>Buy now @5000 Rs</td>
                  <td>Buy now @700 Rs</td>
                  <td>Buy now @6000 Rs</td>
                </tr>
                <br />
                <tr>
                  <td>
                    {" "}
                    <img alt="1" src={a1} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a2} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a3} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a4} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a5} width={200} height={200} />
                  </td>
                  <td>
                    {" "}
                    <img alt="1" src={a6} width={200} height={200} />
                  </td>
                </tr>
                <tr>
                  <td>Buy now @10000 Rs</td>
                  <td>Buy now @50000 Rs</td>
                  <td>Buy now @1000 Rs</td>
                  <td>Buy now @5000 Rs</td>
                  <td>Buy now @700 Rs</td>
                  <td>Buy now @6000 Rs</td>
                </tr>
              </table>
            </Col>
          </Row>
        </Container>

        <div className="footer">@Ziyakk All rights reservered</div>
      </div>
    );
  }
}

export default App;
