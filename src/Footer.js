import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="App">
      <footer className="page-footer  blue-grey darken-2">
              <div className="container">
                <div className="row">
                  <div className="column">
                    <h4 className="white-text">Наши услуги  по ремонту:</h4>
                    <p><font className = "foot"> - Компьютеры</font></p>
                      <p><font className = "foot"> - Мобильные телефоны</font></p>
                      <p><font className = "foot"> - Ноутбуки</font></p>
                      <p><font className = "foot"> - Планшеты</font></p>
                      <p><font className = "foot"> - Принтеры</font></p>
                      <p><font className = "foot"> - Удаленная настройка компьютера</font></p>
                      <p><font className = "foot"> - Мониторы</font> </p>
                  </div>

                  <div className="column">
                      <h4 className="white-text">Часы работы:</h4>
                      <p><font className = "foot">Пн, Пт: 8-23</font></p>
                      <p><font className = "foot">Сб, Вс: 10-23</font></p>

                  </div>

                  <div className="column">
                 <h4 className="white-text">Наш адрес:</h4>
                      <p><font className = "foot">Уручская 5а, 70</font></p>
                     <p><font className = "foot">Минск, Беларусь</font></p>
                    <p><font className = "foot">Vel +375 (29) 639-79-73</font></p>
                      <p><font className = "foot">MTC +375 (29) 751-27-70</font></p>
              </div></div></div>
              <div className="footer-copyright">
                       <div className="container">
<span className = "eny"> © 2018 by Enter</span><span className = "but"><Link className="waves-effect waves-light btn-large" to='/contacts'>Связаться</Link></span>
                     </div></div>
                     </footer>
      </div>
    );
  }
}
//993 25 mail.belstu.by  автобус 88 улица голодела.убаревича 36, кв 7. 3этаж
export default Footer;
