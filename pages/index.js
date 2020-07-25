import React from "react";
import { Button } from "antd";

class Home extends React.Component {
  static async getInitialProps() {
    const informacion = {
      title: "test",
      desc: "Este es un texto de descripcion",
    };
    return { informacion: informacion };
  }

  render() {
    return (
      <div>
        <Button type="primary">test button</Button>
      </div>
    );
  }
}

export default Home;
