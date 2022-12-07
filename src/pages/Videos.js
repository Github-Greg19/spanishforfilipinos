import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import demoVid from '../videos/demoVid.mp4';


export function Videos() {
  const videoRef = React.useRef(null);
  function play() {
    videoRef.current.play();
  }

  function pause() {
    videoRef.current.pause();
  }
  return (
  <Container>
      <center><h2>Videos</h2></center>
      <CardGroup>
      <Card style={{padding: 10}}>
      <video ref={videoRef}>
        <source
          src={demoVid}
          type="video/mp4"
        />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      
        <Card.Body>
          <Card.Title>Professor Name</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Sapiente quas debitis illum accusantium dignissimos. 
           Illum beatae provident alias cum obcaecati unde nulla 
           ratione natus quasi et, aperiam sint dolorem praesentium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sint, provident enim repellendus libero fugiat, laudantium 
            atque obcaecati ullam eos corporis totam eveniet, quam temp
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{padding: 10}}>
      <video ref={videoRef}>
        <source
          src={demoVid}
          type="video/mp4"
        />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      
        <Card.Body>
          <Card.Title>Professor Name</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Sapiente quas debitis illum accusantium dignissimos. 
           Illum beatae provident alias cum obcaecati unde nulla 
           ratione natus quasi et, aperiam sint dolorem praesentium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sint, provident enim repellendus libero fugiat, laudantium 
            atque obcaecati ullam eos corporis totam eveniet, quam temp
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{padding: 10}}>
      <video ref={videoRef}>
        <source
          src={demoVid}
          type="video/mp4"
        />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      
        <Card.Body>
          <Card.Title>Professor Name</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Sapiente quas debitis illum accusantium dignissimos. 
           Illum beatae provident alias cum obcaecati unde nulla 
           ratione natus quasi et, aperiam sint dolorem praesentium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sint, provident enim repellendus libero fugiat, laudantium 
            atque obcaecati ullam eos corporis totam eveniet, quam temp
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
     
    </CardGroup>

     
  </Container>
  );
}
