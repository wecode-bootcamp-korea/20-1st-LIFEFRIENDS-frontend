import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MainNews/MainNews.scss';

class MainNews extends Component {
  render() {
    return (
      <section className="mainNews mainLargeCards">
        <article>
          <div>
            <h1 className="title">주목할만한 소식</h1>
            <div className="mainLargeCard">
              <div>
                <img
                  alt="character lego"
                  src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNoYXJhY3RlciUyMGxlZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <h2>귀여움에 디테일을 담아</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  facilis similique ullam nemo neque veniam reiciendis dicta
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
              <div>
                <img
                  alt="character lego"
                  src="https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGxlZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
                <h2>귀여움에 디테일을 담아</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  facilis similique ullam nemo neque veniam reiciendis dicta
                  placeat saepe alias officiis error inventore numquam, nihil
                  natus quis voluptates sunt illo!
                </p>
              </div>
            </div>
            <ul className="contentPageBtn">
              <li>
                <button />
              </li>
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
            <div>
              <p className="prev">
                <i class="fas fa-chevron-left" />
              </p>
              <p className="next">
                <i class="fas fa-chevron-right" />
              </p>
            </div>
            <Link to="/" className="linkBtn">
              쇼핑 스토리 전체 보기
            </Link>
          </div>
        </article>
      </section>
    );
  }
}

export default MainNews;
