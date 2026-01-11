import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  
  return (
    <nav className="text-black max-[1100px]:text-2xl text-[18px]">
      <ul className="flex gap-6 max-[1100px]:flex-col" ref={dropdownRef}>
        <li>
          <div 
            className="flex items-center justify-between "
            onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === "Страны" ? null : "Страны");
            }}>
            <a 
              href="#"    
              className={openDropdown === "Страны" ? "text-(--color-accent)" : "text-black"}
            >
              Страны
            </a>
            <img 
              src="/icons/header/more.svg" 
              alt="" 
              width={14}
              className={`visible min-[1100px]:invisible ${openDropdown === "Страны" ? "rotate-180" : ""}`}
            />
          </div>

          {openDropdown === "Страны" && (
            <ul className="min-[1100px]:absolute z-10 left-[0%] right-[0%] min-[1100px]:top-[115px] flex flex-wrap min-[1100px]:gap-[46px] gap-x-4 gap-y-6 p-4 min-[1100px]:p-8 bg-white *:w-[147px] min-[1100px]:*:w-56  rounded-2xl min-[1100px]:shadow-[0_6px_12px_0_rgba(0,0,0,0.04),0_4px_24px_6px_rgba(0,0,0,0.05)] max-[1100px]:bg-(--color-gray-1) [&_a]:flex [&_a]:items-center [&_a]:gap-3 max-[1100px]:[&_img]:h-6 min-[1440px]:w-[1368px] min-[1400px]:m-auto max-[1100px]:text-[14px] max-[1100px]:mt-4">
              <li><a href="#"><img src="/icons/header/flags/Азербайджан.svg" alt="Азербайджан" /> Азербайджан</a></li>
              <li><a href="#"><img src="/icons/header/flags/Армения.svg" alt="Армения" /> Армения</a></li>
              <li><a href="#"><img src="/icons/header/flags/Бахрейн.svg" alt="Бахрейн" /> Бахрейн</a></li>
              <li><a href="#"><img src="/icons/header/flags/Беларусь.svg" alt="Беларусь" /> Беларусь</a></li>
              <li><a href="#"><img src="/icons/header/flags/Великобритания.svg" alt="Великобритания" /> Великобритания</a></li>
              <li><a href="#"><img src="/icons/header/flags/Вьетнам.svg" alt="Вьетнам" /> Вьетнам</a></li>
              <li><a href="#"><img src="/icons/header/flags/Индия.svg" alt="Индия" /> Индия</a></li>
              <li><a href="#"><img src="/icons/header/flags/Индонезия.svg" alt="Индонезия" /> Индонезия</a></li>
              <li><a href="#"><img src="/icons/header/flags/Испания.svg" alt="Испания" /> Испания</a></li>
              <li><a href="#"><img src="/icons/header/flags/Италия.svg" alt="Италия" /> Италия</a></li>
              <li><a href="#"><img src="/icons/header/flags/Катар.svg" alt="Катар" /> Катар</a></li>
              <li><a href="#"><img src="/icons/header/flags/Китай.svg" alt="Китай" /> Китай</a></li>
              <li><a href="#"><img src="/icons/header/flags/Куба.svg" alt="Куба" /> Куба</a></li>
              <li><a href="#"><img src="/icons/header/flags/Маврикий.svg" alt="Маврикий" /> Маврикий</a></li>
              <li><a href="#"><img src="/icons/header/flags/Малайзия.svg" alt="Малайзия" /> Малайзия</a></li>
              <li><a href="#"><img src="/icons/header/flags/Мальдивы.svg" alt="Мальдивы" /> Мальдивы</a></li>
              <li><a href="#"><img src="/icons/header/flags/ОАЭ.svg" alt="ОАЭ" /> ОАЭ</a></li>
              <li><a href="#"><img src="/icons/header/flags/Саудовская Аравия.svg" alt="Саудовская Аравия" /> Саудовская Аравия</a></li>
              <li><a href="#"><img src="/icons/header/flags/Сейшелы.svg" alt="Сейшелы" /> Сейшелы</a></li>
              <li><a href="#"><img src="/icons/header/flags/Сингапур.svg" alt="Сингапур" /> Сингапур</a></li>
              <li><a href="#"><img src="/icons/header/flags/Таиланд.svg" alt="Таиланд" /> Таиланд</a></li>
              <li><a href="#"><img src="/icons/header/flags/Турция.svg" alt="Турция" /> Турция</a></li>
              <li><a href="#"><img src="/icons/header/flags/Узбекистан.svg" alt="Узбекистан" /> Узбекистан</a></li>
              <li><a href="#"><img src="/icons/header/flags/Филиппины.svg" alt="Филиппины" /> Филиппины</a></li>
              <li><a href="#"><img src="/icons/header/flags/Франция.svg" alt="Франция" /> Франция</a></li>
              <li><a href="#"><img src="/icons/header/flags/Швейцария.svg" alt="Швейцария" /> Швейцария</a></li>
              <li><a href="#"><img src="/icons/header/flags/Шри-Ланка.svg" alt="Шри-Ланка" /> Шри-Ланка</a></li>
              <li><a href="#"><img src="/icons/header/flags/Южная Корея.svg" alt="Южная Корея" /> Южная Корея</a></li>
              <li><a href="#"><img src="/icons/header/flags/Япония.svg" alt="Япония" /> Япония</a></li>
            </ul>
          )}
        </li>

        <li>
          <div 
            className="flex items-center justify-between "
            onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === "Турагенствам" ? null : "Турагенствам");
            }}>
            <a 
              href="#"    
              className={openDropdown === "Турагенствам" ? "text-(--color-accent)" : "text-black"}
            >
              Турагенствам
            </a>
            <img 
              src="/icons/header/more.svg" 
              alt="" 
              width={14}
              className={`visible min-[1100px]:invisible ${openDropdown === "Турагенствам" ? "rotate-180" : ""}`}
            />
          </div>
          {openDropdown === "Турагенствам" && (
            <div className="text-[18px] min-[1100px]:absolute z-10 left-[0%] right-[0%] top-[115px] m-auto flex flex-wrap gap-8 p-4 min-[1100px]:p-8 bg-white min-[1100px]:w-[920px] rounded-2xl min-[1100px]:shadow-[0_6px_12px_0_rgba(0,0,0,0.04),0_4px_24px_6px_rgba(0,0,0,0.05)] max-[1100px]:bg-(--color-gray-1) max-[1100px]:mt-4">
              <ul className="flex flex-col gap-4 min-[1100px]:w-[295px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Документация</a></li>
                <li><a href="#">Начало сотрудничества</a></li>
                <li><a href="#">Финобеспечение</a></li>
                <li><a href="#">Договор</a></li>
                <li><a href="#">Отчет агента</a></li>
                <li><a href="#">Способы оплаты</a></li>
                <li><a href="#">Комиссионная политика</a></li>
                <li><a href="#">Заявление на возврат и перенос</a></li>
                <li><a href="#">Обработка персональных данных</a></li>
              </ul>
              <ul className="flex flex-col gap-4 min-[1100px]:w-[255px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Активности</a></li>
                <li><a href="#">Мероприятия</a></li>
                <li><a href="#">Вебинары</a></li>
                <li><a href="#">Рекламные туры</a></li>
                <li><a href="#">Фото-отчеты и пресс-релизы</a></li>
                <li><a href="#">Премия</a></li>
                <li><a href="#">Бонусная программа</a></li>
                <li><a href="#">Акции для агентов</a></li>
              </ul>
              <ul className="flex flex-col gap-4 min-[1100px]:w-[242px] ">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Коммуникации</a></li>
                <li><a href="#">BSI Profi в соцсетях</a></li>
                <li><a href="#">Подписка на рассылку</a></li>
                <li><a href="#">Горячая линия</a></li>
                <li><a href="#">Вопрос-ответ</a></li>
                <li><a href="#">Прием рекламаций</a></li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <div 
            className="flex items-center justify-between "
            onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === "Туристам" ? null : "Туристам");
            }}>
            <a 
              href="#"    
              className={openDropdown === "Туристам" ? "text-(--color-accent)" : "text-black"}
            >
              Туристам
            </a>
            <img 
              src="/icons/header/more.svg" 
              alt="" 
              width={14}
              className={`visible min-[1100px]:invisible ${openDropdown === "Туристам" ? "rotate-180" : ""}`}
            />
          </div>
            {openDropdown === "Туристам" && (
            <div className="text-[18px] min-[1100px]:absolute z-10 left-[0%] right-[0%] top-[115px] m-auto flex flex-wrap gap-8 p-4 min-[1100px]:p-8 bg-white min-[1100px]:w-[934px] rounded-2xl min-[1100px]:shadow-[0_6px_12px_0_rgba(0,0,0,0.04),0_4px_24px_6px_rgba(0,0,0,0.05)] max-[1100px]:bg-(--color-gray-1) max-[1100px]:mt-4">
              <ul className="flex flex-col gap-4 min-[1100px]:w-[295px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Информация</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Горячая линия для туристов</a></li>
                <li><a href="#">Служба контроля качества</a></li>
                <li><a href="#">Способы оплаты</a></li>
              </ul>
              <ul className="flex flex-col gap-4 min-[1100px]:w-[269px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Услуги</a></li>
                <li><a href="#">Подарочные сертификаты</a></li>
                <li><a href="#">Как забронировать тур онлайн</a></li>
                <li><a href="#">Бронирование тура</a></li>
                <li><a href="#">Памятки по странам</a></li>
              </ul>
              <ul className="flex flex-col gap-4 min-[1100px]:w-[242px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Данные</a></li>
                <li><a href="#">Личный кабинет</a></li>
                <li><a href="#">Статус заявки</a></li>
              </ul>
            </div>
          )}
        </li>


        <li>
          <div 
            className="flex items-center justify-between "
            onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === "О компании" ? null : "О компании");
            }}>
            <a 
              href="#"    
              className={openDropdown === "О компании" ? "text-(--color-accent)" : "text-black"}
            >
              О компании
            </a>
            <img 
              src="/icons/header/more.svg" 
              alt="" 
              width={14}
              className={`visible min-[1100px]:invisible ${openDropdown === "О компании" ? "rotate-180" : ""}`}
            />
          </div>
            {openDropdown === "О компании" && (
            <div className="text-[18px] min-[1100px]:absolute z-10 left-[32%] right-[0%] top-[115px] m-auto flex flex-wrap gap-8 p-4 min-[1100px]:p-8 bg-white min-[1100px]:w-[643px] rounded-2xl min-[1100px]:shadow-[0_6px_12px_0_rgba(0,0,0,0.04),0_4px_24px_6px_rgba(0,0,0,0.05)] max-[1100px]:bg-(--color-gray-1) max-[1100px]:mt-4">
              <ul className="flex flex-col gap-4 min-[1100px]:w-[295px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">О нас</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Фирменный стиль</a></li>
                <li><a href="#">Логотип</a></li>
                <li><a href="#">Финобеспечение</a></li>
                <li><a href="#">Вакансии</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Мы в соцсетях</a></li>
              </ul>
              <ul className="flex flex-col gap-4 min-[1100px]:w-[252px]">
                <li className="text-(--color-gray-5) text-[16px]"><a href="#">Признание</a></li>
                <li><a href="#">Награды</a></li>
                <li><a href="#">Рейтинги</a></li>
                <li><a href="#">Отзывы клиентов</a></li>
                <li><a href="#">Пресса о нас</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;