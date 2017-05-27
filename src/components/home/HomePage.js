import  React from  'react';
import  {link} from  'react-router';

export default  class HomePage extends  React.Component {

  render() {
    return (
    <div className="jumbotron">
      <h1>Administration Redux</h1>
      <p>We specialize in blablabla</p>
      <link to="about" className="btn btn-primary btn-lg"> learn more </link>
    </div>
    );
  }

}
