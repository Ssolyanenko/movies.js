const buttonOne = document.querySelector('.one')
const BUTTON_ALL = document.querySelector('.all')

const progress = document.querySelector('.progress1')
const mainBlock = document.querySelectorAll('.main__content')
const img = document.querySelectorAll('.main__content-img')
const TITLE = document.getElementsByTagName('h3')
const P = document.getElementsByTagName('p')






const getRange = () =>{
    progress.setAttribute('value','100')
}

const getRangeZero = () =>{
    progress.setAttribute('value','0')
}


const getImg  = () => img.forEach((el)=> el.classList.add('hidden'))

const getTitle = () => {
   for (let item of TITLE) {
        item.classList.add('hidden')
    }
}

const getP = () => {
    for (let item of P) {
        item.classList.add('hidden')
    }
}

const getBlocks =()=>  mainBlock .forEach((el)=> el.classList.add('hidden'))
const c = document.getElementsByClassName('hidden')
const block = document.querySelectorAll('.main__content')
const removeClass = () => {
    setTimeout(()=>{
        for (let item of TITLE) {
            console.log(item)
            item.classList.remove('hidden')
        }
        for (let item of P) {
            console.log(item)
            item.classList.remove('hidden')
        }
        for (let item of img) {
            console.log(item)
            item.classList.remove('hidden')
        }
        for (let item of c) {
            console.log(item)
            item.classList.remove('hidden')
        }
        for (let item of block) {
            console.log(item)
            item.classList.remove('hidden')
        }
    },500)

}


let tasks = [getRange, getImg, getTitle,getP,getBlocks,getRangeZero,removeClass]

BUTTON_ALL.addEventListener('click',
    () => {
        const sleep = ms =>
            new Promise(res => {
                setTimeout(res, ms)
            })

        const myPromise = fn =>
            sleep(1000).then(() => {
                fn()
            })

        tasks.reduce(
            (p, x) =>
                p.then(_ => myPromise(x)),

            Promise.resolve()

        )
    })

buttonOne.addEventListener('click',()=>{
    getRange()
    function delay2(ms, str) {
        return new Promise (resolve => setTimeout(() => {
          hide2(str);
        }, ms));
    }

    const hide2 = (tag) => {
        return tag.classList.add('hidden')
    };

    function oneByOne (el){
        for (let i = 0; i<el.length;i++){
        }
    }
    oneByOne(mainBlock)
    async function* generateSequence( end) {

        for (let i = 0; i <= end.length-1; i++) {
            if(i === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));

            }else{
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
            // Wow, can use await!


            yield i
        }

    }

    async function all () {

        let generator = generateSequence(mainBlock);
        for await (let i of generator) {

            delay2(0, img[i]).then(delay2(700, TITLE[i])).then(delay2(1400, P[i])).then(delay2(2100, mainBlock[i]))  ; // 1, then 2, then 3, then 4, then 5 (with delay between)
        }
        setTimeout(()=>{
            getRangeZero()
            removeClass()

        },2500)


    }
    all()



    // const timer = ms => new Promise(res => setTimeout(res, ms))
    // async function load () { // We need to wrap the loop into an async function for this to work
    //        // then the created Promise can be awaited
    //
    //
    //     for (let item of mainBlock) {
    //
    //         //   const timer = ms => new Promise(res => setTimeout(res, ms))
    //         //   const myPromise = fn =>
    //         //       timer(700).then(() => {
    //         //           fn()
    //         //       })
    //         // tasks.reduce(
    //         //       (p, x) =>
    //         //           p.then(_ => myPromise(x)),
    //         //
    //         //       Promise.resolve()
    //         //
    //         //   )
    //         Promise.resolve(item)
    //
    //             .then(() => {
    //                 setTimeout((el) => {
    //                     progress.setAttribute('value', '100')
    //                 }, 200)
    //
    //             })
    //             .then(() => setTimeout(() => img.forEach((el) => el.classList.add('hidden')), 400))
    //             .then(() => {
    //                 setTimeout((el) => {
    //                     for (let item of TITLE) {
    //                         item.classList.add('hidden')
    //                     }
    //                 }, 600)
    //             })
    //             .then(() => {
    //                 setTimeout((el) => {
    //                     for (let item of P) {
    //                         item.classList.add('hidden')
    //                     }
    //                 }, 800)
    //             })
    //             .then(() => setTimeout((el) => mainBlock.forEach((el) => el.classList.add('hidden')), 1000))
    //
    //
    //         }
    // await timer(3000);
    //
    //
    // }
    //
    // load();
    //



})










