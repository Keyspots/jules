import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../services/firebase';

export default function LoginModal({ onClose }) {
  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Verify Your Business</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Get free access for 14 days. After that, upgrade to Premium ($19.99/mo).</p>
            <button className="btn btn-primary w-100" onClick={loginGoogle}>Sign in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}
