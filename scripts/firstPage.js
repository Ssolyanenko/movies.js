let mapClass = document.createElement("div");
mapClass.classList.add("section__contact-img");

fetch("./scripts/firstPage.json")
  .then((res) => res.json())
  .then((data) => {
    getAllBlocks(data);
  });

function getAllBlocks(data) {
  function getBtn(arr) {
    return arr
      .map((el) => `<button class="${el.button}">${el.text}</button> `)
      .join("");
  }

  function getHeader(arr) {
    return arr
      .map(
        (el) =>
          ` 
        <div class="header__content-inner">
            <div class="header__content-text">
                <h1>${el.title} </h1>
                <p>${el.paragraph}</p>
            </div>
            <div class="header__content-buttons">
              ${getBtn(data.buttonsHeader)}
            </div>
            <div class="for_about"><a id="about" href="#"></a></div>
        </div>
    `
      )
      .join("");
  }

  function setTitle(arr) {
    return arr
      .map(
        (el) =>
          ` <div class="${el.class}">
             <h2>${el.title}</h2>
             <p>${el.paragraph}</p>
             <span class="{el.span}"></span>
            </div>
             `
      )
      .join("");
  }

  function setAsideBlocks(arr) {
    return arr
      .map(
        (el) => `  
  <div class="${el.class}">
   <img src="${el.img}" alt="">
   <span>${el.span}</span>
    <div class="div"></div>
    </div>`
      )
      .join("");
  }

  function setTopBlock(arr) {
    return arr
      .map(
        (el) =>
          ` <div class="container">
        <section class="section__top">
        ${setTitle(data.setTitle)}
         <div class="section__top-content">
         <div class="section__top-aside">
        ${setAsideBlocks(data.blocksAside)}
        </div>
       <div class="section__top-img"><img src="${el.img}" alt=></div>
      </div>
       </section>
       </div>`
      )
      .join("");
  }

  function setThreeCenterBlocks(arr) {
    return arr
      .map(
        (el) =>
          `
                  <div class="section_center-content-first">
                <div class="section_center-content-first-img">
                    <img class="width-100" src="${el.img}" alt="">
                </div>
                <div class="section_center-content-first-text">
                    <h3>${el.title}</h3>
                    <p>${el.paragraph}</p>
                    <a id="${el.portfolio}" href="#"></a></p>
            </div>
            <div class="section_center-content-first-day">
                <p>${el.day} <span class="midddot">&#8226</span> ${el.time} <span
                    class="midddot">&#8226</span>
                    <img src="${el.logo}" alt=""> ${el.comments}</p>
         </div>
       
        </div>`
      )
      .join("");
  }

  function setCenterBlock(arr) {
    return `
        <section class="section_center">
        <div class="container">
        ${setTitle(data.setTitleSecond)}
        <div class="section_center-content">
        ${setThreeCenterBlocks(data.setCenterBlock)}
       </div>
       </div>
        </section>
              `;
  }
  
  function setFirstWrapper(arr) {
    return arr
      .map(
        (el) =>
          `
         <div class="section_portfolio-first-wrapper">
        <div class="section_portfolio-content-item">
            <img  class="widht_100" src="${el.img}" alt="">
        </div>
        <div class="${el.class}">
            <h3>${el.title}</h3>
            <p>${el.paragraph}</p>
        </div>
        <div class="block__for-links">
            <div class="block__for-links-attach">
                <a href="#">
                    <img src="${el.logo}" alt="">
                </a>
            </div>
            <div class="block__for-links-attach">
                <a href="#"><img src="${el.search}" alt=""></a>
            </div>
        </div>
          
       </div>`
      )
      .join("");
  }

  function seSlider(arr) {
    return arr
      .map(
        (el) => `
        <div class="slider__arrows">
            <div tabIndex="0" class="slider-left">
              <a href="#"><img src="${el.img}" alt="arrow"></a>
            </div>
            <div tabIndex="0" class="slider-right">
                <a href="#"><img src="${el.img}" alt="arrow"></a>
            </div>
        </div>
        <div class="section_portfolio-cover">
            <button class="${el.btnClass}">${el.BtnText}</button>
        </div>`
      )
      .join("");
  }

  function setPortfolio() {
    return `    
        <div class="container">
        <div class="slider__pic">
         <section class="section_portfolio">
         ${setTitle(data.setTitleThird)}
         <div onselectstart="return false" onmousedown="return false" class="section__portfolio-content">
          ${setFirstWrapper(data.firstWrapper)}
         </div>
         </div>
         </div>
         <div class="slider__container">
         ${seSlider(data.SliderButton)}
         </div>
       </section>
       </div>
      </div>`;
  }

  function setUser(arr) {
    return arr
      .map(
        (el) => `
                <section class="section__user">
         <div class="container">
            <div class="section__user-inner">
                 <div class="${el.class}">
                    <h2>${el.title}</h2>
                    <span class="${el.spanFirst}"></span>
                </div>
                               <div class="section__user-inner-content">
                    <div tabindex="0" class="slider-left user">
                        <a href="#"><img src="${el.logo}" alt="arrow"></a>
                    </div>
                    <div class="container-slider">
                    <div class="slider__user">     
                       <div class="slider__user-item">
                     <div class="section__user-inner-about">
                         <blockquote> <span class="doublequote">“</span> ${el.blockquote} </blockquote>
                         <p>${el.paragraph} <br>
                             <span class="weight_light">${el.span}</span>  </p>
                     </div>
                     <div class="section__user-inner-img">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="">
                     </div>
                     </div>
                       <div class="slider__user-item">
                    <div class="section__user-inner-about">
                        <blockquote> <span class="doublequote">“</span> ${el.blockquote} </blockquote>
                        <p>${el.paragraph} <br>
                            <span class="weight_light">${el.span}</span>  </p>
                    </div>
                    <div class="section__user-inner-img">
                        <img src="${el.userImg}" alt="">
                    </div>
                    </div>
                     <div class="slider__user-item">
                    <div class="section__user-inner-about">
                        <blockquote> <span class="doublequote">“</span> ${el.blockquote} </blockquote>
                        <p>${el.paragraph} <br>
                            <span class="weight_light">${el.span}</span>  </p>
                    </div>
                    <div class="section__user-inner-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="">
                    </div>
                    </div>
                     <div class="slider__user-item">
                    <div class="section__user-inner-about">
                        <blockquote> <span class="doublequote">“</span> ${el.blockquote} </blockquote>
                        <p>${el.paragraph} <br>
                            <span class="weight_light">${el.span}</span>  </p>
                    </div>
                    <div class="section__user-inner-img">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="">
                    </div>
                    </div>
                    </div>
                         <div class="dots"> 
                    </div>
                    </div>    
                    <div tabindex="0"class="slider-right user">
                      <a href="#"><img src="${el.logo}" alt="arrow"></a>
                    </div>
                </div>
                <div class="for_contact">  <a id="contact" href="#"></a> </div>

            </div>
         </div>
       </section>`
      )
      .join("");
  }
  function getSprite(arr) {
    return arr
      .map(function (el) {
        return ` <a class="${el.social}" href="${el.link}" target="_blank">
                           <img src="${el.img}" alt="facebook">
                        </a>`;
      })
      .join("");
  }
  function setContact(arr) {
    return `
        <section class="section__contact-top">
            <div class="container">
                ${setTitle(data.setTitleForth)}   
                <div class="section__contact-inner">
                    <div class="sprite">
                       ${getSprite(data.linksSprite)}
                    </div>
                </div>
            </div>
        </section>
   `;
  }
  function getLi(arr) {
    return arr
      .map(function (el) {
        return `
        <li>${el.li} <p> ${el.p}</p></li>`;
      })
      .join("");
  }

  function getInput(arr) {
    return arr
      .map(function (el) {
        return `
        <div class="${el.class}">
            <label class="submit__form-label " for="${el.for}">
                ${el.text}
            </label><br>
            <input class="submit__form-input " type="${el.type}"  placeholder="${el.placeholder}">
        </div>`;
      })
      .join("");
  }

  function getContact(arr) {
    return arr
      .map(function (el) {
        return `
        <section class="section__contact-form">
            <div class="container">
                <div class="section__contact-box">
                    <div class="section__contact-form-next">
                        <h2>What will be next step?</h2>
                        <ul>
                          ${getLi(data.getLi)}
                        </ul>
                    </div>
                <div class="section__contact-form-fill">
                    <div class="section__contact-fill-top">
                        <p>${el.p}
                        </p>
                    </div>
                    <div class="section__contact-form-fill-wrapper">
                <form action="#">
                    ${getInput(data.getInput)}
                               <div class="submit__form-third" >
                        <label class="submit__form-label showpass" for="country">${
                          el.text
                        } </label><br>
                        <input class="submit__form-input" type="password" placeholder="">

                    </div>
                          <button class="${
                            el.buttonClass
                          }">${el.buttonText}</button>
                    <p>${
                      el.p2
                    } <a href="mailto:email@gmail.com" target="_blank">${el.email}</a>  </p>
                </form>           
                </div>
            </div>
        </div>
    </section> `;
      })
      .join("");
  }
  const HEADER = document.getElementById("headerId");
  const MAIN = document.getElementById("mainId");
  const CONTAINER = document.createElement("div");
  CONTAINER.classList.add("container");
  MAIN.classList.add("main");

  HEADER.appendChild(CONTAINER);

  CONTAINER.innerHTML = `
    ${getHeader(data.header)}
`;

  MAIN.innerHTML = `
        ${setTopBlock(data.setTopBlock)}
        ${setCenterBlock(data.setCenterBlock)}
        ${setPortfolio()}
        
        ${setUser(data.setUser)}
        ${setContact()}
        ${getContact(data.mainContact)}
        `;
  document
    .querySelector(".section__contact-form-fill-wrapper")
    .appendChild(mapClass);
  const potfolioContent = document.querySelector(".section__portfolio-content");
  const slideContent = document.getElementsByClassName(
    "section_portfolio-first-wrapper"
  );
  let firstSliderIndex = slideContent.length + 3;
  let firstSliderWidth = slideContent[0].offsetWidth;

  const secondList = document.querySelector(".slider__user");
  const secondSlide = document.getElementsByClassName("slider__user-item");

  let secondSliderIndex = secondSlide.length + 3;
  let secondSliderWidth = secondSlide[0].offsetWidth;

  function Slider(list, slide, newIndex, newWidth) {
    this.transitionTime = 200;
    this.currentIndex = 0;
    this.interval;
    this.list = list;
    this.slide = slide;
    this.newIndex = newIndex;
    this.newWidth = newWidth;
    this.right;
    this.move = true;
  }

  Slider.prototype.mouseEnter = function () {
    this.move = false;
  };
  Slider.prototype.mouseLeave = function () {
    this.move = true;
  };
  Slider.prototype.reset = function () {
    setTimeout(() => {
      this.list.style.transition = `none`;
      this.list.style.transform = `translateX(-${
        this.newWidth * this.currentIndex
      }px)`;
    }, this.transitionTime);
  };

  Slider.prototype.setLayout = function () {

    let firstclone = this.slide[0].cloneNode(true);
    let secondclone = this.slide[1].cloneNode(true);
    let lastclone = this.slide[this.slide.length - 1].cloneNode(true);
    this.list.appendChild(firstclone);
    this.list.appendChild(secondclone);
    this.list.prepend(lastclone);
    this.currentIndex = 1;
    this.list.style.transform = `translateX(-${
      this.newWidth * this.currentIndex
    }px)`;
    this.right = setInterval(this.moveRight.bind(this), 1000);
    this.list.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    this.list.addEventListener("mouseleave", this.mouseLeave.bind(this), false);
  };

  Slider.prototype.moveRight = function () {
    if (this.move) {
      this.list.style.transition = `${this.transitionTime}ms`;
      if (this.currentIndex + 1 === this.slide.length - 2) {
        this.currentIndex = 0;
        this.list.style.transition = `none`;
        this.list.style.transform = `translateX(-${
          this.newWidth * this.currentIndex
        }px)`;
        this.currentIndex = 1;
        setTimeout(() => {
          this.list.style.transition = `${this.transitionTime}ms`;
          this.list.style.transform = `translateX(-${
            this.newWidth * this.currentIndex
          }px)`;
        }, 50);
      } else {
        this.currentIndex++;
        if (this.currentIndex === this.slide.length + 1) {
          this.list.style.transform = `translateX(-${
            this.newWidth * this.currentIndex
          }px)`;
          this.currentIndex = 1;
          this.reset();
        } else {
          this.list.style.transform = `translateX(-${
            this.newWidth * this.currentIndex
          }px)`;
        }
      }
    }
  };
  Slider.prototype.moveLeft = function () {
    if (this.move) {
      if (this.currentIndex === 0) {
        this.currentIndex = this.slide.length - 3;
        this.list.style.transition = `none`;
        this.list.style.transform = `translateX(-${
          this.newWidth * this.currentIndex
        }px)`;
        this.reset();
        setTimeout(() => {
          this.currentIndex--;
          this.list.style.transition = `${this.transitionTime}ms`;
          this.list.style.transform = `translateX(-${
            this.newWidth * this.currentIndex
          }px)`;
        }, 50);
      } else {
        this.list.style.transition = `${this.transitionTime}ms`;
        this.currentIndex--;
        this.list.style.transform = `translateX(-${
          this.newWidth * this.currentIndex
        }px)`;
      }
    }
  };

  function FirstSlider() {
    Slider.apply(this, arguments);
  }
  FirstSlider.prototype = Object.create(Slider.prototype);
  FirstSlider.prototype.constructor = FirstSlider;

  FirstSlider.prototype.setLayout = function () {
    Object.getPrototypeOf(Object.getPrototypeOf(this)).setLayout.apply(this);

    this.list.addEventListener("mousedown", this.getX.bind(this), false);
    this.list.addEventListener("mouseup", this.getY.bind(this), false);
  };
  FirstSlider.prototype.getX = function (event) {
    this.press = event.clientX;
  };

  FirstSlider.prototype.getY = function (event) {
    this.up = event.clientX;
    if (this.press > this.up) {
      clearInterval(this.right);
      this.right = setInterval(this.moveRight.bind(this), 1000);
    } else {
      clearInterval(this.right);
      this.right = setInterval(this.moveLeft.bind(this), 1000);
    }
  };
  let slider2 = new FirstSlider(
    potfolioContent,
    slideContent,
    firstSliderIndex,
    firstSliderWidth
  );
  slider2.setLayout();

  function SecondSlider() {
    this.allDots;
    Slider.apply(this, arguments);
  }
  SecondSlider.prototype = Object.create(Slider.prototype);
  SecondSlider.prototype.constructor = SecondSlider;
  let dots = document.querySelector(".dots");
  SecondSlider.prototype.addDots = function () {
    this.imagesAmount = this.slide.length;
    for (let i = 0; i < this.imagesAmount; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
    }
    this.allDots = dots.querySelectorAll(".dot");
    this.allDots[0].classList.add("active-dot");
  };
  SecondSlider.prototype.setLayout = function () {
    Object.getPrototypeOf(Object.getPrototypeOf(this)).setLayout.apply(this);

    setInterval(this.a.bind(this), 1000);
    dots.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    dots.addEventListener("mouseleave", this.mouseLeave.bind(this), false);
  };

  SecondSlider.prototype.a = function () {
    if (this.move) {
      this.allDots.forEach((el) => {
        el.classList.remove("active-dot");
      });
      if (this.currentIndex === 1) {
        this.allDots[0].classList.add("active-dot");
      } else if (this.currentIndex + 3 === this.slide.length) {
        this.allDots[3].classList.add("active-dot");
      } else {
        this.allDots[this.currentIndex - 2].classList.remove("active-dot");
        this.allDots[this.currentIndex - 1].classList.add("active-dot");
      }
    } else {
      this.allDots.forEach((el, index) => {
        el.addEventListener("click", () => {
          if (index === 0) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            this.list.style.transform = `translateX(-${"2800"}px)`;
            this.currentIndex = 1;
          } else if (index === 1) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            this.list.style.transform = `translateX(-${"1120"}px)`;
            this.currentIndex = 2;
          } else if (index === 2) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            this.list.style.transform = `translateX(-${"1680"}px)`;
            this.currentIndex = 3;
          } else if (index === 3) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            secondList.style.transform = `translateX(-${"2240"}px)`;
            this.currentIndex = 4;
          } else if (index === 4) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            this.list.style.transform = `translateX(-${"2800"}px)`;
            this.currentIndex = 5;
          } else if (index === 5) {
            this.allDots.forEach((el, index) => {
              el.classList.remove("active-dot");
            });
            el.classList.add("active-dot");
            this.list.style.transform = `translateX(-${"3360"}px)`;
            this.currentIndex = this.currentIndex + 1;
          }
        });
      });
    }
  };

  let secondSlider = new SecondSlider(
    secondList,
    secondSlide,
    secondSliderIndex,
    secondSliderWidth
  );
  secondSlider.addDots();
  secondSlider.setLayout();
}







