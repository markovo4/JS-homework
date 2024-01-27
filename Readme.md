**Создайте программу для собеседования с кандидатами на работу. Программа должна включать следующие элементы:**

1. Функция створитиКандидата(ім'я, навички): принимает имя кандидата и список его навыков. Возвращает объект кандидата.
2. Функция додатиВимогу(вимога): добавляет новое требование к списку требований для кандидатов.
3. Функция провестиСпівбесіду(кандидат, вимоги): принимает объект кандидата и список требований. Проверяет, отвечает ли
   кандидат всем требованиям. Возвращает true, если кандидат отвечает всем требованиям, в противном случае - false.
4. Функция заплануватиСпівбесіди(кандидати, вимоги, функціяОцінки): принимает массив кандидатов, список требований и
   функцию оценки. Функция оценки вызывается для каждого кандидата и должна возвращать от 0 до 100. Функция возвращает
   массив кандидатов, отсортированных по оценке, от самой высокой до самой низкой