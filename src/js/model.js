import * as sounds from './audioLibrary.js';

export const setAudioProperties = function () {
  Object.entries(state.characters).forEach(entry => {
    entry[1].audio = sounds[`${entry[1].romaji}Sound`];
  });
};

export const state = {
  theme: '',
  script: 'hiragana',
  characters: {
    a: {
      romaji: 'a',
      hiragana: 'あ',
      katakana: 'ア',
      pronunciation: `is pronounced like "a" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">a</span>r"`,
    },
    i: {
      romaji: 'i',
      hiragana: 'い',
      katakana: 'イ',
      pronunciation: `is pronounced like "ee" in "gr<span class="mx-1 text-sky-600 dark:text-sky-400">ee</span>n"`,
    },
    u: {
      romaji: 'u',
      hiragana: 'う',
      katakana: 'ウ',
      pronunciation: `is pronounced like "oo" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">oo</span>kie"`,
    },
    e: {
      romaji: 'e',
      hiragana: 'え',
      katakana: 'エ',
      pronunciation: `is pronounced like "e" in "p<span class="mx-1 text-sky-600 dark:text-sky-400">e</span>n"`,
    },
    o: {
      romaji: 'o',
      hiragana: 'お',
      katakana: 'オ',
      pronunciation: `is pronounced like "o" in "t<span class="mx-1 text-sky-600 dark:text-sky-400">o</span>p"`,
    },
    ka: {
      romaji: 'ka',
      hiragana: 'か',
      katakana: 'カ',
      pronunciation: `is like "k" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ka</span>"`,
      get variations() {
        return [state.characters.ga];
      },
    },
    ki: {
      romaji: 'ki',
      hiragana: 'き',
      katakana: 'キ',
      pronunciation: `is like "k" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ki</span>"`,
      get variations() {
        return [state.characters.gi];
      },
    },
    ku: {
      romaji: 'ku',
      hiragana: 'く',
      katakana: 'ク',
      pronunciation: `is like "k" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ku</span>"`,
      get variations() {
        return [state.characters.gu];
      },
    },
    ke: {
      romaji: 'ke',
      hiragana: 'け',
      katakana: 'ケ',
      pronunciation: `is like "k" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ke</span>"`,
      get variations() {
        return [state.characters.ge];
      },
    },
    ko: {
      romaji: 'ko',
      hiragana: 'こ',
      katakana: 'コ',
      pronunciation: `is like "k" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ko</span>"`,
      get variations() {
        return [state.characters.go];
      },
    },
    sa: {
      romaji: 'sa',
      hiragana: 'さ',
      katakana: 'サ',
      pronunciation: `is like "s" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">sa</span>"`,
      get variations() {
        return [state.characters.za];
      },
    },
    shi: {
      romaji: 'shi',
      hiragana: 'し',
      katakana: 'シ',
      pronunciation: `is like "sh" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">shi</span>"`,
      get variations() {
        return [state.characters.ji];
      },
    },
    su: {
      romaji: 'su',
      hiragana: 'す',
      katakana: 'ス',
      pronunciation: `is like "s" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">su</span>"`,
      get variations() {
        return [state.characters.zu];
      },
    },
    se: {
      romaji: 'se',
      hiragana: 'せ',
      katakana: 'セ',
      pronunciation: `is like "s" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">se</span>"`,
      get variations() {
        return [state.characters.ze];
      },
    },
    so: {
      romaji: 'so',
      hiragana: 'そ',
      katakana: 'ソ',
      pronunciation: `is like "s" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">so</span>"`,
      get variations() {
        return [state.characters.zo];
      },
    },
    ta: {
      romaji: 'ta',
      hiragana: 'た',
      katakana: 'タ',
      pronunciation: `is like "t" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ta</span>"`,
      get variations() {
        return [state.characters.da];
      },
    },
    chi: {
      romaji: 'chi',
      hiragana: 'ち',
      katakana: 'チ',
      pronunciation: `is like "ch" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">chi</span>"`,
      get variations() {
        return [state.characters.di];
      },
    },
    tsu: {
      romaji: 'tsu',
      hiragana: 'つ',
      katakana: 'ツ',
      pronunciation: `is like "ts" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">tsu</span>"`,
      get variations() {
        return [state.characters.du];
      },
    },
    te: {
      romaji: 'te',
      hiragana: 'て',
      katakana: 'テ',
      pronunciation: `is like "t" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">te</span>"`,
      get variations() {
        return [state.characters.de];
      },
    },
    to: {
      romaji: 'to',
      hiragana: 'と',
      katakana: 'ト',
      pronunciation: `is like "t" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">to</span>"`,
      get variations() {
        return [state.characters.do];
      },
    },
    na: {
      romaji: 'na',
      hiragana: 'な',
      katakana: 'ナ',
      pronunciation: `is like "n" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">na</span>"`,
    },
    ni: {
      romaji: 'ni',
      hiragana: 'に',
      katakana: 'ニ',
      pronunciation: `is like "n" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ni</span>"`,
    },
    nu: {
      romaji: 'nu',
      hiragana: 'ぬ',
      katakana: 'ヌ',
      pronunciation: `is like "n" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">nu</span>"`,
    },
    ne: {
      romaji: 'ne',
      hiragana: 'ね',
      katakana: 'ネ',
      pronunciation: `is like "n" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ne</span>"`,
    },
    no: {
      romaji: 'no',
      hiragana: 'の',
      katakana: 'ノ',
      pronunciation: `is like "n" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">no</span>"`,
    },
    ha: {
      romaji: 'ha',
      hiragana: 'は',
      katakana: 'ハ',
      pronunciation: `is like "h" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ha</span>"`,
      get variations() {
        return [state.characters.ba, state.characters.pa];
      },
    },
    hi: {
      romaji: 'hi',
      hiragana: 'ひ',
      katakana: 'ヒ',
      pronunciation: `is like "h" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">hi</span>"`,
      get variations() {
        return [state.characters.bi, state.characters.pi];
      },
    },
    fu: {
      romaji: 'fu',
      hiragana: 'ふ',
      katakana: 'フ',
      pronunciation: `is like "f/h" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">fu/hu</span>"`,
      get variations() {
        return [state.characters.bu, state.characters.pu];
      },
    },
    he: {
      romaji: 'he',
      hiragana: 'へ',
      katakana: 'へ',
      pronunciation: `is like "h" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">he</span>"`,
      get variations() {
        return [state.characters.be, state.characters.pe];
      },
    },
    ho: {
      romaji: 'ho',
      hiragana: 'ほ',
      katakana: 'ホ',
      pronunciation: `is like "h" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ho</span>"`,
      get variations() {
        return [state.characters.bo, state.characters.po];
      },
    },
    ma: {
      romaji: 'ma',
      hiragana: 'ま',
      katakana: 'マ',
      pronunciation: `is like "m" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ma</span>"`,
    },
    mi: {
      romaji: 'mi',
      hiragana: 'み',
      katakana: 'ミ',
      pronunciation: `is like "m" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mi</span>"`,
    },
    mu: {
      romaji: 'mu',
      hiragana: 'む',
      katakana: 'ム',
      pronunciation: `is like "m" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mu</span>"`,
    },
    me: {
      romaji: 'me',
      hiragana: 'め',
      katakana: 'メ',
      pronunciation: `is like "m" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">me</span>"`,
    },
    mo: {
      romaji: 'mo',
      hiragana: 'も',
      katakana: 'モ',
      pronunciation: `is like "m" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mo</span>"`,
    },
    ya: {
      romaji: 'ya',
      hiragana: 'や',
      katakana: 'ヤ',
      pronunciation: `is like "Y" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ya</span>"`,
    },
    yu: {
      romaji: 'yu',
      hiragana: 'ゆ',
      katakana: 'ユ',
      pronunciation: `is like "Y" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yu</span>"`,
    },
    yo: {
      romaji: 'yo',
      hiragana: 'よ',
      katakana: 'ヨ',
      pronunciation: `is like "Y" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yo</span>"`,
    },
    ra: {
      romaji: 'ra',
      hiragana: 'ら',
      katakana: 'ラ',
      pronunciation: `is like "r" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ra</span>"`,
    },
    ri: {
      romaji: 'ri',
      hiragana: 'り',
      katakana: 'リ',
      pronunciation: `is like "r" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ri</span>"`,
    },
    ru: {
      romaji: 'ru',
      hiragana: 'る',
      katakana: 'ル',
      pronunciation: `is like "r" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ru</span>"`,
    },
    re: {
      romaji: 're',
      hiragana: 'れ',
      katakana: 'レ',
      pronunciation: `is like "r" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">re</span>"`,
    },
    ro: {
      romaji: 'ro',
      hiragana: 'ろ',
      katakana: 'ロ',
      pronunciation: `is like "r" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ro</span>"`,
    },
    wa: {
      romaji: 'wa',
      hiragana: 'わ',
      katakana: 'ワ',
      pronunciation: `is simply "w" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wa</span>"`,
    },
    wo: {
      romaji: 'wo',
      hiragana: 'を',
      katakana: 'ヲ',
      pronunciation: `is simply "w" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wo</span>"`,
    },
    n: {
      romaji: 'n',
      hiragana: 'ん',
      katakana: 'ン',
      pronunciation: `is simply the "<span class="mx-1 text-sky-600 dark:text-sky-400">n</span>" sound`,
    },
    ga: {
      romaji: 'ga',
      hiragana: 'が',
      katakana: 'ガ',
      pronunciation: `is like "g" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ga</span>"`,
      get variations() {
        return [state.characters.ka];
      },
    },
    gi: {
      romaji: 'gi',
      hiragana: 'ぎ',
      katakana: 'ギ',
      pronunciation: `is like "g" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gi</span>"`,
      get variations() {
        return [state.characters.ki];
      },
    },
    gu: {
      romaji: 'gu',
      hiragana: 'ぐ',
      katakana: 'グ',
      pronunciation: `is like "g" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gu</span>"`,
      get variations() {
        return [state.characters.ku];
      },
    },
    ge: {
      romaji: 'ge',
      hiragana: 'げ',
      katakana: 'ゲ',
      pronunciation: `is like "g" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ge</span>"`,
      get variations() {
        return [state.characters.ke];
      },
    },
    go: {
      romaji: 'go',
      hiragana: 'ご',
      katakana: 'ゴ',
      pronunciation: `is like "g" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">go</span>"`,
      get variations() {
        return [state.characters.ko];
      },
    },
    za: {
      romaji: 'za',
      hiragana: 'ざ',
      katakana: 'ザ',
      pronunciation: `is like "z" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">za</span>"`,
      get variations() {
        return [state.characters.sa];
      },
    },
    ji: {
      romaji: 'ji',
      hiragana: 'じ',
      katakana: 'ジ',
      pronunciation: `is like "j" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ji</span>"`,
      get variations() {
        return [state.characters.shi];
      },
    },
    zu: {
      romaji: 'zu',
      hiragana: 'ず',
      katakana: 'ズ',
      pronunciation: `is like "z" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zu</span>"`,
      get variations() {
        return [state.characters.su];
      },
    },
    ze: {
      romaji: 'ze',
      hiragana: 'ぜ',
      katakana: 'ゼ',
      pronunciation: `is like "z" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ze</span>"`,
      get variations() {
        return [state.characters.se];
      },
    },
    zo: {
      romaji: 'zo',
      hiragana: 'ぞ',
      katakana: 'ゾ',
      pronunciation: `is like "z" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zo</span>"`,
      get variations() {
        return [state.characters.so];
      },
    },
    da: {
      romaji: 'da',
      hiragana: 'だ',
      katakana: 'ダ',
      pronunciation: `is like "d" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">da</span>"`,
      get variations() {
        return [state.characters.ta];
      },
    },
    di: {
      di: 'di',
      romaji: 'ji',
      hiragana: 'ぢ',
      katakana: 'ヂ',
      pronunciation: `sounds like "j" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ji</span>"`,
      get variations() {
        return [state.characters.chi];
      },
    },
    du: {
      du: 'du',
      romaji: 'zu',
      hiragana: 'づ',
      katakana: 'ヅ',
      pronunciation: `sounds like "z" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zu</span>"`,
      get variations() {
        return [state.characters.tsu];
      },
    },
    de: {
      romaji: 'de',
      hiragana: 'で',
      katakana: 'デ',
      pronunciation: `is like "d" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">de</span>"`,
      get variations() {
        return [state.characters.te];
      },
    },
    do: {
      romaji: 'do',
      hiragana: 'ど',
      katakana: 'ド',
      pronunciation: `is like "d" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">do</span>"`,
      get variations() {
        return [state.characters.to];
      },
    },
    ba: {
      romaji: 'ba',
      hiragana: 'ば',
      katakana: 'バ',
      pronunciation: `is like "b" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ba</span>"`,
      get variations() {
        return [state.characters.ha, state.characters.pa];
      },
    },
    bi: {
      romaji: 'bi',
      hiragana: 'び',
      katakana: 'ビ',
      pronunciation: `is like "b" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bi</span>"`,
      get variations() {
        return [state.characters.hi, state.characters.pi];
      },
    },
    bu: {
      romaji: 'bu',
      hiragana: 'ぶ',
      katakana: 'ブ',
      pronunciation: `is like "b" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bu</span>"`,
      get variations() {
        return [state.characters.fu, state.characters.pu];
      },
    },
    be: {
      romaji: 'be',
      hiragana: 'べ',
      katakana: 'べ',
      pronunciation: `is like "b" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">be</span>"`,
      get variations() {
        return [state.characters.he, state.characters.pe];
      },
    },
    bo: {
      romaji: 'bo',
      hiragana: 'ぼ',
      katakana: 'ボ',
      pronunciation: `is like "b" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bo</span>"`,
      get variations() {
        return [state.characters.ho, state.characters.po];
      },
    },
    pa: {
      romaji: 'pa',
      hiragana: 'ぱ',
      katakana: 'パ',
      pronunciation: `is like "p" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pa</span>"`,
      get variations() {
        return [state.characters.ha, state.characters.ba];
      },
    },
    pi: {
      romaji: 'pi',
      hiragana: 'ぴ',
      katakana: 'ピ',
      pronunciation: `is like "p" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pi</span>"`,
      get variations() {
        return [state.characters.hi, state.characters.bi];
      },
    },
    pu: {
      romaji: 'pu',
      hiragana: 'ぷ',
      katakana: 'プ',
      pronunciation: `is like "p" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pu</span>"`,
      get variations() {
        return [state.characters.fu, state.characters.bu];
      },
    },
    pe: {
      romaji: 'pe',
      hiragana: 'ぺ',
      katakana: 'ぺ',
      pronunciation: `is like "p" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pe</span>"`,
      get variations() {
        return [state.characters.he, state.characters.be];
      },
    },
    po: {
      romaji: 'po',
      hiragana: 'ぽ',
      katakana: 'ポ',
      pronunciation: `is like "p" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">po</span>"`,
      get variations() {
        return [state.characters.ho, state.characters.bo];
      },
    },
  },
  curLearningChar: undefined,
};

export const setThemeOnLoad = function () {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    state.theme = 'dark';
  } else {
    state.theme = 'light';
  }
};

export const setScriptOnLoad = function () {
  if (localStorage.script === 'katakana') {
    state.script = 'katakana';
  }
  if (!('script' in localStorage) || localStorage.script === 'hiragana') {
    state.script = 'hiragana';
    localStorage.script = 'hiragana';
  }
};
