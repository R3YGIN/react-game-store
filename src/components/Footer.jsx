import { ArrowCircleUp, Telegram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footer__social}>
          <ul className={styles.social__list}>
            <li className={styles.social__link}>
              <a href="#">
                <YouTube
                  className={styles.social__icon}
                  style={{ fontSize: "50px" }}
                />
              </a>
            </li>
            <li className={styles.social__link}>
              <a href="#">
                <Telegram
                  className={styles.social__icon}
                  style={{ fontSize: "50px" }}
                />
              </a>
            </li>
            <li className={styles.social__link}>
              <a href="#">
                <Twitter
                  className={styles.social__icon}
                  style={{ fontSize: "50px" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_upBtn}>
          <a href="#header">
            <ArrowCircleUp
              className={styles.social__icon}
              style={{ fontSize: "75px" }}
            />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.footer__block}>
          <div className={styles.footer__title}>
            <span>Ресурсы</span>
          </div>
          <ul className={styles.footer__list}>
            <li>
              <a href="#" className={styles.footer__link}>
                Поддержка авторов
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Публикация
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Вакансии
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Компания
              </a>
            </li>
          </ul>
          <ul className={styles.footer__list}>
            <li>
              <a href="#" className={styles.footer__link}>
                Правила неофициальных материалов
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Исследования пользовательского опыта
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Лицензионное соглашение с конечным пользователем магазина
              </a>
            </li>
          </ul>
          <ul className={styles.footer__list}>
            <li>
              <a href="#" className={styles.footer__link}>
                Сетевые службы
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Правила сообщества
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Newsroom
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__block}>
          <div className={styles.footer__title}>
            <span>Сотрудничество</span>
          </div>
          <ul className={styles.footer__list}>
            <li>
              <a href="#" className={styles.footer__link}>
                Сетевые службы
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Правила сообщества
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Newsroom
              </a>
            </li>
          </ul>
          <ul className={styles.footer__list}>
            <li>
              <a href="#" className={styles.footer__link}>
                Сетевые службы
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Правила сообщества
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Newsroom
              </a>
            </li>
          </ul>
        </div>
        <hr style={{ color: "#333", margin: "16px 0 43px" }} />
        <div className={styles.footer__block}>
          <span className={styles.footer__copyright}>
            © 2022, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium sequi corrupti quidem quod illum voluptatibus est
            deserunt ipsum maiores quo necessitatibus sint natus error, repellat
            sapiente blanditiis mollitia, consequuntur rerum. In inventore quas
            est saepe necessitatibus quo, suscipit tenetur vitae molestias natus
            unde excepturi quia maiores? Voluptas placeat rerum id eum alias
            perspiciatis quia temporibus tempora? Numquam beatae dolorem
            pariatur.
          </span>
        </div>
        <div className={styles.footer__legal}>
          <ul className={styles.legal__list}>
            <li className={styles.legal__link}>
              <a href="#">Условия предоставления услуг</a>
            </li>
            <li className={styles.legal__link}>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li className={styles.legal__link}>
              <a href="#">Правила возврата магазина</a>
            </li>
          </ul>
          <div className={styles.legal__logo}>
            <img src="" alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
