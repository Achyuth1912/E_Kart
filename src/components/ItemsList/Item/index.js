import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import bookcover from '../../../assets/icons/bookCover.jpg';

const Item = ({ item, children }) => (
    <div className={style.item}>
        <div className={style.itemLeft}>
            <div className={style.itemImage}>
            {/* <img src={item.image} alt="thumbnail-images"/> */}
                <img src={bookcover} alt="thumbnail-images"/>
            </div>
            <div className={style.itemTitle}>
                {item.name}
            </div>
            <div className={style.itemDescription}>
                {item.description}
            </div>
        </div>
        <div className={style.itemRight}>
            <div className={style.itemPrice}>
                $ {item.price}
            </div>
            {children}
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired,
    children: PropTypes.node
};

export default Item;