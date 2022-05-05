export const state = {
  theme: '',
  script: 'hiragana',
  characters: {
    a: {
      hiragana: 'あ',
      katakana: 'ア',
      pronunciation: `is pronounced like "a" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">a</span>r"`,
      audio: 'kanasound-a.mp3',
    },
    i: {
      hiragana: 'い',
      katakana: 'イ',
      pronunciation: `is pronounced like "ee" in "gr<span class="mx-1 text-sky-600 dark:text-sky-400">ee</span>n"`,
      audio: 'kanasound-i.mp3',
    },
    u: {
      hiragana: 'う',
      katakana: 'ウ',
      pronunciation: `is pronounced like "oo" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">oo</span>kie"`,
      audio: 'kanasound-u.mp3',
    },
    e: {
      hiragana: 'え',
      katakana: 'エ',
      pronunciation: `is pronounced like "e" in "p<span class="mx-1 text-sky-600 dark:text-sky-400">e</span>n"`,
      audio: 'kanasound-e.mp3',
    },
    o: {
      hiragana: 'お',
      katakana: 'オ',
      pronunciation: `is pronounced like "o" in "<span class="mx-1 text-sky-600 dark:text-sky-400">o</span>live"`,
      audio: 'kanasound-o.mp3',
    },
    ka: {
      hiragana: 'か',
      katakana: 'カ',
      pronunciation: `is like "k" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ka</span>"`,
      audio: 'kanasound-ka.mp3',
      get variations() {
        return [state.characters.ga];
      },
    },
    ki: {
      hiragana: 'き',
      katakana: 'キ',
      pronunciation: `is like "k" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ki</span>"`,
      audio: 'kanasound-ki.mp3',
      get variations() {
        return [state.characters.gi];
      },
    },
    ku: {
      hiragana: 'く',
      katakana: 'ク',
      pronunciation: `is like "k" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ku</span>"`,
      audio: 'kanasound-ku.mp3',
      get variations() {
        return [state.characters.gu];
      },
    },
    ke: {
      hiragana: 'け',
      katakana: 'ケ',
      pronunciation: `is like "k" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ke</span>"`,
      audio: 'kanasound-ke.mp3',
      get variations() {
        return [state.characters.ge];
      },
    },
    ko: {
      hiragana: 'こ',
      katakana: 'コ',
      pronunciation: `is like "k" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ko</span>"`,
      audio: 'kanasound-ko.mp3',
      get variations() {
        return [state.characters.go];
      },
    },
    sa: {
      hiragana: 'さ',
      katakana: 'サ',
      pronunciation: `is like "s" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">sa</span>"`,
      audio: 'kanasound-sa.mp3',
      get variations() {
        return [state.characters.za];
      },
    },
    shi: {
      hiragana: 'し',
      katakana: 'シ',
      pronunciation: `is like "sh" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">shi</span>"`,
      audio: 'kanasound-shi.mp3',
      get variations() {
        return [state.characters.ji];
      },
    },
    su: {
      hiragana: 'す',
      katakana: 'ス',
      pronunciation: `is like "s" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">su</span>"`,
      audio: 'kanasound-su.mp3',
      get variations() {
        return [state.characters.zu];
      },
    },
    se: {
      hiragana: 'せ',
      katakana: 'セ',
      pronunciation: `is like "s" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">se</span>"`,
      audio: 'kanasound-se.mp3',
      get variations() {
        return [state.characters.ze];
      },
    },
    so: {
      hiragana: 'そ',
      katakana: 'ソ',
      pronunciation: `is like "s" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">so</span>"`,
      audio: 'kanasound-so.mp3',
      get variations() {
        return [state.characters.zo];
      },
    },
    ta: {
      hiragana: 'た',
      katakana: 'タ',
      pronunciation: `is like "t" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ta</span>"`,
      audio: 'kanasound-ta.mp3',
      get variations() {
        return [state.characters.da];
      },
    },
    chi: {
      hiragana: 'ち',
      katakana: 'チ',
      pronunciation: `is like "ch" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">chi</span>"`,
      audio: 'kanasound-chi.mp3',
      get variations() {
        return [state.characters.di];
      },
    },
    tsu: {
      hiragana: 'つ',
      katakana: 'ツ',
      pronunciation: `is like "ts" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">tsu</span>"`,
      audio: 'kanasound-tu.mp3',
      get variations() {
        return [state.characters.du];
      },
    },
    te: {
      hiragana: 'て',
      katakana: 'テ',
      pronunciation: `is like "t" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">te</span>"`,
      audio: 'kanasound-te.mp3',
      get variations() {
        return [state.characters.de];
      },
    },
    to: {
      hiragana: 'と',
      katakana: 'ト',
      pronunciation: `is like "t" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">to</span>"`,
      audio: 'kanasound-to.mp3',
      get variations() {
        return [state.characters.do];
      },
    },
    na: {
      hiragana: 'な',
      katakana: 'ナ',
      pronunciation: `is like "n" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">na</span>"`,
      audio: 'kanasound-na.mp3',
    },
    ni: {
      hiragana: 'に',
      katakana: 'ニ',
      pronunciation: `is like "n" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ni</span>"`,
      audio: 'kanasound-ni.mp3',
    },
    nu: {
      hiragana: 'ぬ',
      katakana: 'ヌ',
      pronunciation: `is like "n" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">nu</span>"`,
      audio: 'kanasound-nu.mp3',
    },
    ne: {
      hiragana: 'ね',
      katakana: 'ネ',
      pronunciation: `is like "n" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ne</span>"`,
      audio: 'kanasound-ne.mp3',
    },
    no: {
      hiragana: 'の',
      katakana: 'ノ',
      pronunciation: `is like "n" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">no</span>"`,
      audio: 'kanasound-no.mp3',
    },
    ha: {
      hiragana: 'は',
      katakana: 'ハ',
      pronunciation: `is like "h" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ha</span>"`,
      audio: 'kanasound-ha.mp3',
      get variations() {
        return [state.characters.ba, state.characters.pa];
      },
    },
    hi: {
      hiragana: 'ひ',
      katakana: 'ヒ',
      pronunciation: `is like "h" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">hi</span>"`,
      audio: 'kanasound-hi.mp3',
      get variations() {
        return [state.characters.bi, state.characters.pi];
      },
    },
    fu: {
      hiragana: 'ふ',
      katakana: 'フ',
      pronunciation: `is like "f/h" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">fu/hu</span>"`,
      audio: 'kanasound-fu.mp3',
      get variations() {
        return [state.characters.bu, state.characters.pu];
      },
    },
    he: {
      hiragana: 'へ',
      katakana: 'へ',
      pronunciation: `is like "h" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">he</span>"`,
      audio: 'kanasound-he.mp3',
      get variations() {
        return [state.characters.be, state.characters.pe];
      },
    },
    ho: {
      hiragana: 'ほ',
      katakana: 'ホ',
      pronunciation: `is like "h" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ho</span>"`,
      audio: 'kanasound-ho.mp3',
      get variations() {
        return [state.characters.bo, state.characters.po];
      },
    },
    ma: {
      hiragana: 'ま',
      katakana: 'マ',
      pronunciation: `is like "m" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ma</span>"`,
      audio: 'kanasound-ma.mp3',
    },
    mi: {
      hiragana: 'み',
      katakana: 'ミ',
      pronunciation: `is like "m" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mi</span>"`,
      audio: 'kanasound-mi.mp3',
    },
    mu: {
      hiragana: 'む',
      katakana: 'ム',
      pronunciation: `is like "m" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mu</span>"`,
      audio: 'kanasound-mu.mp3',
    },
    me: {
      hiragana: 'め',
      katakana: 'メ',
      pronunciation: `is like "m" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">me</span>"`,
      audio: 'kanasound-me.mp3',
    },
    mo: {
      hiragana: 'も',
      katakana: 'モ',
      pronunciation: `is like "m" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mo</span>"`,
      audio: 'kanasound-mo.mp3',
    },
    ya: {
      hiragana: 'や',
      katakana: 'ヤ',
      pronunciation: `is like "Y" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ya</span>"`,
      audio: 'kanasound-ya.mp3',
    },
    yu: {
      hiragana: 'ゆ',
      katakana: 'ユ',
      pronunciation: `is like "Y" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yu</span>"`,
      audio: 'kanasound-yu.mp3',
    },
    yo: {
      hiragana: 'よ',
      katakana: 'ヨ',
      pronunciation: `is like "Y" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yo</span>"`,
      audio: 'kanasound-yo.mp3',
    },
    ra: {
      hiragana: 'ら',
      katakana: 'ラ',
      pronunciation: `is like "r" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ra</span>"`,
      audio: 'kanasound-ra.mp3',
    },
    ri: {
      hiragana: 'り',
      katakana: 'リ',
      pronunciation: `is like "r" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ri</span>"`,
      audio: 'kanasound-ri.mp3',
    },
    ru: {
      hiragana: 'る',
      katakana: 'ル',
      pronunciation: `is like "r" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ru</span>"`,
      audio: 'kanasound-ru.mp3',
    },
    re: {
      hiragana: 'れ',
      katakana: 'レ',
      pronunciation: `is like "r" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">re</span>"`,
      audio: 'kanasound-re.mp3',
    },
    ro: {
      hiragana: 'ろ',
      katakana: 'ロ',
      pronunciation: `is like "r" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ro</span>"`,
      audio: 'kanasound-ro.mp3',
    },
    wa: {
      hiragana: 'わ',
      katakana: 'ワ',
      pronunciation: `is simply "w" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wa</span>"`,
      audio: 'kanasound-wa.mp3',
    },
    wo: {
      hiragana: 'を',
      katakana: 'ヲ',
      pronunciation: `is simply "w" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wo</span>"`,
      audio: 'kanasound-wo.mp3',
    },
    n: {
      hiragana: 'ん',
      katakana: 'ン',
      pronunciation: `is simply the "<span class="mx-1 text-sky-600 dark:text-sky-400">n</span> sound"`,
      audio: 'kanasound-n.mp3',
    },
    ga: {
      hiragana: 'が',
      katakana: 'ガ',
      pronunciation: `is like "g" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ga</span>"`,
      audio: 'kanasound-ga.mp3',
    },
    gi: {
      hiragana: 'ぎ',
      katakana: 'ギ',
      pronunciation: `is like "g" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gi</span>"`,
      audio: 'kanasound-gi.mp3',
    },
    gu: {
      hiragana: 'ぐ',
      katakana: 'グ',
      pronunciation: `is like "g" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gu</span>"`,
      audio: 'kanasound-gu.mp3',
    },
    ge: {
      hiragana: 'げ',
      katakana: 'ゲ',
      pronunciation: `is like "g" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ge</span>"`,
      audio: 'kanasound-ge.mp3',
    },
    go: {
      hiragana: 'ご',
      katakana: 'ゴ',
      pronunciation: `is like "g" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">go</span>"`,
      audio: 'kanasound-go.mp3',
    },
    za: {
      hiragana: 'ざ',
      katakana: 'ザ',
      pronunciation: `is like "z" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">za</span>"`,
      audio: 'kanasound-za.mp3',
    },
    ji: {
      hiragana: 'じ',
      katakana: 'ジ',
      pronunciation: `is like "j" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ji</span>"`,
      audio: 'kanasound-ji.mp3',
    },
    zu: {
      hiragana: 'ず',
      katakana: 'ズ',
      pronunciation: `is like "z" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zu</span>"`,
      audio: 'kanasound-zu.mp3',
    },
    ze: {
      hiragana: 'ぜ',
      katakana: 'ゼ',
      pronunciation: `is like "z" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ze</span>"`,
      audio: 'kanasound-ze.mp3',
    },
    zo: {
      hiragana: 'ぞ',
      katakana: 'ゾ',
      pronunciation: `is like "z" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zo</span>"`,
      audio: 'kanasound-zo.mp3',
    },
    da: {
      hiragana: 'だ',
      katakana: 'ダ',
      pronunciation: `is like "t" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ta</span>"`,
      audio: 'kanasound-da.mp3',
    },
    di: {
      hiragana: 'ぢ',
      katakana: 'ヂ',
      pronunciation: `is like "ch" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">chi</span>"`,
      audio: 'kanasound-di.mp3',
    },
    du: {
      hiragana: 'づ',
      katakana: 'ヅ',
      pronunciation: `is like "ts" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">tsu</span>"`,
      audio: 'kanasound-du.mp3',
    },
    de: {
      hiragana: 'で',
      katakana: 'デ',
      pronunciation: `is like "t" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">te</span>"`,
      audio: 'kanasound-de.mp3',
    },
    do: {
      hiragana: 'ど',
      katakana: 'ド',
      pronunciation: `is like "t" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">to</span>"`,
      audio: 'kanasound-do.mp3',
    },
    ba: {
      hiragana: 'ば',
      katakana: 'バ',
      pronunciation: `is like "b" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ba</span>"`,
      audio: 'kanasound-ba.mp3',
    },
    bi: {
      hiragana: 'び',
      katakana: 'ビ',
      pronunciation: `is like "b" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bi</span>"`,
      audio: 'kanasound-bi.mp3',
    },
    bu: {
      hiragana: 'ぶ',
      katakana: 'ブ',
      pronunciation: `is like "b" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bu</span>"`,
      audio: 'kanasound-bu.mp3',
    },
    be: {
      hiragana: 'べ',
      katakana: 'べ',
      pronunciation: `is like "b" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">be</span>"`,
      audio: 'kanasound-be.mp3',
    },
    bo: {
      hiragana: 'ぼ',
      katakana: 'ボ',
      pronunciation: `is like "b" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bo</span>"`,
      audio: 'kanasound-bo.mp3',
    },
    pa: {
      hiragana: 'ぱ',
      katakana: 'パ',
      pronunciation: `is like "p" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pa</span>"`,
      audio: 'kanasound-pa.mp3',
    },
    pi: {
      hiragana: 'ぴ',
      katakana: 'ピ',
      pronunciation: `is like "p" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pi</span>"`,
      audio: 'kanasound-pi.mp3',
    },
    pu: {
      hiragana: 'ぷ',
      katakana: 'プ',
      pronunciation: `is like "p" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pu</span>"`,
      audio: 'kanasound-pu.mp3',
    },
    pe: {
      hiragana: 'ぺ',
      katakana: 'ぺ',
      pronunciation: `is like "p" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pe</span>"`,
      audio: 'kanasound-pe.mp3',
    },
    po: {
      hiragana: 'ぽ',
      katakana: 'ポ',
      pronunciation: `is like "p" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">po</span>"`,
      audio: 'kanasound-po.mp3',
    },
  },
};

export const setThemeOnLoad = function () {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    state.theme = 'dark';
    // localStorage.setItem('theme', 'dark');
  } else {
    state.theme = 'light';
    // localStorage.setItem('theme', 'light');
  }
};
