import React, { PureComponent } from 'react';
import { string, array, func } from 'prop-types';
import QrCode from 'qrcode';

export default class MyQrcode extends PureComponent {
  static propTypes = {
    bgImgUrl: string,
    preImgUrl: string,
    list: array,
    onChange: func
    // needRadio: bool
  }

  static defaultProps = {
    bgImgUrl: 'http://www.baidu.com',
    preImgUrl: '/demo/component/test/IMG_20170214_211044.jpg',
    list: [404, 404, 80, 80, 8],
    onChange: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      doneImgUrl: ''
    };
  }

  componentDidMount() {
    const { bgImgUrl, preImgUrl, list } = this.props;
    if (bgImgUrl && preImgUrl) {
      this.drawAndShareImage(bgImgUrl, preImgUrl, list);
    }
  }

  drawAndShareImage = async (bgImgUrl, preImgUrl, list) => {
    const canvas = document.createElement('canvas');
    // const width =
    canvas.width = list[0];
    canvas.height = list[1];
    const context = canvas.getContext('2d');
    context.rect(0, 0, list[0], list[1]);
    context.fillStyle = 'red';
    // context.fillStyle = "#fff";
    context.fill();
    const myImage = new Image();
    // myImage.crossOrigin = 'anonymous';
    myImage.setAttribute('crossOrigin', 'anonymous');
    // QrCode.toDataURL(bgImgUrl).then((url) => {
    //   myImage.src = url;  //背景图片 你自己本地的图片或者在线图片
    //   // + '?time=' + new Date().valueOf()
    // }).catch(err => {
    //   console.log('err', err)
    // })
    const qrBase64 = await QrCode.toDataURL(bgImgUrl);
    myImage.src = qrBase64;
    myImage.onload = () => {
      context.drawImage(myImage, 0, 0, list[0], list[1]);
      // context.font = "60px Arial New";
      // context.fillText("我是文字", 90, 100);
      const myImage2 = new Image();
      // myImage2.crossOrigin = 'anonymous';
      myImage2.setAttribute('crossOrigin', 'anonymous');
      myImage2.src = preImgUrl; // 你自己本地的图片或者在线图片
      myImage2.onload = () => {
        const x = (list[0] - list[2]) / 2;
        const y = (list[1] - list[3]) / 2;
        context.drawImage(myImage2, x, y, list[2], list[3]);
        this.roundRect(context, x - 2, y - 2, list[2] + 2, list[3] + 2, list[4]);
        const base64 = canvas.toDataURL('image/jpg'); // "image/png" 这里注意一下
        if (base64) {
          this.setState({
            doneImgUrl: base64
          });
          this.props.onChange(base64);
        }
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
    const { doneImgUrl } = this.state;
    return (
      <div>
        {
          doneImgUrl
          && <img src={doneImgUrl} id="canvas" alt="" />
        }
      </div>
    );
  }
}
