# book-searcher

## URL: https://olegbrekalo.github.io/book-searcher/
### Олег Брекало для Auto.ru

## Условие задачи

Необходимо сделать поисковик книг с адаптивной версткой.

Описание:
Приложение должно состоять из поисковой строки, куда вводится название книги, рядом должна быть кнопка поиска.
Под строкой поиска должен выводится список сниппетов найденных книг, состоящих из изображения с обложкой, названия книги, автора.
При клике на сниппет книги в модальном окне должна выводится более подробная информация: увеличенное изображение с обложкой, название книги, автор, дата публикации, издатель, ISBN книги.

Требования:
Приложение должно быть одностраничным.
Спустя секунду после ввода последнего символа текста в поисковую строку автоматически должен начаться поиск книг. Если в течении секунды пользователь вводит что-то дополнительно, таймер должен сбрасываться.
Верстка должна быть “тянущейся” от мобильных экранов до больших мониторов.
Все запросы должны идти с клиента в API Open Library (см. API ниже)Приложение должно быть написано с использованием React и Redux
Сборка должна осуществляться через webpack командой npm run build.
Запрещено использовать сторонние UI-библиотеки наподобие Twitter Bootstrap.

API:
Для получения данных о книгах нужно использовать API Open Library: https://openlibrary.org/developers/api.

Для поиска книг нужно использовать Search API: https://openlibrary.org/dev/docs/api/search.
Идентификатор обложки книги приходит в ответе поиска. Получить обложку книги можно, используя Cover API: https://openlibrary.org/dev/docs/api/covers.

Дополнительная информация:
Дизайн предстоит сделать самостоятельно, чувство прекрасного тоже пойдет в зачет. Будет бонусом использование TS и инструментов статического анализа кода. Остальные детали, которых не хватает в задаче, можно выбрать на свое усмотрение.
Разработку нужно вести в публичном git-репозитарии, а решение присылать в виде ссылки на него. В репозитории обратим внимание на осмысленность коммитов.

## Комментарии 
1. Не уверен насчет применения Redux в основном функционале задания, поэтому реализовал дополнительную функцию с закладками, чтобы стало понятно что я знаю что такое Redux.
2. Упрощеный и не оптимальный дизайн мобильной версии в маленьком разрешении, можно лучше, не знаю как.
3. Очень странны API, который возвращает данные вроде имени автора или ISBN в коллекциях, непонятно что с ними делать. Возвращаю на экран только первый элемент из массива.
