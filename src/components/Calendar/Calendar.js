import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../Main/Main";
import { useFetch } from "../Hooks/useFetch";
import "./calendar.css";

export const Calendar = () => {
  
  const { data, error } = useFetch();

  return (
    <>
      <Main />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data ? (
              data.map((item) => (
                <li key={item.id} className="calendar-item">
                  <article className="launches">
                    <div className="launches-image">
                      <img src={item.links.patch.small} alt="" />
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{item.name}</h2>
                      <Link to="/details" className="button launches-details">
                        Подробнее
                      </Link>
                    </div>
                  </article>
                </li>
              ))
            ) : error ? (
              <div>Sorry, we will fix it soon...</div>
            ) : (
              <div>Loading...</div>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};
