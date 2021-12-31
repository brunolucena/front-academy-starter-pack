import LogoImagem from './imagens/front-academy-logo.png';
import './styles.css';

function Logo() {
  return (
    <div>
      <img alt="Logo Front Academy" class="logo" src={LogoImagem} />
    </div>
  );
}

export default Logo;
