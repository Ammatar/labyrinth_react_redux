# Labirynth game

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Task

Разработать игру «Лабиринт» на ReactJS + Redux.

Есть поле размером 3 на 3 ячейки(продумайте масштабируемость). В начале игры в случайную ячейку помещаем маркер. Далее генерируются 10 «ходов» (возможные варианты «вверх», «влево», «вниз», «вправо»). Игрок должен в уме «пройти» по этим ходам по лабиринту и указать конечную точку маркера.

После ответа (клик на ячейку) идет проверка ответа и предоставляется возможность начать новую игру (например, по клику на кнопку «Далее»).

Если ответ введен неправильно - указать правильный ответ. Дизайн игры произвольный.
