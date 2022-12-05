import React from "react";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.footer_container}>
          <article className={styles.left}>
            <img
              className={styles.meshque_logo}
              src="https://cdn.cubics.tech/meshque_logo.png"
              alt=""
            />
            <nav>
              <div className={styles.footer_navbar}>
                <ul className={styles.categories}>
                  <li className={styles.categories_item}>
                    Contacts and Addresses
                  </li>
                  <li className={styles.categories_item}>About Company</li>
                  <li className={styles.categories_item}>
                    Shipping and Payment
                  </li>
                  <li className={styles.categories_item}>Return Policy </li>
                  <li className={styles.categories_item}>Privacy Policy</li>
                </ul>
              </div>
            </nav>
          </article>

          <div className={styles.icons}>
            <Link className={styles.icon} to="https://www.facebook.com/">
              <FacebookIcon />
            </Link>
            <Link className={styles.icon} to="https://www.instagram.com/">
              <InstagramIcon />
            </Link>
            <Link className={styles.icon} to="https://www.whatsapp.com/">
              <WhatsAppIcon />
            </Link>
            <Link className={styles.icon} to="https://www.youtube.com/">
              <YouTubeIcon />
            </Link>
          </div>
        </div>

        <div className={styles.author}>
          <p>Meshque.com &copy; All rights reserved </p>
          <div className={styles.author_left}>
            <p>Powered by</p>
            <img
              className={styles.cubics}
              src="https://www.meshque.com/img/cubics-brands-white.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;