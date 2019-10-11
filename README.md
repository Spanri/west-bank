## Договоренности по коду

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

Например:

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
  font-family: Play;
  text-align: center;
}
```

4. Использовать переменные из scss и выносить их все в файл `_variables.scss` по адресу `src/assets/scss`. Названия цветов начинать со слова `color`.
5. Использовать миксины из scss, то есть выносить часто используемые стили (2 и более раз или по усмотрению) в файл `_mixins.scss` по адресу `src/assets/scss`. Включать миксины (которые добавляют классы в компонент) в самом родительском классе компонента.

#### HTML

1. Делать одиночные теги там, где это возможно
Например, вместо `<div></div>` => `<div/>`
2. df

#### JS

1. Функции называть действием

#### VUE

1. template
2. script
Порядок следования опций компонента/экземпляра (data, created и т.д.), а также порядок атрибутов элемента (v-for, id, ref и т.д.) смотреть в рекомендациях Vue => [кликать сюда](https://ru.vuejs.org/v2/style-guide/index.html#%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA-%D0%BE%D0%BF%D1%86%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0-%D1%8D%D0%BA%D0%B7%D0%B5%D0%BC%D0%BF%D0%BB%D1%8F%D1%80%D0%B0-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D1%82%D1%81%D1%8F)
3. style
Использовать scoped (кроме App.vue) и scss.