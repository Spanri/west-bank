## Уважаемым бекендерам

Мне сказали сделать только верстку. Я сделала не только верстку (еще аутентификацию), но эта "не только верстка" в стоимость не входила, поэтому если "не только верстка" вам все таки нужна, то сообщите главным по проекту (вам же легче) (но они не знают, что я что-то еще делала).

## Договоренности по стилю кода

#### * Методология БЭМ

#### * Длина строки - 80

#### * Форматирование (смотри `.eslintrc.js`)

Если используется VSCode, то можно указать в настройках IDE:

```json
"eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
  ],
```

В этом случае при нажатии `ctrl+S` код автоматически исправится.

#### * Поддержка браузеров

```
IE 11+
Firefox, Chrome, Safari, Opera => last 2 versions
```

#### * CSS

1. Препроцессоры - scss + postcss
2. Верстка с помощью flex
3. Разделение кода внутри блока пробелами на то, что относится к:

```
width/height
position
display (если flex, то здесь же всё, что относится к flex)
оформление текста
другое
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Например:

```css
.class {
  width: 10px;
  height: 20px;

  position: absolute;
  top: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: red;
  font-family: Play, sans-serif;
  text-align: center;
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Однако, если свойств 3 и меньше, не использовать разделение.

4. Внутри части блока (например, блок `width/height`) сортировать свойства по алфавиту (но display и position сверху).
5. Между блоками использовать отступы, а также перед и после блоков, если они вложенные. Например:

```css
@media screen, projection {
  
    html {
      background: #fff;
      color: #444;
    }

    a {
      color: red;
    }
  
  }
```

6. Файлы `_variables.scss`, `_fonts.scss`, `_mixins.scss` и подобные им по адресу `src/assets/scss` включать глобально с помощью вебпака (смотри файл `vue.config.js`).
7. Использовать переменные из scss и выносить их все в файл `_variables.scss`. Названия цветов начинать со слова `color`.
8. Шрифты выносить в `public/index.html`.
9. Использовать миксины из scss, то есть выносить часто используемые стили (2 и более раз или по усмотрению) в файл `_mixins.scss` по адресу `src/assets/scss`. Включать миксины (которые добавляют классы в компонент) в самом родительском классе компонента.
10. Использовать сокращенные формы записи там, где это возможно.
Например, вместо

```css
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; использовать

```css
font: 100%/1.6 palatino, georgia, serif;
```

11. В нулевых значениях не использовать единицы измерения.
12. Не ставить 0 в дробных значениях (`.8em`, а не `0.8em`).
13. Все цвета делать с использованием переменных.
14. Договоренности по z-index

| Значение | Блок |
|----------|------|
| 100 | HeaderMobile родительский элемент |
| 12 | HeaderMobile hamburger |
| 11 | HeaderMobile menu (которое открывается) |
| 10 | Header |
| 9 | NavIfAuth .router-link-active |
| 8 | NavIfAuth .nav (не активные) |
| 7 | Select dropdown |

| Значение | Блок |
|----------|------|
| 7 | ForPrivate наведение на item |
| 6 | ForPrivate checked item |
| 5 | ForPrivate pre-checked item |
| 4 | ForPrivate pre-pre-checked item |
| 3 | ForPrivate pre-pre-pre-checked item |

| Значение | Блок |
|----------|------|
| 7 | NavPhases text |
| 6 | NavPhases checked block (без текста) |
| 6 | NavPhases checked 12 и 22 |

| Значение | Блок |
|----------|------|
| 3 | NewsBlock block |
| 2 | NewsBlock first |
| 1 | NewsBlock second |

#### HTML

1. Делать одиночные теги там, где это возможно
Например, вместо `<div></div>` => `<div/>`
2. что-то еще

#### JS

1. Функции называть действием

#### VUE

1. template
2. script
Порядок следования опций компонента/экземпляра (data, created и т.д.), а также порядок атрибутов элемента (v-for, id, ref и т.д.) смотреть в рекомендациях Vue => [кликать сюда](https://ru.vuejs.org/v2/style-guide/index.html#%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA-%D0%BE%D0%BF%D1%86%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0-%D1%8D%D0%BA%D0%B7%D0%B5%D0%BC%D0%BF%D0%BB%D1%8F%D1%80%D0%B0-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D1%82%D1%81%D1%8F)
3. style
Использовать scoped (кроме App.vue) и scss.