import React,{useState} from 'react'
import QRCode from 'qrcode.react';
import './style.css';


const QrCodeGenerator = () => {
    const [text, setText ] = useState('');

     const handleGenerateClick = () => {
       // You can add additional logic here if needed before generating the QR code
     };

     const handleDownloadClick = () => {
       const canvas = document.getElementById("qrcode-canvas");
       const dataUrl = canvas.toDataURL("image/png");
       const a = document.createElement("a");
       a.href = dataUrl;
       a.download = "qrcode.png";
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
     };

  return (
    <div>
      <form>
        <h1>QR Code Generator</h1>
        <div className="container">
          {/* <label>Enter text :</label><br/><br/> */}
          <input
            type="text"
            value={text}
            placeholder="Enter the URL ..!"
            onChange={(e) => setText(e.target.value)}
          />

          {/* <button onClick={handleGenerateClick}>Generate QR Code</button> */}
          <div className="qr-code">
            <QRCode id="qrcode-canvas" value={text} />
          </div>
          {text && (
            <button className="download" onClick={handleDownloadClick}>
              Download QR Code
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QrCodeGenerator