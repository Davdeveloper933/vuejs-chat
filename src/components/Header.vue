<template>
  <header class="header">
    <!-- container -->
    <div class="header__container responsive container">
      <!-- header__start -->
      <div class="header__start">
      </div>
      <!-- /header__start -->
      <!-- header__end -->
      <div class="header__end mobile-d-none">
        <!-- header__user -->
        <div class="header__user mobile-d-none">
          <a href="#" class="toggler">
            <i class="icon icon-user"></i>
          </a>
          <div class="droplist">
            <div class="title">Логин</div>
            <ul class="list">
              <li><router-link :to="{ name: 'History'}">История</router-link></li>
              <li><a href="#">Настройки</a></li>
              <li><a href="#">Выход</a></li>
            </ul>
          </div>
        </div>
        <!-- /header__user -->
        <!-- header__notifications -->
        <div class="header__notifications mobile-d-none">
          <a href="#" class="toggler">
            <i class="icon icon-bell"></i>
          </a>
          <div class="droplist extended">
            <div class="title">Новые уведомления <a href="#">Посмотреть все</a></div>
            <div class="none">Новых уведомлений нет</div>
          </div>
        </div>
        <!-- /header__notifications -->
        <!-- header__lang -->
        <div class="header__lang mobile-d-none">
          <div class="toggler">
            <i class="icon icon-globe"></i><i class="icon-down"></i>
          </div>
          <div class="droplist">
            <div class="title">Язык</div>
            <ul class="list">
              <li><a href="#" class="active">Русский</a></li>
              <li><a href="#">English</a></li>
            </ul>
          </div>
        </div>
        <!-- /header__lang -->
      </div>
      <!-- /header__end -->
    </div>
    <!-- container -->
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background-color: #1d1d27;
  position: relative;
  z-index: 50;
}

.header__container {
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__mobile-menu {
  position: relative;
  z-index: 1;
}

.header__mobile-menu .toggler {
  position: relative;
  padding: 20px 0;
  width: 24px;
}

.header__mobile-menu .toggler i {
  transition: 0.3s ease;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fff;
  margin-bottom: 7px;
  border-radius: 2px;
}

.header__mobile-menu .toggler i:last-child {
  margin-bottom: 0;
}

.header__mobile-menu .toggler.active {
  border: none;
  outline: none;
  box-shadow: none;
}

.header__mobile-menu .toggler.active i:last-child {
  width: 100%;
}

.header__mobile-menu .menu {
  position: absolute;
  transition: 0.3s ease;
  padding: 20px;
  font-size: 1rem;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  border-radius: 5px;
  background: #1d1d27;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 15px;
}

.header__mobile-menu .menu.active {
  opacity: 1;
  transform: scaleY(1);
}

.header__mobile-menu .menu .links {
  margin-bottom: 20px;
}

.header__mobile-menu .menu .links li {
  margin-bottom: 0.4em;
}

.header__mobile-menu .menu .buttons {
  margin-bottom: 20px;
}

.header__mobile-menu .menu .buttons a {
  display: block;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: "ish-exo", sans-serif;
  padding: 6px 20px;
}

.header__mobile-menu .menu .buttons a:last-child {
  margin-bottom: 0;
  padding: 5px 19px;
}

.header__mobile-menu .menu .buttons a:last-child:hover {
  padding: 6px 20px;
}

.header__start, .header__end {
  display: flex;
  align-items: center;
}

.header__logo {
  margin-right: 70px;
  height: 35px;
  display: block;
}

.header__menu {
  display: flex;
}

.header__menu li {
  margin-right: 30px;
}

.header__menu li:last-child {
  margin-right: 0;
}

.header__menu li .icon {
  margin-right: 15px;
  line-height: 1;
  font-size: 1.1rem;
}

.header__menu li .icon::before {
  background: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #583f2b;
}

.header__menu a {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #fff;
}

.header__menu a:hover {
  color: #E4B273;
}

.header__buttons {
  margin-right: 45px;
}

.header__buttons a {
  font-size: 0.85rem;
  margin-right: 30px;
  padding: 9px 40px;
}

.header__buttons a:last-child {
  margin-right: 0;
  padding: 8px 29px;
}

.header__buttons a:last-child:hover {
  padding: 9px 30px;
}

.header__currency {
  max-width: 130px !important;
  margin-right: 40px !important;
}

.header__currency .select {
  margin-bottom: 0;
}

.header__currency .input-style {
  padding: 6px 10px;
  font-size: 0.85rem;
  padding-right: 36px;
}

.header__notifications, .header__user, .header__lang {
  position: relative;
  margin-right: 25px;
}

.header__notifications .toggler, .header__user .toggler, .header__lang .toggler {
  padding: 15px 0;
  display: flex;
  align-items: center;
}

.header__notifications .toggler i.icon, .header__user .toggler i.icon, .header__lang .toggler i.icon {
  font-size: 1rem;
}

.header__notifications .toggler i.icon::before, .header__user .toggler i.icon::before, .header__lang .toggler i.icon::before {
  background: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #583f2b;
}

.header__notifications .toggler i.icon-down, .header__user .toggler i.icon-down, .header__lang .toggler i.icon-down {
  margin-left: 8px;
  font-size: 0.8rem;
  opacity: 0.5;
}

.header__notifications .droplist, .header__user .droplist, .header__lang .droplist {
  transition: 0.3s ease;
  min-width: 200px;
  font-size: 0.85rem;
  background: #1d1d27;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  position: absolute;
  right: -20px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 15px;
}

.header__notifications .droplist:hover, .header__user .droplist:hover, .header__lang .droplist:hover {
  opacity: 1;
  transform: scaleY(1);
}

.header__notifications .droplist.extended, .header__user .droplist.extended, .header__lang .droplist.extended {
  min-width: 380px;
}

.header__notifications .droplist.extended .title, .header__user .droplist.extended .title, .header__lang .droplist.extended .title {
  display: flex;
  justify-content: space-between;
}

.header__notifications .droplist .title, .header__user .droplist .title, .header__lang .droplist .title {
  text-align: center;
  border-bottom: 1px solid transparent;
  padding-bottom: 15px;
  -o-border-image: linear-gradient(90deg, #e4b273 0%, rgba(228, 178, 115, 0) 100%);
  border-image: linear-gradient(90deg, #e4b273 0%, rgba(228, 178, 115, 0) 100%);
  border-image-slice: 1;
  margin-bottom: 25px;
}

.header__notifications .droplist .title a, .header__user .droplist .title a, .header__lang .droplist .title a {
  text-decoration: underline;
}

.header__notifications .droplist .list li, .header__user .droplist .list li, .header__lang .droplist .list li {
  margin: 12px 0;
}

.header__notifications .droplist .list a, .header__user .droplist .list a, .header__lang .droplist .list a {
  opacity: 0.6;
}

.header__notifications .droplist .list a.active, .header__user .droplist .list a.active, .header__lang .droplist .list a.active {
  color: #E4B273;
}

.header__notifications .droplist .none, .header__user .droplist .none, .header__lang .droplist .none {
  text-align: center;
  padding: 25px 0 40px 0;
  opacity: 0.6;
}

.header__notifications .toggler:hover + .droplist, .header__user .toggler:hover + .droplist, .header__lang .toggler:hover + .droplist {
  opacity: 1;
  transform: scaleY(1);
}

@media (max-width: 1199px) {
  .header__logo {
    margin-right: 30px;
  }
  .header__menu li {
    margin-right: 20px;
  }
  .header__menu li .icon {
    margin-right: 8px;
  }
  .header__currency {
    margin-right: 30px !important;
  }
}

@media (max-width: 1023px) {
  .header {
    background: #0d1019;
  }
  .header__logo {
    margin-right: 0;
  }
  .header__end {
    width: 30px;
  }
}

@media (max-width: 767px) {
  .personal-menu__row {
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr !important;
    margin-bottom: 115px;
  }
  .personal-menu__row:last-child {
    margin-bottom: 0;
  }
  .personal-menu__row:last-child .personal-menu__item.wide {
    margin-top: -100px;
  }
  .personal-menu__item.wide {
    height: 260px;
  }
}

</style>