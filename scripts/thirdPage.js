fetch("./scripts/thirdPage.json")
  .then((res) => res.json())
  .then((data) => {
    function getRating(arr) {
      return arr
        .map(function (el) {
          return ` <span class="${el}"></span>`;
        })
        .join("");
    }

    function getTitle(arr) {
      return arr
        .map(function (el) {
          return `    
   <h1>${el.title}</h1>
            <div class="top__float"> <img src="${
              el.userPhoto
            }" alt="Sarah"></div>
            <div class="rating__wrapper">
                <span class="neil">  ${el.name} </span> <br>
                <span class="desr-Nail">  ${
                  el.date
                } <span class="midddot">&#183</span> ${el.time} <span class="midddot">&#183</span>  <img src="${el.commentsLogo}"> ${el.comments}
                                     </span>
                <div class="rating-mini">
                   ${getRating(el.span)}
                </div>
            </div>
            <br class="clear">  
                            `;
        })
        .join("");
    }

    function getP(arr) {
      return arr
        .map(function (el) {
          return ` <p>${el}</p>`;
        })
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

    function getLikes(arr) {
      return arr
        .map(function (el) {
          return `  <div class="article__bottom-img"><img src="${el.likes}" alt="like"> 
  <span class="likes_counter">${el.likesAmount}</span></div>`;
        })
        .join("");
    }

    function getArticle(arr) {
      return arr
        .map(function (el) {
          return `
                    <div class="main__img">
                    <img src="${el.mainPhoto}" alt="Imgagepost"></div>
                <div class="main__audio">  
                
  <audio controls src="../audio/stephania.mp3" ></audio>
          
                 </div>
                <div class="main__text">
                   ${getP(el.paragraph)}
                   
                  <h2>${el.title[0]}</h2>  
                    ${getP(el.secondParagraph)}
                    <blockquote> ${el.blockquote} </blockquote>

                     <h2>${el.title[1]}</h2>  
                    ${getP(el.thirdParagraph)}
                </div>

                <div class="article__bottom">
                    <div class="article__bottom-likes">
                       ${getLikes(data.likes)}
                    </div>
                    <div class="sprite">
                    ${getSprite(data.linksSprite)}
                    </div>
                </div>
                    `;
        })
        .join("");
    }

    function getAsidePost(arr) {
      return arr
        .map(function (el) {
          return `
                          <div class="aside__post">
                        <div class="aside__post-img"><img src="${el.photo}" alt="Latestpostimg1"></div>
                        <div class="aside__post-text"><p>Much cure inappropriate <br> could this restrictions …</p> <p>${el.date}   <span class="midddot">&#8226</span>    ${el.time}    <span class="midddot">&#8226</span>
                            <img src="${el.commentsLogo} "  alt="">   ${el.comments}   </p>
                            </div>      
                    </div>
                 `;
        })
        .join("");
    }

    function getAsideLi(arr) {
      return arr
        .map(function (el) {
          return `
                <li class="${el.li}">${el.liText}</li>
                    
                 `;
        })
        .join("");
    }

    function getTags(arr) {
      return arr
        .map((el) => `<button class="tags-btn">${el}</button>`)
        .join("");
    }

    function getAside(arr) {
      return arr.map(function (el) {
        return `
         <div class="aside__latest-wrapper">
                    <div class="aside__latest">
                        <h2>${el.title}</h2>
                    </div>
                    ${getAsidePost(data.asidePost)}
                    <button class="${
                      data.asidePost[1].button
                    }">${data.asidePost[1].buttonText}</button>
                    </div>
                   <div class="aside__categories">
                    <div class="aside__categories-wrapper">
                        <h2>Categories</h2>
                        <div class="search_categories">
                            <div class="select">
                                <ul>
                                ${getAsideLi(data.menu)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                  <div class="aside__tags">
                    <div class="aside__wrapper">
                        <h2>Tags</h2>
                        <div class="buttons__wrapper">
                          ${getTags(data.btnData)}
                        </div>
                    </div>
                </div>
           
 `;
      });
    }
    function getRewItem(arr) {
      return arr
        .map(function (el) {
          return `
               <div class="main__reviews-item">
                  <div class="main__reviews-img">
                      <img src="${el.photo}" alt="Neil">
                  </div>
                  <blockquote>
                      <div class="block__header">
                          <h3>${el.name}</h3>
                          <div class="rating-mini">
                               ${getRating(el.span)}
                          </div>
                          <p><img src="${el.logo}" alt="time">${el.time}</p>
                      </div>
                      <div class="block__text">
                          <p>
                              ${el.paragraph}</p>
                      </div>
                      <div class="${
                        el.link
                      }"> <a href="#">${el.linkText}</a></div>
                  </blockquote>
              </div>
              `;
        })
        .join("");
    }

    function getRew(arr) {
      return arr.map(function (el) {
        return `
               <h2>${data.titleRew.title}</h2>
          <div class="main__reviews-box">
         ${getRewItem(data.reviewsItems)}
          <div class="main__reviews-item">
                  <div class="main__reviews-img">
                      <img src="${data.reviewsLast.photo}" alt="Neil">
                  </div>
                  <blockquote class="last-of-block" >
                      <div class="block__header">
                          <h3>${data.reviewsLast.name}</h3>
                          <div class="rating-mini">
                               ${getRating(data.reviewsLast.span)}
                          </div>
                          <p><img src="${
                            data.reviewsLast.logo
                          }" alt="time">${data.reviewsLast.time}</p>
                      </div>
                      <div class="block__text">
                          <p>
                              ${data.reviewsLast.paragraph}</p>
                      </div>
                  </blockquote>
              </div>
              <div class="main__rewiev-btn">  <button class="learn-more">More comments</button></div>
       </div>
        </div>
`;
      });
    }

    const MAIN = document.getElementById("main_third");
    const CONTAINER = document.createElement("div");
    const SECTION = document.createElement("section");
    const MAIN_WRAPPER = document.createElement("div");
    const ARTICLE = document.createElement("article");
    const ASIDE = document.createElement("aside");
    const REVIEW = document.createElement("div");

    MAIN.appendChild(CONTAINER);
    CONTAINER.appendChild(SECTION);
    CONTAINER.appendChild(MAIN_WRAPPER);
    MAIN_WRAPPER.appendChild(ARTICLE);
    MAIN_WRAPPER.appendChild(ASIDE);
    CONTAINER.appendChild(REVIEW);

    CONTAINER.classList.add("container");
    SECTION.classList.add("top");
    MAIN_WRAPPER.classList.add("main-wrapper");
    ARTICLE.classList.add("article");
    ASIDE.classList.add("aside");
    REVIEW.classList.add("main__reviews");
    SECTION.innerHTML = `
        ${getTitle(data.titleBlock)}
        `;
    ARTICLE.innerHTML = `
         ${getArticle(data.articleBlock)}
        `;
    ASIDE.innerHTML = `
        ${getAside(data.asideBlock)}`;

    REVIEW.innerHTML = `
      ${getRew(data.asideBlock)}
     `;
  });
