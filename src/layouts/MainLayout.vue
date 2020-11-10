<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Section Navbar V1 -->
    <header class="header-01">
      <div class="topbar-01">
        <div class="container">
          <div class="row">
            <div class="left col-6">
              <div class="today">
                <p>{{ getFormatDate(now) }}</p>
              </div>
              <div class="searchbar">
                <form action="#" method="post">
                  <input
                    type="text"
                    name="search"
                    :placeholder="$t('layoutSearchBarPlaceholder')"
                    required
                  />
                  <button type="submit">
                    <img
                      src="../assets/images/svg/050-magnifying-glass.svg"
                      alt="Zola"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div class="right col-6">
              <div class="language-switcher">
                <LanguageSwitcher />
              </div>
              <div class="notification" style="display: none">
                <img src="../assets/images/svg/161-alarm.svg" alt="Zola" />
                <span>11</span>
                <div class="content-notification">
                  <div class="header">
                    <h6>NOTIFICATIONS</h6>
                    <img src="../assets/images/svg/more-1.svg" alt="Zola" />
                  </div>
                  <div class="content">
                    <!-- Item -->
                    <div class="item">
                      <div class="image">
                        <img
                          src="../assets/images/user_notification1.jpg"
                          alt="Zola"
                        />
                      </div>
                      <div class="message">
                        <div class="time">
                          2 min ago in <span>Life & Arts</span>
                        </div>
                        <div class="title">
                          <a href="#">The canadian model has started its own</a>
                        </div>
                        <div class="desc">
                          Lorem ipsum viverra molestie at hac...
                        </div>
                      </div>
                      <div class="options">
                        <div class="close">
                          <svg
                            fill="#ffffff"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 490.442 490.442"
                            style="enable-background: new 0 0 490.442 490.442"
                            xml:space="preserve"
                          >
                            <path
                              d="M270.421,245.342l42-42c7.3-7.1,7.3-18.5,0.2-25.5c-7-7-18.4-7-25.5,0l-42,42l-42-42c-7-7-18.4-7-25.5,0
																c-7,7-7,18.4,0,25.5l42,42l-42,42c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3l42-42l42,42
																c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3c7-7,7-18.4,0-25.5L270.421,245.342z"
                            />
                            <path
                              d="M418.621,71.842c-7-7-18.4-7-25.4,0l-56,55.9c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l42.7-42.7
																	c69.2,82.1,65.1,205.3-12.2,282.6c-39.5,39.5-92.1,61.3-148,61.3c-55.9,0-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3,0-295.9
																	c50.1-50.1,121.6-71.4,191.1-56.8c9.7,2,19.3-4.2,21.3-13.9c2-9.7-4.2-19.3-13.9-21.3c-81.4-17.2-165.1,7.7-223.9,66.5
																	c-46.3,46.3-71.8,107.9-71.8,173.4s25.5,127.1,71.8,173.4c46.3,46.3,107.9,71.8,173.4,71.8s127.1-25.5,173.4-71.8
																	s71.8-107.9,71.8-173.4S464.921,118.142,418.621,71.842z"
                            />
                          </svg>
                        </div>
                        <div class="like active">
                          <svg
                            fill="#a0a0a0"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 481.567 481.567"
                            style="enable-background: new 0 0 481.567 481.567"
                            xml:space="preserve"
                          >
                            <path
                              d="M424.7,55.841c-19.8-15.2-43.3-25-68.1-28.2c-42.6-5.6-84.3,7.4-115.8,35.6c-31.5-28.5-73.4-41.5-116.2-35.8c-24.8,3.3-48.4,13.2-68.3,28.6c-35.8,27.9-56.4,69.6-56.3,114.6c0,38.5,15.1,74.8,42.4,102.1l172.9,172.9c6.6,6.6,15.2,9.8,23.8,9.8c8.6,0,17.2-3.3,23.8-9.8l26.8-26.8c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-25.1,25.1l-171.2-171.3c-20.5-20.5-31.8-47.7-31.9-76.7c0-33.7,15.4-65.1,42.4-86.1c14.8-11.5,32.4-18.9,50.9-21.3c34.2-4.5,67.6,6.7,91.7,30.9l19.8,19.8l19.6-19.6c24-24.1,57.4-35.3,91.5-30.8c18.5,2.4,36,9.7,50.8,21c28.2,21.7,43.8,54.4,42.8,89.6c-0.8,27.7-12.9,54.6-33.9,75.7l-91.2,91.1c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l91.2-91.2c27.6-27.6,43.4-63.1,44.4-100.1C482.9,128.041,462.2,84.641,424.7,55.841z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- /.Item -->
                    <!-- Item -->
                    <div class="item">
                      <div class="image">
                        <img
                          src="../assets/images/user_notification2.jpg"
                          alt="Zola"
                        />
                      </div>
                      <div class="message">
                        <div class="time">9 min ago in <span>Sports</span></div>
                        <div class="title">
                          <a href="#">The canadian model has started its own</a>
                        </div>
                        <div class="desc">
                          Lorem ipsum viverra molestie at hac...
                        </div>
                      </div>
                      <div class="options">
                        <div class="close">
                          <svg
                            fill="#ffffff"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 490.442 490.442"
                            style="enable-background: new 0 0 490.442 490.442"
                            xml:space="preserve"
                          >
                            <path
                              d="M270.421,245.342l42-42c7.3-7.1,7.3-18.5,0.2-25.5c-7-7-18.4-7-25.5,0l-42,42l-42-42c-7-7-18.4-7-25.5,0
																c-7,7-7,18.4,0,25.5l42,42l-42,42c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3l42-42l42,42
																c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3c7-7,7-18.4,0-25.5L270.421,245.342z"
                            />
                            <path
                              d="M418.621,71.842c-7-7-18.4-7-25.4,0l-56,55.9c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l42.7-42.7
																	c69.2,82.1,65.1,205.3-12.2,282.6c-39.5,39.5-92.1,61.3-148,61.3c-55.9,0-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3,0-295.9
																	c50.1-50.1,121.6-71.4,191.1-56.8c9.7,2,19.3-4.2,21.3-13.9c2-9.7-4.2-19.3-13.9-21.3c-81.4-17.2-165.1,7.7-223.9,66.5
																	c-46.3,46.3-71.8,107.9-71.8,173.4s25.5,127.1,71.8,173.4c46.3,46.3,107.9,71.8,173.4,71.8s127.1-25.5,173.4-71.8
																	s71.8-107.9,71.8-173.4S464.921,118.142,418.621,71.842z"
                            />
                          </svg>
                        </div>
                        <div class="like">
                          <svg
                            fill="#a0a0a0"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 481.567 481.567"
                            style="enable-background: new 0 0 481.567 481.567"
                            xml:space="preserve"
                          >
                            <path
                              d="M424.7,55.841c-19.8-15.2-43.3-25-68.1-28.2c-42.6-5.6-84.3,7.4-115.8,35.6c-31.5-28.5-73.4-41.5-116.2-35.8c-24.8,3.3-48.4,13.2-68.3,28.6c-35.8,27.9-56.4,69.6-56.3,114.6c0,38.5,15.1,74.8,42.4,102.1l172.9,172.9c6.6,6.6,15.2,9.8,23.8,9.8c8.6,0,17.2-3.3,23.8-9.8l26.8-26.8c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-25.1,25.1l-171.2-171.3c-20.5-20.5-31.8-47.7-31.9-76.7c0-33.7,15.4-65.1,42.4-86.1c14.8-11.5,32.4-18.9,50.9-21.3c34.2-4.5,67.6,6.7,91.7,30.9l19.8,19.8l19.6-19.6c24-24.1,57.4-35.3,91.5-30.8c18.5,2.4,36,9.7,50.8,21c28.2,21.7,43.8,54.4,42.8,89.6c-0.8,27.7-12.9,54.6-33.9,75.7l-91.2,91.1c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l91.2-91.2c27.6-27.6,43.4-63.1,44.4-100.1C482.9,128.041,462.2,84.641,424.7,55.841z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- /.Item -->
                    <!-- Item -->
                    <div class="item read">
                      <div class="image">
                        <img
                          src="../assets/images/user_notification3.jpg"
                          alt="Zola"
                        />
                      </div>
                      <div class="message">
                        <div class="time">37 min ago in Business</div>
                        <div class="title">
                          <a href="#">The canadian model has started its own</a>
                        </div>
                        <div class="desc">
                          Lorem ipsum viverra molestie at hac...
                        </div>
                      </div>
                      <div class="options">
                        <div class="close">
                          <svg
                            fill="#ffffff"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 490.442 490.442"
                            style="enable-background: new 0 0 490.442 490.442"
                            xml:space="preserve"
                          >
                            <path
                              d="M270.421,245.342l42-42c7.3-7.1,7.3-18.5,0.2-25.5c-7-7-18.4-7-25.5,0l-42,42l-42-42c-7-7-18.4-7-25.5,0
																c-7,7-7,18.4,0,25.5l42,42l-42,42c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3l42-42l42,42
																c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3c7-7,7-18.4,0-25.5L270.421,245.342z"
                            />
                            <path
                              d="M418.621,71.842c-7-7-18.4-7-25.4,0l-56,55.9c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l42.7-42.7
																	c69.2,82.1,65.1,205.3-12.2,282.6c-39.5,39.5-92.1,61.3-148,61.3c-55.9,0-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3,0-295.9
																	c50.1-50.1,121.6-71.4,191.1-56.8c9.7,2,19.3-4.2,21.3-13.9c2-9.7-4.2-19.3-13.9-21.3c-81.4-17.2-165.1,7.7-223.9,66.5
																	c-46.3,46.3-71.8,107.9-71.8,173.4s25.5,127.1,71.8,173.4c46.3,46.3,107.9,71.8,173.4,71.8s127.1-25.5,173.4-71.8
																	s71.8-107.9,71.8-173.4S464.921,118.142,418.621,71.842z"
                            />
                          </svg>
                        </div>
                        <div class="like active">
                          <svg
                            fill="#a0a0a0"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 481.567 481.567"
                            style="enable-background: new 0 0 481.567 481.567"
                            xml:space="preserve"
                          >
                            <path
                              d="M424.7,55.841c-19.8-15.2-43.3-25-68.1-28.2c-42.6-5.6-84.3,7.4-115.8,35.6c-31.5-28.5-73.4-41.5-116.2-35.8c-24.8,3.3-48.4,13.2-68.3,28.6c-35.8,27.9-56.4,69.6-56.3,114.6c0,38.5,15.1,74.8,42.4,102.1l172.9,172.9c6.6,6.6,15.2,9.8,23.8,9.8c8.6,0,17.2-3.3,23.8-9.8l26.8-26.8c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-25.1,25.1l-171.2-171.3c-20.5-20.5-31.8-47.7-31.9-76.7c0-33.7,15.4-65.1,42.4-86.1c14.8-11.5,32.4-18.9,50.9-21.3c34.2-4.5,67.6,6.7,91.7,30.9l19.8,19.8l19.6-19.6c24-24.1,57.4-35.3,91.5-30.8c18.5,2.4,36,9.7,50.8,21c28.2,21.7,43.8,54.4,42.8,89.6c-0.8,27.7-12.9,54.6-33.9,75.7l-91.2,91.1c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l91.2-91.2c27.6-27.6,43.4-63.1,44.4-100.1C482.9,128.041,462.2,84.641,424.7,55.841z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- /.Item -->
                    <!-- Item -->
                    <div class="item">
                      <div class="image">
                        <img
                          src="../assets/images/user_notification1.jpg"
                          alt="Zola"
                        />
                      </div>
                      <div class="message">
                        <div class="time">
                          4 hours ago in <span>Politics</span>
                        </div>
                        <div class="title">
                          <a href="#">The canadian model has started its own</a>
                        </div>
                        <div class="desc">
                          Lorem ipsum viverra molestie at hac...
                        </div>
                      </div>
                      <div class="options">
                        <div class="close">
                          <svg
                            fill="#ffffff"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 490.442 490.442"
                            style="enable-background: new 0 0 490.442 490.442"
                            xml:space="preserve"
                          >
                            <path
                              d="M270.421,245.342l42-42c7.3-7.1,7.3-18.5,0.2-25.5c-7-7-18.4-7-25.5,0l-42,42l-42-42c-7-7-18.4-7-25.5,0
																c-7,7-7,18.4,0,25.5l42,42l-42,42c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3l42-42l42,42
																c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3c7-7,7-18.4,0-25.5L270.421,245.342z"
                            />
                            <path
                              d="M418.621,71.842c-7-7-18.4-7-25.4,0l-56,55.9c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l42.7-42.7
																	c69.2,82.1,65.1,205.3-12.2,282.6c-39.5,39.5-92.1,61.3-148,61.3c-55.9,0-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3,0-295.9
																	c50.1-50.1,121.6-71.4,191.1-56.8c9.7,2,19.3-4.2,21.3-13.9c2-9.7-4.2-19.3-13.9-21.3c-81.4-17.2-165.1,7.7-223.9,66.5
																	c-46.3,46.3-71.8,107.9-71.8,173.4s25.5,127.1,71.8,173.4c46.3,46.3,107.9,71.8,173.4,71.8s127.1-25.5,173.4-71.8
																	s71.8-107.9,71.8-173.4S464.921,118.142,418.621,71.842z"
                            />
                          </svg>
                        </div>
                        <div class="like">
                          <svg
                            fill="#a0a0a0"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 481.567 481.567"
                            style="enable-background: new 0 0 481.567 481.567"
                            xml:space="preserve"
                          >
                            <path
                              d="M424.7,55.841c-19.8-15.2-43.3-25-68.1-28.2c-42.6-5.6-84.3,7.4-115.8,35.6c-31.5-28.5-73.4-41.5-116.2-35.8c-24.8,3.3-48.4,13.2-68.3,28.6c-35.8,27.9-56.4,69.6-56.3,114.6c0,38.5,15.1,74.8,42.4,102.1l172.9,172.9c6.6,6.6,15.2,9.8,23.8,9.8c8.6,0,17.2-3.3,23.8-9.8l26.8-26.8c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-25.1,25.1l-171.2-171.3c-20.5-20.5-31.8-47.7-31.9-76.7c0-33.7,15.4-65.1,42.4-86.1c14.8-11.5,32.4-18.9,50.9-21.3c34.2-4.5,67.6,6.7,91.7,30.9l19.8,19.8l19.6-19.6c24-24.1,57.4-35.3,91.5-30.8c18.5,2.4,36,9.7,50.8,21c28.2,21.7,43.8,54.4,42.8,89.6c-0.8,27.7-12.9,54.6-33.9,75.7l-91.2,91.1c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l91.2-91.2c27.6-27.6,43.4-63.1,44.4-100.1C482.9,128.041,462.2,84.641,424.7,55.841z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- /.Item -->
                  </div>
                  <div class="footer">
                    <a href="#">See All Notifications</a>
                  </div>
                </div>
              </div>
              <div class="user-profile" style="display: none">
                <img src="../assets/images/user1.jpg" alt="Zola" />
                <p>Fred Barry <i class="fa fa-chevron-down"></i></p>
                <div class="user-menu">
                  <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Activity Register</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Sign Off</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar-menu navbar navbar-expand-lg">
        <div class="container navbar-container">
          <!-- Logo -->
          <a class="navbar-brand background-logo" href="/"
            ><img src="../assets/images/logo-01.png" alt="Zola"
          /></a>
          <!-- /.Logo -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li
                class="nav-item dropdown-submenu dropdown"
                v-for="articleCategory in fewArticleCategories"
                v-bind:key="articleCategory.id"
              >
                <a
                  class="dropdown-item dropdown-toggle nav-link"
                  href="#"
                  id="navbarSubDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-if="articleCategory.article_subcategories.length > 0"
                >
                  {{ articleCategory.name }}
                </a>
                <a
                  class="dropdown-item dropdown-toggle nav-link hidden-dropdown-toggle"
                  href="#"
                  id="navbarSubDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-else
                >
                  {{ articleCategory.name }}
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarSubDropdown"
                  v-if="articleCategory.article_subcategories.length > 0"
                >
                  <li
                    v-for="articleSubcategory in articleCategory.article_subcategories"
                    v-bind:key="articleSubcategory.id"
                  >
                    <a href="#" class="dropdown-item">
                      {{ articleSubcategory.name }}
                    </a>
                  </li>
                </ul>
              </li>
              <li
                class="nav-item dropdown-submenu dropdown"
                v-if="moreArticleCategories.length > 0"
              >
                <a
                  class="dropdown-item dropdown-toggle nav-link"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ $t("layoutMoreCategoriesLabel") }}
                </a>
                <ul class="dropdown-menu">
                  <li
                    class="dropdown-submenu dropdown"
                    v-for="articleCategory in moreArticleCategories"
                    v-bind:key="articleCategory.id"
                  >
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#"
                      id="navbarSubDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      v-if="articleCategory.article_subcategories.length > 0"
                    >
                      {{ articleCategory.name }}
                    </a>
                    <a
                      class="dropdown-item dropdown-toggle hidden-dropdown-toggle"
                      href="#"
                      id="navbarSubDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      v-else
                    >
                      {{ articleCategory.name }}
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarSubDropdown"
                      v-if="articleCategory.article_subcategories.length > 0"
                    >
                      <li
                        v-for="articleSubcategory in articleCategory.article_subcategories"
                        v-bind:key="articleSubcategory.id"
                      >
                        <a href="#" class="dropdown-item">
                          {{ articleSubcategory.name }}</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button
            type="button"
            id="sidebarCollapse"
            class="navbar-toggler active"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    <!-- /.Section Navbar V1 -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Section Footer -->
    <div id="section-footer" class="footer-03">
      <div class="container">
        <div class="row">
          <div class="ft-column col-md-12 col-lg-4">
            <div class="logo">
              <a href="#"
                ><img src="../assets/images/footer_logo.png" alt="Zola"
              /></a>
            </div>
            <p style="text-align: justify">
              {{ $t("phrasePulitzer") }}
            </p>
            <p style="text-align: right">- Joseph Pulitzer</p>
            <ul class="ft_social_links">
              <li>
                <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-instagram fa-lg"></i></a>
              </li>
            </ul>
          </div>
          <div class="ft-column col-md-12 col-lg-4">
            <h3>{{ $t("instagramPhoto") }}</h3>
            <div class="instagram-01">
              <ul>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_1.png"
                      alt="Zola"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_2.png"
                      alt="Zola"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_3.png"
                      alt="Zola"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_4.png"
                      alt="Zola"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_5.png"
                      alt="Zola"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/instagram_6.png"
                      alt="Zola"
                  /></a>
                </li>
              </ul>
              <a href="#" class="view-more"
                >{{ $t("viewMore") }}
                <i class="fa fa-angle-double-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="ft-column col-md-12 col-lg-4">
            <h3>{{ $t("recentNews") }}</h3>
            <div class="recentnews-02">
              <!-- Item -->
              <div class="item">
                <a href="#">
                  <div class="icon">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <p>The Canadian model has started its own tech</p>
                    <span>6 MIN READ</span>
                  </div>
                </a>
              </div>
              <!-- /.Item -->
              <!-- Item -->
              <div class="item">
                <a href="#">
                  <div class="icon">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <p>The Canadian model has started its own tech</p>
                    <span>6 MIN READ</span>
                  </div>
                </a>
              </div>
              <!-- /.Item -->
              <!-- Item -->
              <div class="item">
                <a href="#">
                  <div class="icon">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <p>The Canadian model has started its own tech</p>
                    <span>6 MIN READ</span>
                  </div>
                </a>
              </div>
              <!-- /.Item -->
              <!-- Item -->
              <div class="item">
                <a href="#">
                  <div class="icon">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <p>The Canadian model has started its own tech</p>
                    <span>6 MIN READ</span>
                  </div>
                </a>
              </div>
              <!-- /.Item -->
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="copyright-wrapper">
                <p>
                  {{ $t("footerCopyright") }}
                  <a
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~01f0589d0e5323286f"
                    >Henry Jaimes</a
                  >
                  {{ $t("footerAllRightsReserved") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.Section Footer -->
  </q-layout>
</template>

<script>
import "../assets/images/favicon.png";
import "../assets/css/bootstrap.min.css";
import "../assets/css/swiper.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/nprogress.css";
import "../assets/css/style.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/fonts/fontawesome/font-awesome.min.css";
import "../assets/js/jquery.min.js";
import "../assets/js/swiper.min.js";
import "../assets/js/nprogress.js";
import "../assets/js/easy-waypoint-animate.js";
import "../assets/js/jquery.countup.js";
import "../assets/js/jquery.newsTicker.min.js";
import "../assets/js/scripts.js";
import LanguageSwitcher from "../components/layouts/LanguageSwitcher";
import gql from "graphql-tag";

export default {
  name: "MainLayout",
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      articleCategories: [],
      now: Date.now(),
    };
  },
  apollo: {
    articleCategories: gql`
      query articleCategories {
        articleCategories {
          id
          name
          language
          article_subcategories {
            id
            name
            language
          }
        }
      }
    `,
  },
  methods: {
    getFormatDate: function (datetime) {
      var dateTime = new Date(datetime);
      const formattedDate =
        dateTime.getUTCMonth() +
        "/" +
        dateTime.getUTCDate() +
        "/" +
        dateTime.getUTCFullYear() +
        " " +
        dateTime.getHours() +
        ":" +
        dateTime.getMinutes() +
        ":" +
        dateTime.getSeconds();

      return formattedDate;
    },
  },
  computed: {
    fewArticleCategories: function () {
      var articleCategories = this.articleCategories.filter(
        (category) => category.language === this.$t("language")
      );

      return articleCategories.slice(0, 5);
    },
    moreArticleCategories: function () {
      var articleCategories = this.articleCategories.filter(
        (category) => category.language === this.$t("language")
      );

      return articleCategories.slice(5);
    },
  },
  created() {
    var self = this;
    setInterval(function () {
      self.now = Date.now();
    }, 1000);
  },
};
</script>

<style>
.q-page-container {
  background-color: #f2f2f8;
}
.language-switcher {
  height: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.hidden-dropdown-toggle::after {
  display: none !important;
}
</style>
