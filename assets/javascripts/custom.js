
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const isMobile = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  alert(userAgent);
  if (userAgent.indexOf('iphone') != -1) {
    alert('iPhoneをお使いですね');
  } else if (userAgent.indexOf('ipad') != -1) {
    alert('iPadをお使いですね');
  } else if (userAgent.indexOf('android') != -1) {
    if (userAgent.indexOf('mobile') != -1) {
      alert('androidのスマホをお使いですね');
    } else {
      alert('androidのタブレットをお使いですね');
    }
  } else {
    return false;
  }
  return true;
}

window.addEventListener('load', (event) => {
  console.log("loadされたよー");
  if (isMobile()) {
    alert('mobileだよー。ヘッダー、フッターを消すよ。');
    header.style.display = 'none';
    footer.style.display = 'none';
  } else {
    alert('mobaileじゃないよー');
  }
});
