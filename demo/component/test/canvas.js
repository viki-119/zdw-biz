import React, {Component, PureComponent} from 'react';
import PropType from 'prop-types';

export default class Canvas extends PureComponent {
  // componentDidCatch(err, info) {
  //   console.log('ddddd', err, info)
  // }

  drawAndShareImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 700;
    const context = canvas.getContext("2d");
    context.rect(0 , 0 , canvas.width , canvas.height);
    context.fillStyle = "#fff";
    context.fill();
    const myImage = new Image();
    // myImage.crossOrigin = 'anonymous';
    myImage.setAttribute('crossOrigin', 'anonymous')
    const url = "http://localhost:8000/demo/component/test/20161106191447.jpg";
    myImage.src = url + '?time=' + new Date().valueOf();  //背景图片 你自己本地的图片或者在线图片
    myImage.onload = function(){
      context.drawImage(myImage , 0 , 0 , 700 , 700);
      context.font = "60px Courier New";
      context.fillText("我是文字",350,450);
      const myImage2 = new Image();
      // myImage2.crossOrigin = 'anonymous';
      myImage2.setAttribute('crossOrigin', 'anonymous')
      const url2 = "http://localhost:8000/demo/component/test/faceu_20170214211319.jpg";
      myImage2.src = url2 + '?time=' + new Date().valueOf();  //你自己本地的图片或者在线图片
      myImage2.onload = function(){
        context.drawImage(myImage2 , 175 , 175 , 225 , 225);
        const base64 = canvas.toDataURL("image/jpg"); //"image/png" 这里注意一下
        const img = document.getElementById('avatar');
        // document.getElementById('avatar').src = base64;
        console.log('base64', base64)
        img.setAttribute('src' , base64);
      }
    }
  }

  render() {
    const { person } = this.props;
    return(
      <div>
        <button onClick={this.drawAndShareImage}>点击</button>
        <img src='' id='avatar' />
      </div>
    );
  }
}
