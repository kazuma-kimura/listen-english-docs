
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const isMobile = (userAgent) => {
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

const addElement = (userAgent) => {
  const element = document.createElement('div');
  element.textContent = userAgent;
  const target = document.querySelector('h1');
  target.appendChild(element);
}

window.addEventListener('load', (event) => {
  console.log("loadされたよー");
  const userAgent = window.navigator.userAgent.toLowerCase();
  addElement(userAgent);

  if (isMobile(userAgent)) {
    alert('mobileだよー。ヘッダー、フッターを消すよ。');
    header.style.display = 'none';
    footer.style.display = 'none';
  } else {
    alert('mobaileじゃないよー');
  }
});
