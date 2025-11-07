import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
interface parametros{
    colorear:string;
    colorear2:string;
    titulo:string;
    imagen:string;
}
function BasicExample({colorear,colorear2,titulo,imagen}:parametros) {
  return (
    <Card style={{ width: '18rem', color:colorear }}>
      <img src={imagen}/>
      <Card.Body>
        <Card.Title style={{color:colorear2}}>{titulo}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;