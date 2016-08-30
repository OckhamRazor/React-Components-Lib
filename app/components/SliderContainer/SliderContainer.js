/**
 * Created by baobaobao on 2016/8/29.
 */

import React from 'react';
require('../../../assets/img/1.jpg');
require('../../../assets/img/2.jpg');
require('../../../assets/img/3.jpg');
require('../../../assets/img/placeholder.png');

//components
var Slider = require('../Slider/Slider');
const placeholderSrc = '/assets/img/placeholder.png';
const playList = [
    {
        imgLink: '#',
        imgSrc: '/assets/img/2.jpg'
    },
    {
        imgLink: '#',
        imgSrc: '/assets/img/3.jpg'
    },
    {
        imgLink: '#',
        imgSrc: '/assets/img/2.jpg'
    },
    {
        imgLink: '#',
        imgSrc: '/assets/img/1.jpg'
    }
];
const duration = 3000;

var SliderContainer = React.createClass({
    getInitialState: function () {
        return {
            mouse: false, //鼠标是否在在滑动盒子上
            index: 0, //当前显示图片index
            isShow: [false,false,false,true], //图片是否显示
            isLoading: [false,false,false,true] //图片是否加载
        }
    },
    //func
    timer: null,
    slider: function() {
        let count = this.state.index-1;
        count = count<0?playList.length-1:count;

        let isShowCopy = this.state.isShow;
        let isLoadingCopy = this.state.isLoading;
        isLoadingCopy = isLoadingCopy.map(function (item,index) {
            return index===count?true:item;
        });
        isShowCopy = isShowCopy.map(function (item,index) {
            return index===count;
        });
        this.setState({
            index: count,
            isShow:isShowCopy,
            isLoading:isLoadingCopy
        });
    },
    //handle event
    handleMouseoverNav: function (e) {
        let showIndex = +e.target.getAttribute('data-index');
        let isShowCopy = this.state.isShow;
        let isLoadingCopy = this.state.isLoading;
        isLoadingCopy = isLoadingCopy.map(function (item,index) {
            return index===showIndex?true:item;
        });
        isShowCopy = isShowCopy.map(function (item,index) {
            return index===showIndex;
        });
        this.setState({
            index: showIndex,
            isShow:isShowCopy,
            isLoading:isLoadingCopy
        });
    },
    handleMouseEnterImage: function () {
        clearInterval(this.timer);
        this.timer = null;
        this.setState({
            mouse: true
        });
    },
    handleMouseLeaveImage: function () {
        this.timer = setInterval(this.slider,duration);
        this.setState({
            mouse: false
        });
    },
    handlePre: function () {
        let count = this.state.index+1;
        count = count>(playList.length-1)?0:count;

        let isShowCopy = this.state.isShow;
        let isLoadingCopy = this.state.isLoading;
        isLoadingCopy = isLoadingCopy.map(function (item,index) {
            return index===count?true:item;
        });
        isShowCopy = isShowCopy.map(function (item,index) {
            return index===count;
        });
        this.setState({
            index: count,
            isShow:isShowCopy,
            isLoading:isLoadingCopy
        });
    },
    handleNext: function () {
        this.slider();
    },
    //life cycle
    componentDidMount: function () {
        let length = playList.length;
        this.setState({
            index:length-1
        });
        this.timer = setInterval(this.slider,duration);
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = null;
    },
    render: function () {
        return (
            <Slider
                    mouse={this.state.mouse}
                    isShow={this.state.isShow}
                    isLoading={this.state.isLoading}
                    playList={playList}
                    placeholderSrc={placeholderSrc}
                    onMouseoverNav={this.handleMouseoverNav}
                    onMouseEnterImage={this.handleMouseEnterImage}
                    onMouseLeaveImage={this.handleMouseLeaveImage}
                    onPre={this.handlePre}
                    onNext={this.handleNext}
            />
        );
    }
});

module.exports = SliderContainer;

