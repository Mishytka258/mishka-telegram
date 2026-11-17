const view = document.getElementById('view');
const home = view.innerHTML;
const tabs = {
  home: home,
  search: `<section class="welcome"><div><p class="eyebrow">КАТАЛОГ</p><h2>Найти раскраску</h2><p class="muted small">По названию, персонажу или теме.</p></div><div class="sparkle">⌕</div></section><div class="empty-state"><strong>Поиск по твоей библиотеке</strong>Когда добавим реальные книги и страницы, здесь появится поиск по персонажам, темам и содержимому раскрасок.</div>`,
  palette: `<section class="welcome"><div><p class="eyebrow">ТВОИ ЦВЕТА</p><h2>Подбор палитры</h2><p class="muted small">Символы Hachette и похожие маркеры.</p></div><div class="sparkle">◈</div></section><div class="empty-state"><strong>Твоя палитра появится здесь</strong>Добавим каталоги маркеров и эталонные цвета символов. Подбор будет показывать ближайшие оттенки и ориентировочное сходство.</div>`,
  stats: `<section class="welcome"><div><p class="eyebrow">ТВОЙ ПРОГРЕСС</p><h2>Статистика</h2><p class="muted small">Творческие месяцы и готовые работы.</p></div><div class="sparkle">▥</div></section><div class="empty-state"><strong>Здесь будет твоя история</strong>Календарь активности, количество готовых картинок, время раскрашивания и галерея работ за месяц.</div>`,
  profile: `<section class="welcome"><div><p class="eyebrow">ЛИЧНОЕ ПРОСТРАНСТВО</p><h2>Профиль</h2><p class="muted small">Настройки Mishka.</p></div><div class="sparkle">◉</div></section><div class="empty-state"><strong>Твоя коллекция</strong>Здесь будут настройки приложения, твои наборы маркеров и параметры хранения данных.</div>`
};
document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b === btn));
  view.innerHTML = tabs[btn.dataset.tab];
}));
document.addEventListener('click', e => {
  if (e.target.closest('[data-action="add-book"]')) {
    alert('Каталог книг добавим следующим этапом — сначала подготовим твои реальные серии и тома.');
  }
});
