// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        theme: {
          dark: "dark mode",
          light: "light mode",
        },
        // info
        info: {
          name: "Stanislav Kozak",
          mail: "email",
          phone: "phone",
          locationT: "location",
          location: "Kyiv, Ukraine",
        },
        // menu
        menu: {
          about: "About",
          resume: "Resume",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
          aboutMe: "About Me",
        },
        // page about
        pageAbout: {
          pAbout1: `I am a beginner Front-end Developer from Kyiv, Ukraine. I have
          a limited experience working on freelance projects, but I am actively
          learning and quickly acquiring new knowledge and skills.`,
          pAbout2: `In my toolkit, I already have a basic understanding of HTML, CSS, and
        JavaScript, which I use to create simple interfaces and web pages.
        Leveraging these technologies allows me to develop attractive and
        functional websites with an understanding of their structure and user
        interactions. Currently, I am focusing on in-depth learning of React
        and Angular - popular frameworks and libraries for front-end
        development. This will enable me to create more complex web
        applications using a component-based approach and interacting with
        APIs.`,
          pAbout3: `My English skills allow me to communicate with colleagues and clients,
        understand documentation, and utilize resources related to web
        development. I am confident that I can tackle web development tasks
        and provide quality solutions, considering best practices. In my
        opinion, my level of English is between B1 and B2.`,
          pAbout4: `As a front-end developer, my goal is continuous improvement of my
        skills, learning new technologies, and creating innovative and
        user-friendly interfaces. I am ready for collaboration and new
        challenges that will help me grow and become an experienced front-end
        developer.`,
          whatido: "What i do",
          b1t: "Creation of static web pages",
          b1p: `Create simple web pages using HTML and CSS, integrating text,
        images and other elements.`,
          b2t: "Implementation of design",
          b2p: `Work with designers to turn their mockups into live web pages or
        apps, ensuring the right interface structure and look and feel.`,
          b3t: "Development of mobile adaptation",
          b3p: `Create web pages and applications that will be optimally
        displayed on different devices, such as smartphones and tablets,
        with responsive design.`,
          b4t: "Development of interactive web applications",
          b4p: `Use JavaScript, along with HTML and CSS, to create web
        applications with dynamic features and user interaction.`,
          b5t: "Optimization of web pages",
          b5p: `Work on optimizing web page loading speed, reducing file size,
        using caching, and other methods to improve performance.`,
          b6t: "Testing and debugging",
          b6p: `Code testing, identify and fix bugs and issues, ensuring your
        web applications are stable and reliable across browsers and
        devices.`,
        },
        resume: {
          downloadText: "Press the button to upload resume file :",
          downloadLink: "Download",
        },
        contact: {
          email: "Email",
          Eemail: "Enter email",
          name: "Name",
          Ename: "Enter name",
          phone: "Phone",
          Ephone: "Enter phone",
          mess: "Message",
          Emess: "Enter your message",
          send: "Send Message",
          succsess: "Message successfully sent!"
        },
        projects: {
          butt: "go to the site",
          portfolio:{
            name: "Portfolio",
            title: "My portfolio serves as a showcase of my creativity and skills in frontend development. Within it, I've presented a range of projects that reflect my expertise in utilizing HTML, CSS, JavaScript, and other modern technologies. Each project is accompanied by a description, demonstrating my understanding of user needs and ability to craft aesthetically pleasing and functional web interfaces. I invite you to explore my work and witness my professional approach to web development."
          },
          flashcards: {
            name: "flashcards",
            title: "Flashcard quizzes are effective tools for learning and reviewing information. They promote active recall, are convenient for studying on-the-go, and can be customized to suit individual needs. Their versatility and engagement make them valuable for mastering a wide range of subjects and concepts.",
          },
          html: {
            name: "html-layout",
            title: "HTML layout refers to how content is structured and organized within a webpage. It involves using elements like `<div>`, `<header>`, `<footer>`, and `<section>` to create a clear hierarchy. Techniques such as CSS Grid, Flexbox, and responsive design ensure the layout adapts to different screen sizes. Semantic HTML and accessibility considerations improve usability and search engine optimization. Overall, a well-planned HTML layout enhances readability and user experience on the web."
          },
          library: {
            name: "Library",
            title: "A website for a librarian with statistical capabilities allows managing the library catalog, analyzing lending statistics, managing users, and accessing reports. The statistical dashboard tracks metrics such as user activity, lending trends, collection analysis, and website usage."
          },
          angl : {
            name: "PostHub",
            title: "A website for creating posts and authorization allows users to generate and manage content securely. Users can create, edit, and organize posts, while authentication mechanisms ensure only authorized individuals can access certain features."
          },
          tooltip: {
            name: "Name",
            title: "Description",
            link: "Link to GitHub",
            butt: "go to github",
            lang: "Programming language (framework)",
            langlayo: "HTML/CSS without use JS"
          }
        },

      },
    },
    uk: {
      translation: {
        theme: {
          dark: "dark mode",
          light: "light mode",
        },
        // info
        info: {
          name: "Станіслав Козак",
          mail: "пошта",
          phone: "номер",
          locationT: "локація",
          location: "Київ, Україна",
        },
        // Menu
        menu: {
          about: "Про мене",
          resume: "Резюме",
          skills: "Навички",
          projects: "Проєкти",
          contact: "Контакт",
          aboutMe: "Про мене",
        },
        // page about
        pageAbout: {
          pAbout1: `Я новачок у сфері розробки фронтенду з Києва,
          Україна. Маю обмежений досвід роботи над фріланс-проектами,
           але активно вивчаю та швидко здобуваю нові знання та навички.`,
          pAbout2: `У моєму інструментарії вже є базове розуміння HTML,
          CSS та JavaScript, яке я використовую для створення простих 
          інтерфейсів та веб-сторінок. Використання цих технологій дозволяє
           мені розробляти привабливі та функціональні веб-сайти з розумінням
          їх структури та взаємодії з користувачем. На даний момент
          я активно зосереджуюся на глибокому вивченні React та Angular
           - популярних фреймворків та бібліотек для фронтенд-розробки.
            Це дозволить мені створювати більш складні веб-застосунки,
            використовуючи компонентний підхід та взаємодію з API.`,
          pAbout3: `Мої навички англійської дозволяють мені спілкуватися
          з колегами та клієнтами, розуміти документацію та використовувати
           ресурси, пов'язані з веб-розробкою. Я впевнений, що можу впоратися
            із завданнями з веб-розробки та надавати якісні рішення,
             дотримуючись найкращих практик. На мою думку, мій рівень англійської
              знаходиться між рівнями B1 та B2.`,
          pAbout4: `Як розробник фронтенду, моя мета - постійне вдосконалення навичок,
          вивчення нових технологій та створення інноваційних та зручних інтерфейсів
           для користувачів. Я готовий до співпраці і нових викликів, які допоможуть
            мені розвиватися і стати досвідченим фронтенд-розробником.`,
          whatido: "Що я роблю",
          b1t: "Створення статичних веб-сторінок",
          b1p: `Створення простих веб-сторінок за допомогою HTML та CSS, інтегруючи текст, зображення та інші елементи.`,
          b2t: "Втілення дизайну",
          b2p: `Співпраця з дизайнерами для перетворення їх макетів
          у функціональні веб-сторінки або додатки, забезпечуючи правильну
           структуру і зовнішній вигляд інтерфейсу.`,
          b3t: "Розробка мобільної адаптації",
          b3p: `Створення веб-сторінок та додатків, які будуть оптимально відображатися на різних пристроях, таких як смартфони та планшети, за допомогою адаптивного дизайну.`,
          b4t: "Розробка інтерактивних веб-додатків",
          b4p: `Використання JavaScript разом із HTML та CSS для створення веб-додатків з динамічними функціями та взаємодією з користувачем.`,
          b5t: "Оптимізація веб-сторінок",
          b5p: `Робота над оптимізацією швидкості завантаження веб-сторінок, зменшенням розміру файлів, використанням кешування та інших методів для покращення продуктивності.`,
          b6t: "Тестування та відлагодження",
          b6p: `Тестування коду, виявлення та усунення помилок і проблем, забезпечення стабільності та надійності веб-додатків на різних браузерах та пристроях.`,
        },
        resume: {
          downloadText: "Натисніть на кнопку для завантаження файлу резюме :",
          downloadLink: "Завантажити",
        },
        contact: {
          email: "Пошта",
          Eemail: "Введіть пошту",
          name: "Ім'я",
          Ename: "Введіть ім'я",
          phone: "Номер телефону",
          Ephone: "Введіть номер телефону",
          mess: "Повідомлення",
          Emess: "Введіть ваше повідомлення",
          send: "Надіслати",
          succsess: "Повідомлення успішно відправлено!"
        },
        projects: {
          butt: "перейти на сайт",
          portfolio:{
            name: "Портфоліо",
            title: "Моє портфоліо - це візитівка моєї творчості та навичок у сфері фронтенд-розробки. В ньому я представив ряд проектів, які відображають мою експертизу у використанні HTML, CSS, JavaScript та інших сучасних технологій. Кожен проект має опис, демонструючи моє розуміння потреб користувачів та здатність створювати естетичний та функціональний веб-інтерфейс. Запрошую вас ознайомитися з моїми роботами!"
          },
          flashcards: {
            name: "флешкарти",
            title: "Флешкартки-вікторини є ефективними інструментами для вивчення та повторення інформації. Вони сприяють активному згадуванню, зручні для вивчення у русі, і можуть бути налаштовані під індивідуальні потреби. Їхню універсальність та залучення роблять їх цінними для опанування різних предметів і концепцій.",
          },
          html: {
            name: "Макет HTML",
            title: "Макет HTML - це спосіб організації та структурування контенту на веб-сторінці. Це включає використання елементів, таких як `<div>`, `<header>`, `<footer>` і `<section>`, щоб створити чітку ієрархію. Техніки такі як CSS Grid, Flexbox та адаптивний дизайн забезпечують адаптацію макету до різних розмірів екрану. Семантичний HTML та аспекти доступності покращують зручність використання та оптимізацію для пошукових систем. Загалом, добре спланований макет HTML покращує зручність читання та користування веб-ресурсом."
          },
          library: {
            name: "Бібліотека",
            title: "Вебсайт для бібліотекаря зі статистичними функціями надає можливість керувати каталогом бібліотеки, аналізувати показники видачі, керувати користувачами та мати доступ до звітів. Статистична панель відстежує такі метрики, як активність користувачів, тенденції видачі книг, аналіз колекцій та використання веб-сайту."
          },
          angl : {
            name: "ПостХаб",
            title: "Веб-сайт для створення постів та авторизації дозволяє користувачам безпечно генерувати та керувати контентом. Користувачі можуть створювати, редагувати та організовувати пости, тоді як механізми автентифікації забезпечують, що лише авторизовані особи можуть мати доступ до певних функцій."
          },
          tooltip: {
            name: "Назва",
            title: "Опис",
            link: "Посилання на GitHub",
            butt: "перейти на github",
            lang: "Мова програмування (фреймворк)",
            langlayo: "HTML/CSS без використання JS"
          }
        },
      },
    },
  },
  lng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
