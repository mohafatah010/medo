function setLang(lang){document.documentElement.lang=lang;document.body.setAttribute('lang',lang);localStorage.setItem('lang',lang);document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=(i18n[lang]&&i18n[lang][key])||el.textContent})}
const i18n={
  ar:{home:'الرئيسية',services:'الخدمات',glimpse:'تاك أ جليمبس',search:'منصة البحث',audio:'المكتبة الصوتية',history:'التاريخ',projects:'مشروعاتنا',cta:'استكشف الخدمات',learn_more:'اعرف المزيد',tag:'مكتبة إنبي',hero_title:'Enppi Bibliotheca',hero_sub:'اكتشف عالماً من المعرفة والخدمات الثقافية',quick_sections:'أقسام سريعة',features_title:'أكثر من 3000 كتاب علمي',features_sub:'فى جميع التخصصات الهندسية',services_title:'خدماتنا'},
  en:{home:'Home',services:'Services',glimpse:'Take a Glimpse',search:'Search Platform',audio:'Audio Library',history:'Old History',projects:'Projects',cta:'Explore Services',learn_more:'Learn more',tag:'Enppi Library',hero_title:'Enppi Bibliotheca',hero_sub:'Discover a world of knowledge and culture',quick_sections:'Quick Sections',features_title:'More Than 3000 Scientific Books',features_sub:'In All Engineering Disciplines',services_title:'Our Services'}
};
function activateCurrentLink(){const path=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(a=>{const href=a.getAttribute('href');if(href.endsWith(path)) a.classList.add('active')})}
function header(){return `
<header>
  <div class="container nav">
    <a class="brand" href="index.html"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Enppi_logo.png" alt="Enppi"><span class="badge" data-i18n="tag">Enppi</span></a>
    <nav>
      <a href="index.html" data-i18n="home">الرئيسية</a>
      <a href="services.html" data-i18n="services">الخدمات</a>
      <a href="glimpse.html" data-i18n="glimpse">تاك أ جليمبس</a>
      <a href="search.html" data-i18n="search">منصة البحث</a>
      <a href="audio.html" data-i18n="audio">المكتبة الصوتية</a>
      <a href="history.html" data-i18n="history">التاريخ</a>
      <a href="projects.html" data-i18n="projects">مشروعاتنا</a>
    </nav>
    <div>
      <button class="btn secondary" onclick="setLang(document.documentElement.lang==='ar'?'en':'ar')">العربية / English</button>
    </div>
  </div>
</header>`}
function footer(){const y=new Date().getFullYear();return `<footer class="footer"><div class="container">© ${y} Enppi Bibliotheca · <span class="kbd">Ground floor</span> · <a href="mailto:EnppiBibliotheca@enppi.com" style="color:#e0e7ff">EnppiBibliotheca@enppi.com</a></div></footer>`}
function mountFrame(){document.body.insertAdjacentHTML('afterbegin', header());document.body.insertAdjacentHTML('beforeend', footer());activateCurrentLink();const saved=localStorage.getItem('lang')||'ar';setLang(saved)}
window.addEventListener('DOMContentLoaded',mountFrame);
