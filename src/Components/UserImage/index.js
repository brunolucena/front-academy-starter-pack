import BrunoFoto from './assets/bruno_alves_lucena.png';

import './styles.css';

function UserImage() {
  return (
    <div className="user-image-container">
      <img alt="Bruno A. Lucena Foto" src={BrunoFoto} />
    </div>
  );
}

export default UserImage;
