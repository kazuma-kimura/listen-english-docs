const APP_WEBVIEW_USER_AGENT = 'app_webview';

const header = document.querySelector('header');
const footer = document.querySelector('footer');


const isAppMobile = (userAgent) => {
  if (userAgent == APP_WEBVIEW_USER_AGENT) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener('load', (event) => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (isAppMobile(userAgent)) {
    header.style.display = 'none';
    footer.style.display = 'none';
  }
});
