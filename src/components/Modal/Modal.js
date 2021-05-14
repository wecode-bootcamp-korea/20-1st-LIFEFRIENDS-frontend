import React, { Component } from 'react';
import '../Modal/Modal.scss';

export class Modal extends Component {
  render() {
    const { open, close, title, content } = this.props;
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {title}
              <button className="close" onClick={close}>
                <i className="fas fa-times"></i>
              </button>
            </header>
            <main>{content}</main>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Modal;
