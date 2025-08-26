import React from 'react';
import QRCode from 'qrcode.react';

export default function QRCodeModal({ url, onClose }) {
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share QR Code</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <QRCode value={url} size={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
