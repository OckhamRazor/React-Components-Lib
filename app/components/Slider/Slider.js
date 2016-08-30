/**
 * Created by baobaobao on 2016/8/29.
 */
import React from 'react';
//css
require('./Slider.css');

var PropTypes = React.PropTypes;

function Slider(props) {
    return (
        <div className="slider"
             onMouseEnter={props.onMouseEnterImage}
             onMouseLeave={props.onMouseLeaveImage}>
            <ul className="slider-list">
                {
                    props.playList.map(function (item,index) {
                        return (
                            <li className={props.isShow[index]===true?'slider-item':'slider-item hide'}
                                key={index}>
                                <a target="_blank" href={item.imgLink}>
                                    <img src={props.isLoading[index]===true?props.playList[index].imgSrc:props.placeholderSrc} className="slider-img"/>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className="slider-nav">
                {
                    props.playList.map(function (item, index) {
                        return (
                            <li className={props.isShow[index]===true?'slider-active':''}
                                key={index}
                                data-index={index}
                                onMouseOver={props.onMouseoverNav}>
                                {props.playList.length-index}
                            </li>
                        );
                    })
                }
            </ul>
            <div className={props.mouse?'slider-arrow slider-pre slider-arrow-active':'slider-arrow slider-pre'}
                onClick={props.onPre}> &lt; </div>
            <div className={props.mouse?'slider-arrow slider-next slider-arrow-active':'slider-arrow slider-next'}
                onClick={props.onNext}> &gt; </div>
        </div>
    );
}

Slider.propTypes = {
    mouse: PropTypes.bool.isRequired,
    isShow: PropTypes.array.isRequired,
    isLoading: PropTypes.array.isRequired,
    placeholderSrc: PropTypes.string.isRequired,
    playList: PropTypes.array.isRequired,
    onMouseoverNav: PropTypes.func.isRequired,
    onMouseEnterImage: PropTypes.func.isRequired,
    onMouseLeaveImage: PropTypes.func.isRequired,
    onPre: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
};

module.exports = Slider;

