import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#bdbdbd' }}>
        <div className="article">
          <article>
          <h3 className="black-text">Перечень наших основных услуг:</h3>
            <li><font className = "info">Ремонт компьютеров</font></li>
            <li><font className = "info">Обслуживание компьютеров (абонентское, разовое)</font></li>
            <li><font className = "info">Восстановление данных (восстановление файлов)</font></li>
            <li><font className = "info">Настройка компьютера</font></li>
            <li><font className = "info">Ремонт HDD (ремонт винчестеров)</font></li>
            <li><font className = "info">Ремонт ноутбуков и нетбуков</font></li>
            <li><font className = "info">Ремонт мониторов (только ЖКИ или TFT)</font></li>
            <li><font className = "info">Заправка картриджей (струйных, лазерных)</font></li>
            <li><font className = "info">Ремонт и настройка планшетов, мобильных телефонов</font></li>
          </article>
        </div>
      </div>
    );
  }
}

export default Home
