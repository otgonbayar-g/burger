import css from './style.module.css';
import logoImage from '../../assets/images/bk_logo_2020.svg';

const Logo = () => (
    <div className={css.Logo}>
        <img src={logoImage} alt='Logo image' />
        {/* <input type="image" img src = {logoImage} alt="Logo image" /> */}
    </div>
);

export default Logo;