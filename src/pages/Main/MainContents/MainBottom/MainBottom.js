import React, { Component } from 'react';
import '../MainBottom/MainBottom.scss';

class MainBottom extends Component {
  render() {
    return (
      <section className="mainBottom">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ4fHxjaGFyYWN0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <div className="mainBottomContent">
          <h1 className="title">LIFE FRIENDS</h1>
          <div>
            <p>끝없는 득템의 재미</p>
            <p>LIFE FRIENDS 공식 브랜드 스토어</p>
            <p>#LIFEFRIENDS #Character #Goods</p>
            <div>
              <button>찜하기 158,355</button>
              <span>
                <i class="far fa-share-square" />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainBottom;
