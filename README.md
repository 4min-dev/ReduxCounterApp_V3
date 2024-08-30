<h1 align="center">RU | Redux counter App V3</h1>

[V1](https://github.com/4min-dev/A-2_V1_ReduxCounterApp) | [V2](https://github.com/4min-dev/A-2_V2_ReduxCounterApp) | [V3](https://github.com/4min-dev/A-2_V3_ReduxCounterApp) | [V4](https://github.com/4min-dev/A-2_V4_ReduxCounterApp) | [V5](https://github.com/4min-dev/A-2_V5_ReduxCounterApp)

<h2 align="center">Технологический стек, используемый в проекте:</h2>

- CSS;
- HTML;
- JS;
- TS;
- React;
- Redux;
- Redux-saga;
- Redux-thunk;
- Redux-toolkit.

<h2 align="center">Что нового?</h2>

Добавлена поддержка redux-toolkit, createStore был заменён на configureStore для более современного и понятного подхода к работе со стором.

Была расширена работа с ошибками, был создан главный редюсер, обрабатывающий глобально возникшие ошибки.

Благодаря внедрению redux-toolkit исчезла потребность отдельно устанавливать redux-thunk, поскольку его middleware по дефолту хранит внутри себя данный инструмент.

<hr/>

<h1 align="center">EN | Redux counter App V3</h1>

<h2 align="center">Technology stack:</h2>

- CSS;
- HTML;
- JS;
- TS;
- React;
- Redux;
- Redux-saga;
- Redux-thunk;
- Redux-toolkit.

<h2 align="center">Whats new?</h2>

Added redux-toolkit support, createStore has been replaced by configureStore for a more modern and understandable approach to working with the store.

Error handling has been extended, and a master editor has been created to handle globally occurring errors.

The redux-toolkit implementation eliminated the need to install redux-thunk separately, since its middleware stores this tool internally by default.

Redux-thunk now works in compatibility with redux-toolkit.
