#ChromaScape

##Описание
ChromaScape — это проект, предназначенный для практики верстки и создания анимаций. Проект состоит из шести разделов, каждый из которых демонстрирует использование различных технологий и подходов к анимации. На данный момент работа ведется над двумя секциями:

###Лес:
1.  Анимации и эффекты реализованы преимущественно без использования сторонних пакетов и готовых решений.
2.  Текст и изображения в статьях используют трансформации (transform: translate), чтобы создавать плавные анимации.
3.  Галерея постепенно проявляется по мере скроллинга благодаря использованию IntersectionObserver.
4.  Используются фотографии с сайта Unsplash, а также Unsplash API для динамической загрузки изображений.

###Пустыня:
1.  Галерея реализована с использованием библиотеки Framer Motion для создания эффектов параллакса и других анимаций.

---
Проект написан на TypeScript и построен с использованием React, что обеспечивает строгую типизацию и современный подход к разработке.

##Стэк технологий
###Зависимости (dependencies)
* React (^18.3.1) и ReactDOM (^18.3.1)
* Framer Motion (^12.4.7) — библиотека для создания плавных и сложных анимаций, используется в секции "Пустыня".
* React Intersection Observer (^9.15.1) — библиотека для работы с IntersectionObserver, используется в секции "Лес" для анимации при скролле.
* React Router DOM (^7.1.5)
* Reset CSS (^5.0.2)
* UUID (^11.0.5) — библиотека для генерации уникальных идентификаторов, используется для ключей в списках.

###Инструменты разработки (devDependencies)
* TypeScript (~5.6.2)
* Vite (^6.0.5)
* @vitejs/plugin-react (^4.3.4)
* Sass (^1.84.0)
* Autoprefixer (^10.4.20) и PostCSS (^8.5.1)
* ESLint (^9.17.0), @eslint/js (^9.17.0), eslint-plugin-react-hooks (^5.0.0), eslint-plugin-react-refresh (^0.4.16), globals (^15.14.0)
* @types/react (^18.3.18) и @types/react-dom (^18.3.5)
* TypeScript ESLint (^8.18.2)

##Установка и запуск
###Требования
* Node.js (версия 16 или выше)
* npm или Yarn

##Текущий прогресс
На данный момент проект находится в стадии активной разработки. Ведутся работы над двумя секциями:

* Лес: Реализованы анимации без сторонних библиотек (только transform: translate), работа с IntersectionObserver для появления текста, изображений и галереи. Изображения загружаются через Unsplash API и хранятся локально.
* Пустыня: Реализована галерея с использованием Framer Motion для создания параллакс-эффектов и других анимаций.

Планируется разработка еще четырех секций, каждая из которых будет использовать уникальные технологии анимации (например, GSAP, Lottie, или собственные решения).
