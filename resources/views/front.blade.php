<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="{{ mix('/css/front/style.css') }}" " rel="stylesheet ">
    <title>3D Ручка. Акция | Товары для дома и семьи</title>
    <link href="./img/icon_homex48.png " type="image/png " rel="icon " sizes="48x48 " />
    <link rel="preconnect " href="https://fonts.gstatic.com ">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500;700&display=swap " rel="stylesheet ">
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '401910537915615');
fbq('track', 'PageView');
</script>
<noscript><img height="1 " width="1 " style="display:none "
src="https://www.facebook.com/tr?id=401910537915615&ev=PageView&noscript=1 "
/></noscript>
<!-- Hotjar Tracking Code for https://hometovari.com/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2109569,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<!-- End Facebook Pixel Code -->
</head>

<body class="font-roboto " >
<div  id="app ">
    <div class="flex ">
        <div class="flex-1 w-full ">
            <img src="./img/3D-pen-upakovka.jpg " class="object-contain w-full max-w-smm md:max-w-lg xl:max-w-6xl ">
            <div class="ml-1 mt-4 md:hidden ">
                <div class="inline-flex ">
                    <img src="./img/podarokx48.png " class="object-contain w-6 h-6 ">
                    <span class="text-sm text-left pr-1 ">10 метров пластика
                        PLA в подарок</span>
                </div>
                <div class="inline-flex ">
                    <img src="./img/checkerx48.png " class="object-contain w-6 h-6 ">
                    <span class="self-center text-sm text-left pr-1 ">Оплата при получении</span>
                </div>
            </div>

        </div>
        <div class=" flex-1 text-center mr-2 " >
            <div class="flex justify-end ">
                <img src="./img/logo_tovarihome.png " class="object-contain max-w-logosm ">
            </div>
            <div class="w-full text-center font-bold mt-6 text-medium md:text-xl lg:text-twomedium ">
                3D РУЧКА ДЛЯ РИСОВАНИЯ
            </div>
            <div class="md:flex flex-wrap ml-1 mt-4 smm:hidden sm:hidden w-full ">
                <div class="inline-flex xl:w-full xl:mt-4 ">
                    <img src="./img/podarokx48.png " class="object-contain w-10 h-10 mr-2 ">
                    <span class="self-center md:text-lg lg:text-xl text-base text-left pr-1 ">10 метров пластика
                        PLA в подарок</span>
                </div>
                <div class="inline-flex xl:w-full xl:mt-4 ">
                    <img src="./img/checkerx48.png " class="object-contain w-10 h-10 mr-2 ">
                    <span class="self-center md:text-lg lg:text-xl text-base text-left pr-1 ">Оплата при получении</span>
                </div>
            </div>
            <div class="inline-flex mt-4 justify-center w-full smm:mt-4 ">
                <div class="text-red-600 pr-2 font-bold md:text-xl ">Акция</div>
                <div class="pr-2 line-through md:text-xl "> 540 </div>
                <div class="text-red-600 font-bold md:text-xl ">399 грн</div>

            </div>
            <button-example :day="{{ json_encode($day) }} "> </button-example>
        </div>

    </div>
    <div class="flex flex-wrap flex-row text-center text-smm my-8 ">
        <div class="flex w-full text-medium uppercase justify-center lg:mb-4 md:text-xl md:font-medium ">Подробнее о товаре</div>
        <div class="flex w-full my-4 lg:w-3/6 lg:order-last ">
            <img src="./img/3d-pen-instrukcia.jpg " class="object-contain w-full ">
        </div>
        <div class="flex-1 w-full font-mono text-smm text-justify px-4 lg:mr-20 md:text-medium ">
            3D ручка - это устройство которое предоставляет ее владельцу простор для творчества, возможность построения композиционных картин и создавать трехмерные объекты. 3D ручка для рисования использует ABS и PLA пластик то же время нет потребности в изменении
            сопла. На дисплее отображается температура, регулирование можно делать с точностью до одного градуса. Она может быть использована как инструмент для развития воображения и пространственного мышления. Устройство для создания игрушек своими
            руками, оригинальный подарок для ребенка.
        </div>
    </div>
    <div class="flex flex-wrap flex-row text-center text-smm my-4 ">
        <div class="flex w-full text-medium uppercase justify-center lg:mb-4 md:text-xl md:font-medium ">Можно заказать дополнительный PLA пластик</div>
        <div class="flex w-full my-4 lg:w-3/6 lg:order-2 text-center justify-center ">
            <img src="./img/PLA-plastic.jpg " class="object-contain w-full md:w-1/2 lg:w-1/2 ">
        </div>
        <div class="flex-1 w-full font-mono text-smm text-justify px-4 lg:mr-20 md:text-medium lg:order-3 self-center ">
            Только у нас при покупке 3D ручки дополнительный PLA пластик - <span class="text-red-600 font-bold ">37 грн за 10 метров!</span> Цвета уточняйте у менеджера </div>
    </div>
    <div class="flex flex-wrap flex-row text-smm my-4 mx-2 ">
        <div class="flex flex-wrap w-full text-medium uppercase justify-center mb-2 md:text-xl md:font-medium ">Отличия от других 3D ручек</div>
        <div class="flex-1 my-2 pl-16 md:w-1/2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">10 м. PLA пластика в комплекте</span>
            </div>
        </div>
        <div class=" flex-2 pl-16 md:w-1/2 lg:my-2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">PLA пластик - противоаллергенный</span>
            </div>
        </div>
        <div class="flex-3 my-2 pl-16 md:w-1/2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Работает от сети</span>
            </div>
        </div>
        <div class="flex-4 pl-16 lg:my-2 md:w-1/2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Система охлаждения</span>
            </div>
        </div>
        <div class="flex-5 my-2 pl-16 md:w-1/2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">LCD дисплей</span>
            </div>
        </div>
        <div class="flex-6 pl-16 lg:my-2 md:w-1/2 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Подача пластика в 2-х направлениях</span>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap flex-row text-center text-smm my-8 ">
        <div class="flex flex-wrap text-medium uppercase justify-center mb-4 w-full md:text-xl md:font-medium ">Какие поделки можно делать?</div>
        <div class="flex-1 w-full px-4 lg:w-1/3 ">
            <img src="./img/3d-pen-example-minions.jpg " class="object-contain w-full ">
        </div>

        <div class="flex-3 w-full px-4 lg:w-1/3 ">
            <img src="./img/3d-pen-example-cat.jpg " class="object-contain w-full ">
        </div>
        <div class="flex-2 w-full px-4 lg:w-1/3 ">
            <img src="./img/3D-pen-example-many.jpg " class="object-contain w-full ">
        </div>
    </div>
    <div class="flex flex-wrap flex-row text-smm py-4 lg:py-8 ">
        <div class="flex flex-wrap text-medium uppercase justify-center w-full lg:pb-4 md:text-xl md:font-medium mx-2 ">Как сделать заказ?</div>
        <div class="flex-2 my-2 pl-16 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Оставляете заявку</span>
            </div>
        </div>
        <div class="flex-3 lg:my-2 pl-16 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Менеджер перезванивает для уточнения деталей</span>
            </div>
        </div>
        <div class="flex-4 my-2 pl-16 lg:w-1/3 ">
            <div class="inline-flex ">
                <img src="./img/checkerx48.png " class="object-contain ">
                <span class="self-center smm:text-base text-left pl-2 md:text-medium ">Оплачиваете полученный товар при получении в службе доставки</span>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap text-smm my-4 text-center justify-center ">
        <div class="flex w-full text-medium uppercase justify-center text-red-600 m-2 font-bold ">Осталось 84 штуки.
            <br>Успей заказать по акционной цене!</div>
            <button-example :day="{{ json_encode($day) }} "> </button-example>
    </div>
    <div class="flex flex-wrap flex-row text-smm my-4 ">
        <div class="flex flex-wrap text-medium uppercase justify-center w-full md:text-xl md:font-medium ">Отзывы</div>
        <div class="flex-1 px-4 my-8 text-left w-full lg:w-1/3 ">
            <span class="text-medium text-white bg-green-500 px-2 ">Ира</span>
            <span class="text-sm ">23.09.2020</span>
            <div class="flex-1 my-2 font-mono text-justify md:text-medium ">
                "3D-ручку я брала для сына 8 лет. Думаю для более раннего возраста покупать ее не имеет смысла. Занятие требует усидчивости, настойчивости и твердой руки. А вот до какого возраста, сказать затрудняюсь, даже наш папа с увлечением опробовал
        чудо-технику. В комплекте к ручке идет адаптер, и три вида пластика. Но это очень мало, хорошо что я сразу заказала большой набор из разных цветов. Вставляется пластик нажатием кнопки, удаляется тоже без проблем. Когда меняешь цвет, в ручке может
        оставаться небольшое количество пластика. И вылезет оно только когда вставишь новый цвет. Я довольна, что есть занятие, которым я могу отвлечь сына от планшета, думаю многие родители меня поймут. "
            </div>
        </div>
        <div class="flex-2 px-4 mb-8 text-left w-full lg:w-1/3 lg:mt-8 ">
            <span class="text-medium text-white bg-green-500 px-2 ">Костя</span>
            <span class="text-sm ">03.11.2020</span>
            <div class="flex-1 my-2 font-mono text-justify md:text-medium ">
                "Недавно мы купили 3D ручку. Управление ручкой интуитивно понятное. В ручке очень удобно то, что можно регулировать скорость подачи пластика, сдвигая кнопку-контроллер скорости. На минимальной скорости получается очень тонкие детали
        можно рисовать например усики котику или какие-либо мелкие детали. Мы, кстати, рисовали на бумаге, снизу подкладывали подставку под горячее, чтобы не повредить стол. Нарисованное с легкостью отсоединяется от бумаги. Конечно же я рекомендую к покупке
        данную ручку, если есть возможность. Ручка отлично развивает пространственное мышление и творческие способности ребенка, позволяет превращать рисование в игру, а полученный в процессе рисования рисунок - в игрушку. Что может быть приятнее и интереснее,
        чем играть в игрушку, сделанную собственными руками. "
            </div>
        </div>
        <div class="flex-3 px-4 mb-8 text-left w-full lg:w-1/3 lg:mt-8 ">

            <span class="text-medium text-white bg-green-500 px-2 ">Наталья</span>
            <span class="text-sm ">10.09.2020</span>
            <div class="flex-1 my-2 font-mono text-justify md:text-medium ">
                "Захотелось ребёнку 3D ручку. Решили взять такую, так как рисует двумя видами пластика ABS и PLA, последний особенно важен так как не токсичен и противоаллергенный. Так же есть дисплей и кнопки для регулировки температуры нагрева пластика
        и выбора вида пластика. Вот и дочка на свой день рождения получила подарок ))). Интересный прибор, развивает воображение, координацию и точности. Можно делать всякие интересные штучки. "
            </div>
        </div>
    </div>
    <div class="flex text-smm py-2 text-center font-bold justify-center border-t-2 uppercase ">
        Товары для дома и семьи. 2020

    </div>
    </div>
    <script src="{{ mix( 'js/front.js') }} "></script>

</body>

</html>