# Learn

## Описание

Learn - это проект, который объединяет в себе всю учебную практику, по всем
технологиям, которые я изучаю в той или в иной степени.

Название директории в корне совпадает с названием технологии, материалы по которой
находятся внутри данной директории. В каждой директории в основном (по возможности)
находятся только материалы имеющие к этой технологии прямое отношение (например
в директории PHP будут только файлы на .php и возможно несколько вспомогательных типа .md
для описания того что происходит и т. д.).

В директории с названием **projects** находятся проекты всегда сочетающие в себе стек технологий
и максимально приближенные (или вообще не отличимые) от реальных. Но все эти проекты создаются
всегда с одной целью - попрактиковаться в использовании стека технологий.

### О том, как всё организованно в директориях с технологиями

Внутри любой директории, с любой технологией есть следующие поддиректории:

**comp** (computations) - тут хранятся всякие выкладки, которые в процессе освоения технологии,
было бы неплохо воспроизвести руками (например создание компонентов в React), а так же полезную,
тезисную информацию по этим выкладкам. Содержит среду выполнения, либо ссылку на неё для возможности
запуска выкладок.

**exp** (experiments) - эта директория нужна для того, чтобы можно было бы в случае необходимости
проверить какой-нибудь рандомный код на нужной технологии, на работоспособность (например забыл
как ведёт себя какая то функция, если ей передать меньшее число параметров, или забыл какой параметр
она принимает первым, а какой вторым и т. д., проще всего просто запустить и посмотреть). Содержит
среду выполнения, либо ссылку на неё для возможности запуска всякого.

**prag** (pragmatism) - внутри этой папки лежат интересные кейсы, с прикладными задачами в рамках
какой то одной технологии, которые постоянно возникают в самых разных ситуациях (например пока
я это пишу, мне пришла в голову идея, а возможно ли при пуше в гите, обновлять этот readme файл
автоматически, так чтобы какая то часть информации в нём менялась в соответствии с текущим состоянием
репозитория). Чтобы такие полезные идеи, которые далеко не всегда можно запрогать тут же не терялись,
они все будут аккумулироваться тут.

**tasks** - это задачи которые сперва придумываются, а потом решаются. В файле tasks.md содержится
полный список задач, а в директории папки с задачами, с нумерацией соответствующей той что в файле.
Скрипт **create_task.sh** создаёт внутри директории с новой задачей шаблон с файлами, нужный
для начала работы над задачей в рамках выбранной технологии. Все остальные файлы и папки являются
шаблоном для создания новой задачи.

### О том, как всё организованно в папке projects

Тут все достаточно просто, одна папка = один проект. Внутри проекта есть самостоятельный readme
в котором всё написано о нём.