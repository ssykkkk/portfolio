import { withLayout } from "../../App/App";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { sendMessageToTelegram } from "../../../share/sendMessage";
import styles from "./Contact.module.scss";
import { useTheme } from "../../../share/ThemeContext";
import { IoIosSend } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Contact() {
  const { darkMode } = useTheme();
  const [succsess, setSuccsess] = useState(false);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const message = `
Повідомлення з портфоліо
 Відправник:
 Ім'я: ${formData.name}
 Пошта: ${formData.email}
 Номер: ${formData.phone}
 Повідомлення:
 ${formData.message}
`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccsess(true);
    setTimeout(()=>{
      setSuccsess(false);
    }, 2000)
    sendMessageToTelegram(message);
  };

  return (
    <div
      className={
        darkMode
          ? `${styles.darkTheme} ${"main-content " + styles.wrap}`
          : `${styles.lightTheme} ${"main-content " + styles.wrap}`
      }
    >
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="formEmail">
          <Form.Label>{t("contact.email")}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t("contact.Eemail")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className={styles.data}>
          <Form.Group controlId="formName">
            <Form.Label>{t("contact.name")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("contact.Ename")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>{t("contact.phone")}</Form.Label>
            <Form.Control
              type="tel"
              placeholder={t("contact.Ephone")}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>
        <Form.Group controlId="formMessage">
          <Form.Label>{t("contact.mess")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={t("contact.Emess")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className={styles.butt}>
          {succsess && <div className={styles.succsess}>{t("contact.succsess")}</div>}
          <Button variant="primary" type="submit">
            <IoIosSend />
            <span>{t("contact.send")}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default withLayout(Contact);
