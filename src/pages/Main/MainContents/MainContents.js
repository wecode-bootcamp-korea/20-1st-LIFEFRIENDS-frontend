import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainContents.scss';

class MainContents extends Component {
  render() {
    return (
      <section>
        <header className="mainHearder">
          <div>
            <h1>우리의 만남 청량함 가득</h1>
            <p>LIFE FRIENDS & Character</p>
          </div>
          <div>
            <ul>
              <li>
                <img
                  alt="character"
                  src="https://images.unsplash.com/photo-1521249635712-69ca33adf729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </li>
              <li>
                <img
                  alt="character"
                  src="https://images.unsplash.com/photo-1613750651512-d65ce96dff55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </li>
              <li>
                <img
                  alt="character"
                  src="https://images.unsplash.com/photo-1610568781018-995405522539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </li>
              <li>
                <img
                  alt="character"
                  src="https://images.unsplash.com/photo-1587303150910-b05077a4fb45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </li>
            </ul>
            <p className="prev">
              <i class="fas fa-chevron-left" />
            </p>
            <p className="next">
              <i class="fas fa-chevron-right" />
            </p>
          </div>
          <ul>
            <li>
              <button />
            </li>
            <li>
              <button />
            </li>
            <li>
              <button />
            </li>
          </ul>
        </header>
        <section className="mainNews">
          <article>
            <h1>주목할만한 소식</h1>
            <div>
              <img
                alt="character lego"
                src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNoYXJhY3RlciUyMGxlZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <h2>귀여움에 디테일을 담아</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <img
                alt="character lego"
                src="https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYXJhY3RlciUyMGxlZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <h2>귀여움에 디테일을 담아</h2>
              <p>
                At, facilis similique ullam nemo neque veniam reiciendis dicta
                placeat saepe alias officiis error inventore numquam, nihil
                natus quis voluptates sunt illo!
              </p>
            </div>
            <div>
              <img
                alt="character lego"
                src="https://images.unsplash.com/photo-1525097522700-a4b80b773931?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxjaGFyYWN0ZXIlMjBsZWdvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <h2>귀여움에 디테일을 담아</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                facilis similique ullam nemo neque veniam reiciendis
              </p>
            </div>
            <Link to="/">쇼핑 스토리 전체 보기</Link>
          </article>
        </section>
        <section className="mainCoupon">
          <div>
            <div className="coupon"></div>
            <div className="couponDesc">
              <h2>LIFE FRIENDS 고객님을 위한 혜택</h2>
              <p>스토어찜 고객에게 드리는 혜택! 2,000원 장바구니 할인</p>
              <button>쿠폰받기</button>
            </div>
            <ul>
              <li>
                <button />
              </li>
              <li>
                <button />
              </li>
              <li>
                <button />
              </li>
            </ul>
          </div>
        </section>
        <section className="mainGift">
          <h1>선물하기 좋은 제품</h1>
          <div>
            <img
              alt="character lego"
              src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNoYXJhY3RlciUyMGxlZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <h2>귀여움에 디테일을 담아</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className="prev">
            <i class="fas fa-chevron-left" />
          </p>
          <p className="next">
            <i class="fas fa-chevron-right" />
          </p>
          <ul>
            <li>
              <button />
            </li>
            <li>
              <button />
            </li>
          </ul>
        </section>
        <section className="mainReview"></section>
        <section className="mainThema">
          <h1>#우리집 홈카페</h1>
        </section>
        <section>
          <h1>마음껏 둘러보세요</h1>
        </section>
        <section className="mainBottom">
          <h2>LIFE FRIENDS</h2>
          <div>
            <p>끝없는 득템의 재미</p>
            <p>LIFE FRIENDS 공식 브랜드 스토어</p>
            <p>#LIFEFRIENDS #Character #Goods</p>
          </div>
          <button>찜하기 158,355</button>
          <span>
            <i class="far fa-share-square" />
          </span>
          {/* <img
            alt="lego"
            src="https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ4fHxjaGFyYWN0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          /> */}
        </section>
      </section>
    );
  }
}

export default MainContents;
