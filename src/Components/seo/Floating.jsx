import { Button } from 'react-bootstrap';

export default function Floating(props) {
  return (
    <div className='floating'>
      <span>{props.text}</span>
      <br />
      <Button
        href={
          props.juega
            ? 'https://m.apuestas.codere.es/deportes/#/CasinoPage'
            : 'https://m.apuestas.codere.es/deportes/#/RegistroESPage'
        }
        rel='nofollow'
        className='floating-btn'>
        {props.juega ? 'Juega ahora' : 'Regístrate'}
      </Button>
    </div>
  );
}
