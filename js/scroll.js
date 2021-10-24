const sections = document.querySelectorAll('section');
let posArr = [];
/*
offsetTop 해당 요소의 위치값
console.log(posBox3);
const posBox1 = section[0].offsetTop;
*/

for(let el of sections){
  posArr.push(el.offsetTop);
}

window.addEventListener('scroll', e => {
  let scroll = window.scrollY || window.pageYOffset;
});

// 각 li 버튼 클릭시 순서값을 구하고 해당 순서에 맞는 섹션의 세로 위치값으로 이동
const nav = document.querySelectorAll('.nav li');

nav.forEach((el, index) => {
  el.addEventListener('click', e => {
    new Anime(window, {
      prop: 'scroll',
      value: posArr[index],
      duration: 500
    });

    for(let el of nav){
      el.classList.remove('on');
    }
    e.currentTarget.classList.add('on');
  })
})

/*
box.addEventListener('click', e => {
// new Anime(제어할 요소(선택자){
  new Anime(box, {
    // prop: 'right',  어떤 것을 바꿀지
    // value: 500, 어떻게 바꿀지
    duration: 1500,

    callback: () => {
      new Anime(box, {
        prop: 'top',
        value: 500,
        duration: 1000,

        callback: () => {
          new Anime(box, {
            prop: 'opacity',
            value: 0,
            duration: 1000
          })
        }
      })
    }
  });
});
*/