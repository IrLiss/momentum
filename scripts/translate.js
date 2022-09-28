import arrLang from './language.js';

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

// change lang
const buttonLang = document.querySelector('.button-lang');
const languageEn = document.querySelector('.language-en');
const languageRu = document.querySelector('.language-ru');

document.querySelector('.settings-application-language').textContent = arrLang['applicationlanguage'][lang];
languageEn.textContent = arrLang['English'][lang];
languageRu.textContent = arrLang['Russian'][lang];
document.querySelector('.settings-source-photo').textContent = arrLang['sourcephoto'][lang];

function photoTagsLang() {
    document.querySelector('.settings-photo-tags').textContent = arrLang['phototags'][lang];
    document.querySelector('.tag-morning').textContent = arrLang['morningtags'][lang];
    document.querySelector('.tag-afternoon').textContent = arrLang['afternoontags'][lang];
    document.querySelector('.tag-evening').textContent = arrLang['eveningtags'][lang];
    document.querySelector('.tag-night').textContent = arrLang['nighttags'][lang];
    document.querySelector('.tag-nature').textContent = arrLang['naturetags'][lang];
    document.querySelector('.tag-animals').textContent = arrLang['animalstags'][lang];
    document.querySelector('.tag-mountains').textContent = arrLang['mountainstags'][lang];
    document.querySelector('.tag-cosmos').textContent = arrLang['cosmostags'][lang];
    document.querySelector('.tag-architecture').textContent = arrLang['architecturetags'][lang];
    document.querySelector('.tag-city').textContent = arrLang['citytags'][lang];
}
photoTagsLang();

if(lang === 'en') {
    languageEn.classList.toggle('active-menu-items');
} else {
    languageRu.classList.toggle('active-menu-items');
}

function changeLang() {
    if (lang === 'en') {
        localStorage.setItem('lang', 'ru');
        lang = 'ru';
    } else {
        localStorage.setItem('lang', 'en');
        lang = 'en';
    }
    photoTagsLang();
    todoListLang();
    switchLang();
    getWeather();
    getQuotes();
    buttonLang.textContent = lang.toUpperCase();
    document.querySelector('.copiwrite').textContent = arrLang['copiwrite'][lang];
    document.querySelector('.name').placeholder = arrLang['entername'][lang];
    document.querySelector('.city').placeholder = arrLang['entersity'][lang];
    document.querySelector('.settings-application-language').textContent = arrLang['applicationlanguage'][lang];
    languageEn.textContent = arrLang['english'][lang];
    languageRu.textContent = arrLang['russian'][lang];
    document.querySelector('.settings-source-photo').textContent = arrLang['sourcephoto'][lang];

    if (city.value === 'Minsk' && lang === 'ru') {
        city.value = 'Минск';
    } else if(city.value === 'Минск' && lang === 'en') {
        city.value = 'Minsk';
    }

    languageEn.classList.toggle('active-menu-items');
    languageRu.classList.toggle('active-menu-items');
}
buttonLang.addEventListener('click', changeLang);
buttonLang.textContent = lang.toUpperCase();
document.querySelector('.name').placeholder = arrLang['entername'][lang];


// copiwrite

document.querySelector('.copiwrite').textContent = arrLang['copiwrite'][lang];


// Settings

const buttonSettings = document.querySelector('.button-settings');
const modal = document.querySelector('.settings-modal');

function settingsModal(){
    buttonSettings.classList.toggle('button-active');
    modal.classList.toggle('settings-active');
}
buttonSettings.addEventListener('click', settingsModal);

function settingsLanguage(){
    changeLang();
}
languageEn.addEventListener('click', settingsLanguage);
languageRu.addEventListener('click', settingsLanguage);


// switch block

const arrFieldBlock = ['time', 'date', 'greeting', 'audio', 'playlist', 'weather', 'quote', 'links', 'language', 'map', 'todolist'];
let arrFildsSwitch = !localStorage.getItem('fieldswitch') ? [true, true, true, true, true, true, true, true, true,true,true] : localStorage.getItem('fieldswitch').split(',');
localStorage.setItem('fieldswitch', arrFildsSwitch);

function switchLang() {
    document.querySelector('.settings-hide-show').textContent = arrLang['hideshowswitch'][lang];
    document.querySelector('.switch-time').textContent = arrLang['timeswitch'][lang];
    document.querySelector('.switch-date').textContent = arrLang['dateswitch'][lang];
    document.querySelector('.switch-greeting').textContent = arrLang['greetingswitch'][lang];
    document.querySelector('.switch-audio').textContent = arrLang['audioswitch'][lang];
    document.querySelector('.switch-playlist').textContent = arrLang['playlistswitch'][lang];
    document.querySelector('.switch-weather').textContent = arrLang['weatherswitch'][lang];
    document.querySelector('.switch-quote').textContent = arrLang['quoteswitch'][lang];
    document.querySelector('.switch-links').textContent = arrLang['linksswitch'][lang];
    document.querySelector('.switch-language').textContent = arrLang['languageswitch'][lang];
    document.querySelector('.switch-map').textContent = arrLang['mapswitch'][lang];
    document.querySelector('.switch-todolist').textContent = arrLang['todolistswitch'][lang];
}
switchLang();

function switchHideShow() {
    const dataParam = arrFieldBlock.indexOf(this.getAttribute("data-param"));
    arrFildsSwitch[dataParam] = arrFildsSwitch[dataParam] === 'true' || arrFildsSwitch[dataParam] === true ? false : true;

    localStorage.setItem('fieldswitch', arrFildsSwitch);
    fildsSwitch();
}

document.querySelectorAll('.settings-switch').forEach(item => {
    item.addEventListener('click', switchHideShow);
});

function fildsSwitch() {
    const settingsSwitch = document.querySelectorAll('.settings-switch');
    arrFildsSwitch = localStorage.getItem('fieldswitch').split(',');

    settingsSwitch.forEach(item => {
        item.classList.remove('active-menu-items');
    });
    arrFildsSwitch.forEach( (item, index) => {
        if (item === 'false' || item === false) {
            document.querySelector(`.switch-${arrFieldBlock[index]}`).classList.add('active-menu-items');
            document.querySelector(`.switch-element-${arrFieldBlock[index]}`).classList.add('block-hiden');
        } else {
            document.querySelector(`.switch-element-${arrFieldBlock[index]}`).classList.remove('block-hiden');
        }
    });
}
fildsSwitch();
