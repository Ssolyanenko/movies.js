function createElem(cons, elem, clas) {
    cons = document.createElement(elem);
    clas.forEach((element) => {
        cons.classList.add(element);
    });

    return cons;
}

const API_KEY = "api_key=d3eec0dd666fb4d220a11a92e6368076";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_KEY;
const main = document.getElementById("main");
const IMG_URL = "https://image.tmdb.org/t/p/w500";


getMoviesUrl(API_URL);

async function getMoviesUrl(url) {
    try {
        let r = await fetch(url);
        let u = await r.json();

        return u.results;
    } catch (e) {
        throw new Error(e);
    }
}

class ShowMovies {
    constructor(post) {
        this.post = post.movieNum;
        this.movie;
        this.CREATE_IMG;
        this.DESCR_WRAP;
        this.SPAN_AMOUNT

    }

    async getMovie() {
        let a = await getMoviesUrl(API_URL);
        return a;
    }

    showMovies1(data) {
        this.movie = data[this.post];
        this.section = document.createElement("section");
        this.CONTAINER = document.createElement("div");
        this.CREATE_IMG = document.createElement("img");

        this.SPAN_AMOUNT = createElem("amount", "span", ["amount"]);
        this.SECT_BRE_WRAP = createElem("section-breadcrumbs-wrapper", "div", [
            "section-breadcrumbs-wrapper",
        ]);
        this.SECT_BRE_WRAP_FIRST = createElem(
            "section-breadcrumbs-wrapper-first",
            "div",
            ["section-breadcrumbs-wrapper-first",]
        );
        //`${getClassForMain(this.post)}`
        this.BREADCRUMBS_FIRST = createElem("section-breadcrumbs-img", "div", [
            "section-breadcrumbs-img"
        ]);
        main.appendChild(this.section);
        this.section.classList.add("section-breadcrumbs");
        this.CONTAINER.classList.add("container");
        this.section.appendChild(this.CONTAINER);
        this.CONTAINER.appendChild(this.SECT_BRE_WRAP);
        this.SECT_BRE_WRAP.appendChild(this.SECT_BRE_WRAP_FIRST);
        this.SECT_BRE_WRAP_FIRST.appendChild(this.BREADCRUMBS_FIRST);
        this.BREADCRUMBS_FIRST.appendChild(this.CREATE_IMG);
        this.CREATE_IMG.setAttribute('src', `${IMG_URL + this.movie.backdrop_path}`)
        this.getReviewList(
            this.movie
        );
    }

    getReviewList(movie) {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?${API_KEY}`)
            .then((data) => data.json())
            .then((data) => {
                this.createReview(data.results, data);
            });
    }

    createReview(review, data, i, el, movie, amount) {
        this.SPAN_AMOUNT.innerText = `${review.length}`;
        let random = Math.floor(Math.random() * review.length);
        if (review.length === 0) {
            this.DESCR_WRAP = createElem("desr-wrap", "div", ["description__wrapper"]);
            this.CREATE_H3 = document.createElement("a");
            this.CREATE_H3.setAttribute("href", "#");
            this.CREATE_H3.innerText = `${this.movie.original_title}`;
            this.CREATE_P = document.createElement("p");
            this.CREATE_P.textContent = `No Review`
            console.log(this.movie)
            this.CREATE_DESCRIP =  document.createElement("p");
            this.CREATE_DESCRIP.textContent = `${this.movie.overview}`
            this.DESCR_WRAP.style.marginLeft='20px'
            this.DESCR_WRAP.style.marginTop='20px'
            this.SECT_BRE_WRAP_FIRST.appendChild(this.DESCR_WRAP);
            this.DESCR_WRAP.appendChild(this.CREATE_H3);
            this.DESCR_WRAP.appendChild(this.CREATE_P);
            this.DESCR_WRAP.appendChild(this.CREATE_DESCRIP);

        } else {
            this.CREATE_SPAN1 = createElem("span", "span", ["rating-item"]);
            this.CREATE_SPAN2 = createElem("span", "span", ["rating-item"]);
            this.CREATE_SPAN3 = createElem("span", "span", ["rating-item"]);
            this.CREATE_SPAN4 = createElem("span", "span", ["rating-item"]);
            this.CREATE_SPAN5 = createElem("span", "span", ["rating-item"]);
            this.DESCRIPT = createElem("section-breadcrumbs-description", "div", [
                "section-breadcrumbs-description"
            ]);
            this.DESCRIPT_TOP = createElem("description-top", "div", [
                "description-top",
            ]);
            this.RATING = createElem("rating__wrapper", "div", ["rating__wrapper"]);
            this.CREATE_DIV = document.createElement("div");
            this.CREATE_IMG_PERSON = document.createElement("img");
            if (review[random].author_details.avatar_path !== null) {
                if (
                    review[random].author_details.avatar_path.startsWith(
                        "/https://www.gravatar.com/avatar"
                    )
                ) {
                    this.CREATE_IMG_PERSON.setAttribute(
                        "src",
                        `${review[random].author_details.avatar_path.slice(1)}`
                    );
                } else {
                    this.CREATE_IMG_PERSON.setAttribute(
                        "src",
                        `${
                            "https://www.gravatar.com/avatar" +
                            review[random].author_details.avatar_path
                        }`
                    );
                }
            }
            this.SPAN_NEIL = createElem("neil", "a", ["neil"]);
            this.SPAN_NEIL.setAttribute("href", "#");
            this.SPAN_NEIL.innerHTML = `${review[random].author}`;
            this.BR = createElem("br", "br", ["clear"]);
            this.CREATE_BR = document.createElement("br");
            this.DESR_NAIL = createElem("desr-Nail", "div", ["desr-Nail"]);
            this.SPAN_TIME = createElem("time", "span", ["time"]);
            this.SPAN_TIME.innerText = `${this.getTime(new Date(review[random].updated_at))}`;
            this.SPAN_DATE = createElem("date", "span", ["date"]);
            this.SPAN_DATE.innerHTML = `${review[random].created_at.slice(0, 10)}`;
            this.DOT = createElem("midddot", "span", ["midddot"]);
            this.DOT.innerText = "·";
            this.DOT1 = createElem("midddot", "span", ["midddot"]);
            this.DOT1.innerText = "·";
            this.SPAN_IMG = createElem("img", "span", ["img"]);
            this.RATING_MINI = createElem("rating__wrapper", "a", ["rating-mini"]);
            this.RATING_MINI.setAttribute("href", "#");
            this.DESCR_WRAP = createElem("desr-wrap", "div", ["description__wrapper"]);
            this.CREATE_IMG_SPAN = document.createElement("img");
            this.CREATE_IMG_SPAN.setAttribute("src", "assets/logo/a-icon-comment.svg");

            this.CREATE_H3 = document.createElement("a");
            this.CREATE_H3.setAttribute("href", "#");

            this.CREATE_H3.innerText = `${this.movie.original_title}`;
            this.CREATE_P = document.createElement("p");
            if (i === 1) {
                this.CREATE_P.classList.add("line-clamp3");
            } else {
                this.CREATE_P.classList.add("line-clamp4");
            }
            this.CREATE_P.innerText = `${this.movie.overview}`;
            this.BUTTON_LEARN = createElem("button", "button", ["learn-more"]);
            this.BUTTON_LEARN.innerText = "Read more";
            this.SECT_BRE_WRAP_FIRST.append(this.DESCRIPT);
            this.DESCRIPT.appendChild(this.DESCRIPT_TOP);
            this.DESCRIPT_TOP.appendChild(this.CREATE_DIV);
            this.CREATE_DIV.appendChild(this.CREATE_IMG_PERSON);
            this.DESCRIPT_TOP.appendChild(this.RATING);
            this.RATING.appendChild(this.SPAN_NEIL);
            this.RATING.appendChild(this.CREATE_BR);
            this.RATING.appendChild(this.DESR_NAIL);
            this.DESR_NAIL.appendChild(this.SPAN_DATE);
            this.DESR_NAIL.appendChild(this.DOT);
            this.DESR_NAIL.appendChild(this.SPAN_TIME);
            this.DESR_NAIL.appendChild(this.DOT1);
            this.DESR_NAIL.appendChild(this.SPAN_IMG);
            this.SPAN_IMG.appendChild(this.CREATE_IMG_SPAN);
            this.DESR_NAIL.appendChild(this.SPAN_AMOUNT);
            this.RATING.appendChild(this.RATING_MINI);
            this.RATING_MINI.appendChild(this.CREATE_SPAN1);
            this.RATING_MINI.appendChild(this.CREATE_SPAN2);
            this.RATING_MINI.appendChild(this.CREATE_SPAN3);
            this.RATING_MINI.appendChild(this.CREATE_SPAN4);
            this.RATING_MINI.appendChild(this.CREATE_SPAN5);
            let elems = this.RATING_MINI.children;
            getRait(review[random].author_details.rating, elems);
            this.DESCRIPT.appendChild(this.BR);
            this.DESCRIPT.appendChild(this.DESCR_WRAP);
            this.DESCR_WRAP.appendChild(this.CREATE_H3);
            this.DESCR_WRAP.appendChild(this.CREATE_P);
            this.DESCR_WRAP.appendChild(this.BUTTON_LEARN);
            if (i === 3) {
                setTimeout(() => {
                    this.MAIN_BUTTON = createElem("button", "div", ["main_button"]);
                    this.BUTTON_PRIMARY = createElem("button", "button", [
                        "button-primary",
                    ]);
                    main.appendChild(this.MAIN_BUTTON);
                    this.MAIN_BUTTON.appendChild(this.BUTTON_PRIMARY);
                    this.BUTTON_PRIMARY.innerText = "Read more";
                });
            }
        }

    }

    getTime(arg) {
        let current = new Date();
        let days = Math.floor(
            Math.abs(current.getTime() - arg.getTime()) / (1000 * 3600 * 24)
        );
        let year = Math.floor(days / 365);
        let months = Math.floor((days - year * 365) / 30);
        let hour = Math.floor(
            Math.abs(current.getTime() - arg.getTime()) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
            Math.abs(current.getTime() - arg.getTime()) / (1000 * 60)
        );
        if (year <= 0) {
            if (months <= 0) {
                if (days <= 0) {
                    if (hour <= 0) {
                        return (this.SPAN_TIME.innerHTML = `${minutes} minutes`);
                    } else if (hour === 1) {
                        return (this.SPAN_TIME.innerHTML = `${hour} hour ago  `);
                    } else {
                        return (this.SPAN_TIME.innerHTML = `${hour} hours`);
                    }
                } else if (days === 1) {
                    return (this.SPAN_TIME.innerHTML = `${days} day ago  `);
                } else {
                    return (this.SPAN_TIME.innerHTML = `${days} days ago  `);
                }
            } else {
                return (this.SPAN_TIME.innerHTML = `${months} month ago`);
            }
        } else if (year === 1) {
            return (this.SPAN_TIME.innerHTML = `${year} year ago`);
        } else {
            return (this.SPAN_TIME.innerHTML = `${months} month ago`);
        }
    }
}

class ShowVideo extends ShowMovies {
    constructor(post) {
        super(post);
        this.video = post.video
    }

    showMovies(data) {
        super.showMovies1(data);
        this.BREADCRUMBS_FIRST.classList.add('breadcrumbs-first')
        this.SECT_BRE_WRAP_FIRST.classList.add('first')

        const {
            backdrop_path
        } = this.movie;
        this.CREATE_IMG.setAttribute("src", `${IMG_URL + backdrop_path}`);
    }
}

let showVideo1 = new ShowVideo({
    movieNum: 12,
    video: true
});
showVideo1.getMovie().then((r) => showVideo1.showMovies(r));

class ShowAudio extends ShowMovies {
    constructor(post, movie) {
        super(post, movie);
    }

    showMovies(data) {
        super.showMovies1(data);
        this.SECT_BRE_WRAP_FIRST.classList.add('second')
        this.movie = data[this.post];
        const {
            backdrop_path
        } = this.movie;
        this.CREATE_IMG.setAttribute("src", `${IMG_URL + backdrop_path}`);
    }

    createReview(review, data, i, el, movie, amount) {
        super.createReview(review, data, i, el, movie, amount);


        const PLAY = createElem("play-img", "div", ["description-img"]);
        const IMG_PlAY = document.createElement("img");
        IMG_PlAY.setAttribute("src", "./assets/img/player.png");
        this.DESCR_WRAP.insertBefore(
            PLAY,
            this.DESCR_WRAP.firstElementChild.nextElementSibling
        );

        PLAY.appendChild(IMG_PlAY);

    }
}
let showVideo3 = new ShowAudio({
    movieNum: 3,
    video: true
});
showVideo3.getMovie().then((r) => showVideo3.showMovies(r));

class ShowImage extends ShowMovies {
    constructor(post, movie) {
        super(post, movie);
    }

    showMovies(data) {
        super.showMovies1(data);
        this.movie = data[this.post];
        this.SECT_BRE_WRAP_FIRST.classList.add('third')
        const {
            backdrop_path,
        } = this.movie;
        this.CREATE_IMG.setAttribute("src", `${IMG_URL + backdrop_path}`);
    }
}

let showVideo4 = new ShowImage({
    movieNum: 5,
    video: true
});
showVideo4.getMovie().then((r) => showVideo4.showMovies(r));

class ShowText extends ShowMovies {
    constructor(post, movie) {
        super(post, movie);
    }

    showMovies(data) {
        super.showMovies1(data);
        this.movie = data[this.post];
        this.BREADCRUMBS_FIRST.style.display = "none"

        this.SECT_BRE_WRAP_FIRST.classList.add('forth')
    }
}

let showVideo6 = new ShowText({
  movieNum: 8,
  video: true
});
showVideo6.getMovie().then((r) => showVideo6.showMovies(r));


main.innerHTML = "";
const BREADCRUMBS = createElem("breadcrumbs", "div", ["breadcrumbs"]);
const CONTAINER = createElem("container", "div", ["container"]);
const BREADCRUMBS_TEXT = createElem("breadcrumbs__text", "div", [
    "breadcrumbs__text",
]);
const SPAN_STICK = createElem("for__stick", "span", ["for__stick"]);
const H2 = createElem("h2", "h2", ["h2"]);
H2.innerText = "About us";
const BREAD_FORM = createElem("breadcrumbs__form", "div", [
    "breadcrumbs__form",
]);
const FORM = createElem("form", "form", ["form"]);
FORM.setAttribute("action", "#");
const AUTHOR = createElem("submit__form-author", "div", [
    "submit__form-author",
]);
const LABEL = createElem("submit__author", "label", ["submit__author"]);
LABEL.setAttribute("for", "author");
const INPUT = createElem("submit__form-author", "input", [
    "submit__form-author",
]);
INPUT.setAttribute("type", "text");
INPUT.setAttribute("placeholder", "Search by author");
INPUT.setAttribute("id", "author");
setTimeout(() => {
    const MAIN_B_CON = createElem("div", "div", ["main_button"]);
    const MAIN_B = createElem("div", "button", ["button-primary"]);
    MAIN_B.innerHTML = 'Read more'
    MAIN_B_CON.appendChild(MAIN_B)
    main.appendChild(MAIN_B_CON)
}, 1000)
main.appendChild(BREADCRUMBS);
BREADCRUMBS.appendChild(CONTAINER);
CONTAINER.appendChild(BREADCRUMBS_TEXT);
BREADCRUMBS_TEXT.appendChild(SPAN_STICK);
BREADCRUMBS_TEXT.appendChild(H2);
CONTAINER.appendChild(BREAD_FORM);
BREAD_FORM.appendChild(FORM);
FORM.appendChild(AUTHOR);
AUTHOR.appendChild(LABEL);
AUTHOR.appendChild(INPUT);

function getRait(data, elems) {
    const arr = [];
    for (let i = 0; i < 1; i++) {
        if (data >= 0 && data <= 2) {
            arr.push("active");
        } else if (data >= 3 && data < 4) {
            arr.push("active", "half");
        } else if (data >= 4 && data < 5) {
            arr.push("active", "active");
        } else if (data >= 5 && data < 6) {
            arr.push("active", "active", "half");
        } else if (data >= 6 && data <= 7) {
            arr.push("active", "active", "active");
        } else if (data >= 7 && data <= 8) {
            arr.push("active", "active", "active", "half");
        } else if (data >= 8 && data <= 9) {
            arr.push("active", "active", "active", "active", "half");
        } else if (data >= 9 && data <= 10) {
            arr.push("active", "active", "active", "active", "active");
        }
    }
    arr.map((el, index) => {
        return `${elems[index].classList.add(el)}`;
    });
}

(function () {
    let foo = document.querySelector(".copyright");
    let localTime = document.createElement("span");
    localTime.classList.add("fixed");
    foo.appendChild(localTime);

    function updateClock(clock) {
        clock.innerHTML =
            new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    }

    updateClock(localTime);
    setInterval(function () {
        updateClock(localTime);
    }, 1000);
})();







