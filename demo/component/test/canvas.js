import React, { PureComponent } from 'react';
import QrCode from 'qrcode';
// import PropType from 'prop-types';

export default class Canvas extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrurl: 'http://www.baidu.com'
    };
  }

  drawAndShareImage = async () => {
    const { qrurl } = this.state;
    const canvas = document.createElement('canvas');
    const w = 404;
    const h = 404;
    const uW = 80;
    const uH = 80;
    const radius = 8;
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext('2d');
    context.rect(0, 0, w, h);
    context.fillStyle = 'red';
    // context.fillStyle = "#fff";
    context.fill();
    const myImage = new Image();
    // myImage.crossOrigin = 'anonymous';
    myImage.setAttribute('crossOrigin', 'anonymous');
    // QrCode.toDataURL(qrurl).then((url) => {
    //   myImage.src = url;  //背景图片 你自己本地的图片或者在线图片
    //   // + '?time=' + new Date().valueOf()
    // }).catch(err => {
    //   console.log('err', err)
    // })
    const qrBase64 = await QrCode.toDataURL(qrurl);
    myImage.src = qrBase64;
    myImage.onload = async () => {
      context.drawImage(myImage, 0, 0, w, h);
      context.font = '60px Arial New';
      context.fillText('我是文字', 90, 100);
      const myImage2 = new Image();
      // myImage2.crossOrigin = 'anonymous';
      myImage2.setAttribute('crossOrigin', 'anonymous');
      const url2 = 'http://localhost:8000/demo/component/test/IMG_20170214_211044.jpg';
      // const url2 = 'http://cdn.duitang.com/uploads/item/201601/25/20160125201718_txjmM.thumb.700_0.jpeg';
      myImage2.src = `${url2}?time=${new Date().valueOf()}`; // 你自己本地的图片或者在线图片
      // const canvas2 = document.createElement('canvas');
      // const upLoadBase64 = await canvas2.toDataURL(url2);
      // console.log('upLoadBase64', upLoadBase64);
      // const context2 = canvas.getContext('2d');
      // context.drawImage(myImage2);

      // myImage2.src = upLoadBase64;
      myImage2.onload = () => {
        const x = (w - uW) / 2;
        const y = (h - uH) / 2;
        context.drawImage(myImage2, x, y, uW, uH);
        this.roundRect(context, x - 2, y - 2, uW + 2, uH + 2, radius);
        const base64 = canvas.toDataURL('image/jpg'); // "image/png" 这里注意一下
        const img = document.getElementById('avatar');
        img.setAttribute('src', base64);
      };
    };
  }

  // 绘制圆角矩形 https://www.jianshu.com/p/5b0266b35b77
  roundRect = (ctx, x, y, w, h, radius) => {
    ctx.save();
    let r = radius;
    if (w < 2 * r) { r = w / 2; }
    if (h < 2 * r) { r = h / 2; }
    ctx.beginPath();
    // ctx.setStrokeStyle('white');
    // ctx.setFillStyle('white')
    // ctx.setLineWidth(4);
    ctx.strokeStyle = 'white';
    // ctx.fillStyle = 'white';
    ctx.lineWidth = 4;
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.stroke();
    ctx.closePath();
    // ctx.draw(true);
  }

  render() {
    // const { person } = this.props;
    return (
      <div>
        <button onClick={this.drawAndShareImage}>点击生成二维码</button>
        <img src="" id="avatar" alt="" />
      </div>
    );
  }
}
