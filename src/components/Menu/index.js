import { connect } from "react-redux";

import MenuItem from "../MenuItem";
import css from './style.module.css';

const Menu = props => (
    <div>
        <ul className={css.Menu}>
            {props.userId ? (
                <>
                    <MenuItem exact link='/'>ШИНЭ ЗАХИАЛГА</MenuItem>
                    <MenuItem link='/orders'>ЗАХИАЛГУУД</MenuItem>
                    <MenuItem link='/logout'>ГАРАХ</MenuItem>
                </>
            ) : (
                <>
                    <MenuItem link='/login'>НЭВТРЭХ</MenuItem>
                    <MenuItem link='/signup'>БҮРТГҮҮЛЭХ</MenuItem>
                </>
            )}
            
        </ul>
    </div>
);

const mapStateToProps = state => {
    return {
        userId: state.userReducer.userId
    }
};

export default connect(mapStateToProps)(Menu);