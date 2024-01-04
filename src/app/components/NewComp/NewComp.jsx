export const NewComp = () => {
  return (
    <div className="row height-full">
      <div className="col-sm-2 col-md-2 col-lg-2 main-sidebar height-full">
        <img src="main_logo.jpg" className="sidebar-logo" />
        <br />
        <br />
        <button className="sidebar-button sidebar-single-button">
          <div className="sidebar-button-content">Wilberries</div>
        </button>
        <button className="sidebar-button sidebar-single-button">
          <div className="sidebar-button-content">Ozon</div>
        </button>
        <button className="sidebar-button sidebar-chapter-button">
          <div className="sidebar-button-content active-button">
            Yandex
            <svg width="16" height="16" className="sidebar-button-rightarrow">
              <polyline
                points="0,0 8,8 0,16"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              ></polyline>
            </svg>
          </div>
          <div id="shops" hidden>
            <span className="shop-button">Yandex Shop 1</span>
            <span className="shop-button active-shop-button">
              Yandex Shop 2
            </span>
            <span className="shop-button">Yandex Shop 3</span>
            <span className="shop-button">Yandex Shop 4</span>
            <span className="shop-button">Yandex Shop 5</span>
            <span className="shop-button">Yandex Shop 6</span>
          </div>
        </button>
        <button className="sidebar-button sidebar-chapter-button">
          <div className="sidebar-button-content">
            Sber
            <svg width="16" height="16" className="sidebar-button-rightarrow">
              <polyline
                points="0,0 8,8 0,16"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              ></polyline>
            </svg>
          </div>
          <div id="shops" hidden>
            <span className="shop-button">Sber Shop 1</span>
            <br />
            <span className="shop-button">Sber Shop 2</span>
            <br />
          </div>
        </button>
        <button className="sidebar-button sidebar-single-button">
          <div className="sidebar-button-content">Aliexpress</div>
        </button>
      </div>
      <div
        id="list-content"
        className="col-sm-3 col-md-3 col-lg-3 height-full"
        hidden
      ></div>
      <div id="main-content" className="col-sm-10 col-md-10 col-lg-10">
        <div className="hide-main-content" hidden></div>
        <div className="shop-title">
          <p align="right" className="add-btn-place">
            <button
              type="button"
              className="btn btn-warning y-button"
              data-bs-toggle="modal"
              data-bs-target="#addProductModal"
            >
              Добавить
            </button>
          </p>
          Yandex Shop 2
        </div>
        <table className="table products-table">
          <tr className="products-table-title">
            <td></td>
            <td className="left-align">Наименование товара</td>
            <td>Артикул</td>
            <td>Остатки</td>
            <td>РРЦ</td>
            <td>Скидка</td>
            <td>Демпинг</td>
            <td>Новая цена</td>
          </tr>
          <tr>
            <td>
              <img src="image.jpg" className="product-image" />
            </td>
            <td className="main-col">
              Станция самоочистки Hobot LEGEE LuLu для робота Legee D8
            </td>
            <td>100156456</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price wrong-yinput"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                  <br />
                  <font className="mistake-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-exclamation-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>
                    Должна быть больще актуальной цены
                  </font>
                </div>
              </form>
            </td>
            <td>48%</td>
            <td>
              <input id="checkbox_1" type="checkbox" className="css-checkbox" />
              <label for="checkbox_1"></label>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                </div>
              </form>
            </td>
            <td>
              <div className="dots3-menu">
                <button className="dots3">&#8942;</button>
                <div className="dots3-content">
                  <button className="dots3-content-button">Удалить</button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="image.jpg" className="product-image" />
            </td>
            <td className="main-col">Робот-пылесос Hobot Legee D8</td>
            <td>123453128</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                </div>
              </form>
            </td>
            <td>39%</td>
            <td>
              <input id="checkbox_2" type="checkbox" className="css-checkbox" />
              <label for="checkbox_2"></label>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                </div>
              </form>
            </td>
            <td>
              <div className="dots3-menu">
                <button className="dots3">&#8942;</button>
                <div className="dots3-content">
                  <button className="dots3-content-button">Удалить</button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="image.jpg" className="product-image" />
            </td>
            <td className="main-col">Робот-мойщик окон Hobot R3 Ultrasonic</td>
            <td>99126476</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                </div>
              </form>
            </td>
            <td>53%</td>
            <td>
              <input id="checkbox_3" type="checkbox" className="css-checkbox" />
              <label for="checkbox_3"></label>
            </td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput numeric-input rub-price"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                  <font className="rub-symbol">₽</font>
                </div>
              </form>
            </td>
            <td>
              <div className="dots3-menu">
                <button className="dots3">&#8942;</button>
                <div className="dots3-content">
                  <button className="dots3-content-button">Удалить</button>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <br />
        <table className="table demping-table">
          <tr className="demping-table-title">
            <td className="left-align">День недели</td>
            <td>Время</td>
            <td>Демпинг</td>
            <td className="demping-switch-td">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="main-col">Понедельник</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input id="checkbox_5" type="checkbox" className="css-checkbox" />
              <label for="checkbox_5"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Вторник</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input id="checkbox_6" type="checkbox" className="css-checkbox" />
              <label for="checkbox_6"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Среда</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input id="checkbox_7" type="checkbox" className="css-checkbox" />
              <label for="checkbox_7"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Четверг</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input id="checkbox_8" type="checkbox" className="css-checkbox" />
              <label for="checkbox_8"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Пятница</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input id="checkbox_9" type="checkbox" className="css-checkbox" />
              <label for="checkbox_9"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Суббота</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input
                id="checkbox_10"
                type="checkbox"
                className="css-checkbox"
              />
              <label for="checkbox_10"></label>
            </td>
          </tr>
          <tr>
            <td className="main-col">Воскресенье</td>
            <td>
              <form action="#">
                <div className="wrapper">
                  <input
                    type="text"
                    className="wrapper-input yinput demping-input"
                    autocomplete="off"
                  />
                  <button className="wrapper-button" type="reset">
                    &times;
                  </button>
                </div>
              </form>
            </td>
            <td>
              <input
                id="checkbox_11"
                type="checkbox"
                className="css-checkbox"
              />
              <label for="checkbox_11"></label>
            </td>
          </tr>
        </table>
        <button className="btn btn-warning y-button">Сохранить</button>
      </div>
    </div>
  );
};
