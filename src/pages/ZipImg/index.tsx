import * as React from "react"
import JSZip from 'jszip'

type Props = {}
type State = {}

// 创建JSZip实例
const zip = new JSZip();

export class ZipImg extends React.Component<Props, State> {

  private onClick = () => {
    // CDN图片URL列表
    const imageUrls = [
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211443194.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116179.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116221.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116220.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116105.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116163.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116156.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116163.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116179.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116221.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116220.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116105.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116240.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693211116156.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693210952504.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208404852.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208404828.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208404881.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208395044.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208395083.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208395075.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208109000.jpg",
      "https://inte-cloudsto.static.chanjet.com/90001104394/2023/7/28/hsy-1693208107015.jpg"
    ]

// 下载图片并添加到压缩包
    Promise.all(imageUrls.map((url,index) => {
      return fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const fileName = url.split('/').pop();
          // @ts-ignore
          return zip.file(index+fileName, blob);
        });
    }))
      .then(() => {
        // 生成压缩包
        return zip.generateAsync({ type: 'blob' });
      })
      .then(content => {
        // 创建下载链接
        const downloadLink = document.createElement('a');
        const href = URL.createObjectURL(content)
        downloadLink.href = href
        downloadLink.download = '外勤照片.zip'; // 设置下载文件名为aaa.zip
        downloadLink.click();
        URL.revokeObjectURL(href)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }



  render() {
    return (
      <button onClick={this.onClick}>点击压缩</button>
    );
  }
}