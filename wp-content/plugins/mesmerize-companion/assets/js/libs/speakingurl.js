(function (root) {
    'use strict';

    /**
     * charMap
     * @type {Object}
     */
    var charMap = {

        // latin
        'ГЂ': 'A',
        'ГЃ': 'A',
        'Г‚': 'A',
        'Гѓ': 'A',
        'Г„': 'Ae',
        'Г…': 'A',
        'Г†': 'AE',
        'Г‡': 'C',
        'Г€': 'E',
        'Г‰': 'E',
        'ГЉ': 'E',
        'Г‹': 'E',
        'ГЊ': 'I',
        'ГЌ': 'I',
        'ГЋ': 'I',
        'ГЏ': 'I',
        'Гђ': 'D',
        'Г‘': 'N',
        'Г’': 'O',
        'Г“': 'O',
        'Г”': 'O',
        'Г•': 'O',
        'Г–': 'Oe',
        'Еђ': 'O',
        'Г': 'O',
        'Г™': 'U',
        'Гљ': 'U',
        'Г›': 'U',
        'Гњ': 'Ue',
        'Е°': 'U',
        'Гќ': 'Y',
        'Гћ': 'TH',
        'Гџ': 'ss',
        'Г ': 'a',
        'ГЎ': 'a',
        'Гў': 'a',
        'ГЈ': 'a',
        'Г¤': 'ae',
        'ГҐ': 'a',
        'Г¦': 'ae',
        'Г§': 'c',
        'ГЁ': 'e',
        'Г©': 'e',
        'ГЄ': 'e',
        'Г«': 'e',
        'Г¬': 'i',
        'Г­': 'i',
        'Г®': 'i',
        'ГЇ': 'i',
        'Г°': 'd',
        'Г±': 'n',
        'ГІ': 'o',
        'Гі': 'o',
        'Гґ': 'o',
        'Гµ': 'o',
        'Г¶': 'oe',
        'Е‘': 'o',
        'Гё': 'o',
        'Г№': 'u',
        'Гє': 'u',
        'Г»': 'u',
        'Гј': 'ue',
        'Е±': 'u',
        'ГЅ': 'y',
        'Гѕ': 'th',
        'Гї': 'y',
        'бєћ': 'SS',

        // language specific

        // Arabic
        'Ш§': 'a',
        'ШЈ': 'a',
        'ШҐ': 'i',
        'Шў': 'aa',
        'Ш¤': 'u',
        'Ш¦': 'e',
        'ШЎ': 'a',
        'ШЁ': 'b',
        'ШЄ': 't',
        'Ш«': 'th',
        'Ш¬': 'j',
        'Ш­': 'h',
        'Ш®': 'kh',
        'ШЇ': 'd',
        'Ш°': 'th',
        'Ш±': 'r',
        'ШІ': 'z',
        'Ші': 's',
        'Шґ': 'sh',
        'Шµ': 's',
        'Ш¶': 'dh',
        'Ш·': 't',
        'Шё': 'z',
        'Ш№': 'a',
        'Шє': 'gh',
        'ЩЃ': 'f',
        'Щ‚': 'q',
        'Щѓ': 'k',
        'Щ„': 'l',
        'Щ…': 'm',
        'Щ†': 'n',
        'Щ‡': 'h',
        'Щ€': 'w',
        'ЩЉ': 'y',
        'Щ‰': 'a',
        'Ш©': 'h',
        'п»»': 'la',
        'п»·': 'laa',
        'п»№': 'lai',
        'п»µ': 'laa',

        // Persian additional characters than Arabic
        'ЪЇ': 'g',
        'Ъ†': 'ch',
        'Щѕ': 'p',
        'Ъ': 'zh',
        'Ъ©': 'k',
        'ЫЊ': 'y',

        // Arabic diactrics
        'ЩЋ': 'a',
        'Щ‹': 'an',
        'Щђ': 'e',
        'ЩЌ': 'en',
        'ЩЏ': 'u',
        'ЩЊ': 'on',
        'Щ’': '',

        // Arabic numbers
        'Щ ': '0',
        'ЩЎ': '1',
        'Щў': '2',
        'ЩЈ': '3',
        'Щ¤': '4',
        'ЩҐ': '5',
        'Щ¦': '6',
        'Щ§': '7',
        'ЩЁ': '8',
        'Щ©': '9',

        // Persian numbers
        'Ы°': '0',
        'Ы±': '1',
        'ЫІ': '2',
        'Ыі': '3',
        'Ыґ': '4',
        'Ыµ': '5',
        'Ы¶': '6',
        'Ы·': '7',
        'Ыё': '8',
        'Ы№': '9',

        // Burmese consonants
        'бЂЂ': 'k',
        'бЂЃ': 'kh',
        'бЂ‚': 'g',
        'бЂѓ': 'ga',
        'бЂ„': 'ng',
        'бЂ…': 's',
        'бЂ†': 'sa',
        'бЂ‡': 'z',
        'бЂ…бЂ»': 'za',
        'бЂЉ': 'ny',
        'бЂ‹': 't',
        'бЂЊ': 'ta',
        'бЂЌ': 'd',
        'бЂЋ': 'da',
        'бЂЏ': 'na',
        'бЂђ': 't',
        'бЂ‘': 'ta',
        'бЂ’': 'd',
        'бЂ“': 'da',
        'бЂ”': 'n',
        'бЂ•': 'p',
        'бЂ–': 'pa',
        'бЂ—': 'b',
        'бЂ': 'ba',
        'бЂ™': 'm',
        'бЂљ': 'y',
        'бЂ›': 'ya',
        'бЂњ': 'l',
        'бЂќ': 'w',
        'бЂћ': 'th',
        'бЂџ': 'h',
        'бЂ ': 'la',
        'бЂЎ': 'a',
        // consonant character combos
        'бЂј': 'y',
        'бЂ»': 'ya',
        'бЂЅ': 'w',
        'бЂјбЂЅ': 'yw',
        'бЂ»бЂЅ': 'ywa',
        'бЂѕ': 'h',
        // independent vowels
        'бЂ§': 'e',
        'бЃЏ': '-e',
        'бЂЈ': 'i',
        'бЂ¤': '-i',
        'бЂ‰': 'u',
        'бЂ¦': '-u',
        'бЂ©': 'aw',
        'бЂћбЂјбЂ±бЂ¬': 'aw',
        'бЂЄ': 'aw',
        // numbers
        'бЃЂ': '0',
        'бЃЃ': '1',
        'бЃ‚': '2',
        'бЃѓ': '3',
        'бЃ„': '4',
        'бЃ…': '5',
        'бЃ†': '6',
        'бЃ‡': '7',
        'бЃ€': '8',
        'бЃ‰': '9',
        // virama and tone marks which are silent in transliteration
        'бЂ№': '',
        'бЂ·': '',
        'бЂё': '',

        // Czech
        'ДЌ': 'c',
        'ДЏ': 'd',
        'Д›': 'e',
        'Е€': 'n',
        'Е™': 'r',
        'ЕЎ': 's',
        'ЕҐ': 't',
        'ЕЇ': 'u',
        'Еѕ': 'z',
        'ДЊ': 'C',
        'ДЋ': 'D',
        'Дљ': 'E',
        'Е‡': 'N',
        'Е': 'R',
        'Е ': 'S',
        'Е¤': 'T',
        'Е®': 'U',
        'ЕЅ': 'Z',

        // Dhivehi
        'ЮЂ': 'h',
        'ЮЃ': 'sh',
        'Ю‚': 'n',
        'Юѓ': 'r',
        'Ю„': 'b',
        'Ю…': 'lh',
        'Ю†': 'k',
        'Ю‡': 'a',
        'Ю€': 'v',
        'Ю‰': 'm',
        'ЮЉ': 'f',
        'Ю‹': 'dh',
        'ЮЊ': 'th',
        'ЮЌ': 'l',
        'ЮЋ': 'g',
        'ЮЏ': 'gn',
        'Юђ': 's',
        'Ю‘': 'd',
        'Ю’': 'z',
        'Ю“': 't',
        'Ю”': 'y',
        'Ю•': 'p',
        'Ю–': 'j',
        'Ю—': 'ch',
        'Ю': 'tt',
        'Ю™': 'hh',
        'Юљ': 'kh',
        'Ю›': 'th',
        'Юњ': 'z',
        'Юќ': 'sh',
        'Юћ': 's',
        'Юџ': 'd',
        'Ю ': 't',
        'ЮЎ': 'z',
        'Юў': 'a',
        'ЮЈ': 'gh',
        'Ю¤': 'q',
        'ЮҐ': 'w',
        'Ю¦': 'a',
        'Ю§': 'aa',
        'ЮЁ': 'i',
        'Ю©': 'ee',
        'ЮЄ': 'u',
        'Ю«': 'oo',
        'Ю¬': 'e',
        'Ю­': 'ey',
        'Ю®': 'o',
        'ЮЇ': 'oa',
        'Ю°': '',

        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        'бѓђ': 'a',
        'бѓ‘': 'b',
        'бѓ’': 'g',
        'бѓ“': 'd',
        'бѓ”': 'e',
        'бѓ•': 'v',
        'бѓ–': 'z',
        'бѓ—': 't',
        'бѓ': 'i',
        'бѓ™': 'k',
        'бѓљ': 'l',
        'бѓ›': 'm',
        'бѓњ': 'n',
        'бѓќ': 'o',
        'бѓћ': 'p',
        'бѓџ': 'zh',
        'бѓ ': 'r',
        'бѓЎ': 's',
        'бѓў': 't',
        'бѓЈ': 'u',
        'бѓ¤': 'p',
        'бѓҐ': 'k',
        'бѓ¦': 'gh',
        'бѓ§': 'q',
        'бѓЁ': 'sh',
        'бѓ©': 'ch',
        'бѓЄ': 'ts',
        'бѓ«': 'dz',
        'бѓ¬': 'ts',
        'бѓ­': 'ch',
        'бѓ®': 'kh',
        'бѓЇ': 'j',
        'бѓ°': 'h',

        // Greek
        'О±': 'a',
        'ОІ': 'v',
        'Оі': 'g',
        'Оґ': 'd',
        'Оµ': 'e',
        'О¶': 'z',
        'О·': 'i',
        'Оё': 'th',
        'О№': 'i',
        'Оє': 'k',
        'О»': 'l',
        'Ој': 'm',
        'ОЅ': 'n',
        'Оѕ': 'ks',
        'Ої': 'o',
        'ПЂ': 'p',
        'ПЃ': 'r',
        'Пѓ': 's',
        'П„': 't',
        'П…': 'y',
        'П†': 'f',
        'П‡': 'x',
        'П€': 'ps',
        'П‰': 'o',
        'О¬': 'a',
        'О­': 'e',
        'ОЇ': 'i',
        'ПЊ': 'o',
        'ПЌ': 'y',
        'О®': 'i',
        'ПЋ': 'o',
        'П‚': 's',
        'ПЉ': 'i',
        'О°': 'y',
        'П‹': 'y',
        'Ођ': 'i',
        'О‘': 'A',
        'О’': 'B',
        'О“': 'G',
        'О”': 'D',
        'О•': 'E',
        'О–': 'Z',
        'О—': 'I',
        'О': 'TH',
        'О™': 'I',
        'Ољ': 'K',
        'О›': 'L',
        'Оњ': 'M',
        'Оќ': 'N',
        'Оћ': 'KS',
        'Оџ': 'O',
        'О ': 'P',
        'ОЎ': 'R',
        'ОЈ': 'S',
        'О¤': 'T',
        'ОҐ': 'Y',
        'О¦': 'F',
        'О§': 'X',
        'ОЁ': 'PS',
        'О©': 'O',
        'О†': 'A',
        'О€': 'E',
        'ОЉ': 'I',
        'ОЊ': 'O',
        'ОЋ': 'Y',
        'О‰': 'I',
        'ОЏ': 'O',
        'ОЄ': 'I',
        'О«': 'Y',

        // Latvian
        'ДЃ': 'a',
        // 'ДЌ': 'c', // duplicate
        'Д“': 'e',
        'ДЈ': 'g',
        'Д«': 'i',
        'Д·': 'k',
        'Дј': 'l',
        'Е†': 'n',
        // 'ЕЎ': 's', // duplicate
        'Е«': 'u',
        // 'Еѕ': 'z', // duplicate
        'ДЂ': 'A',
        // 'ДЊ': 'C', // duplicate
        'Д’': 'E',
        'Дў': 'G',
        'ДЄ': 'I',
        'Д¶': 'k',
        'Д»': 'L',
        'Е…': 'N',
        // 'Е ': 'S', // duplicate
        'ЕЄ': 'U',
        // 'ЕЅ': 'Z', // duplicate

        // Macedonian
        'РЊ': 'Kj',
        'Сњ': 'kj',
        'Р‰': 'Lj',
        'С™': 'lj',
        'РЉ': 'Nj',
        'Сљ': 'nj',
        'РўСЃ': 'Ts',
        'С‚СЃ': 'ts',

        // Polish
        'Д…': 'a',
        'Д‡': 'c',
        'Д™': 'e',
        'Е‚': 'l',
        'Е„': 'n',
        // 'Гі': 'o', // duplicate
        'Е›': 's',
        'Еє': 'z',
        'Еј': 'z',
        'Д„': 'A',
        'Д†': 'C',
        'Д': 'E',
        'ЕЃ': 'L',
        'Еѓ': 'N',
        'Ељ': 'S',
        'Е№': 'Z',
        'Е»': 'Z',

        // Ukranian
        'Р„': 'Ye',
        'Р†': 'I',
        'Р‡': 'Yi',
        'Тђ': 'G',
        'С”': 'ye',
        'С–': 'i',
        'С—': 'yi',
        'Т‘': 'g',

        // Romanian
        'Дѓ': 'a',
        'Д‚': 'A',
        'И™': 's',
        'И': 'S',
        // 'Еџ': 's', // duplicate
        // 'Ећ': 'S', // duplicate
        'И›': 't',
        'Иљ': 'T',
        'ЕЈ': 't',
        'Еў': 'T',

        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO

        'Р°': 'a',
        'Р±': 'b',
        'РІ': 'v',
        'Рі': 'g',
        'Рґ': 'd',
        'Рµ': 'e',
        'С‘': 'yo',
        'Р¶': 'zh',
        'Р·': 'z',
        'Рё': 'i',
        'Р№': 'i',
        'Рє': 'k',
        'Р»': 'l',
        'Рј': 'm',
        'РЅ': 'n',
        'Рѕ': 'o',
        'Рї': 'p',
        'СЂ': 'r',
        'СЃ': 's',
        'С‚': 't',
        'Сѓ': 'u',
        'С„': 'f',
        'С…': 'kh',
        'С†': 'c',
        'С‡': 'ch',
        'С€': 'sh',
        'С‰': 'sh',
        'СЉ': '',
        'С‹': 'y',
        'СЊ': '',
        'СЌ': 'e',
        'СЋ': 'yu',
        'СЏ': 'ya',
        'Рђ': 'A',
        'Р‘': 'B',
        'Р’': 'V',
        'Р“': 'G',
        'Р”': 'D',
        'Р•': 'E',
        'РЃ': 'Yo',
        'Р–': 'Zh',
        'Р—': 'Z',
        'Р': 'I',
        'Р™': 'I',
        'Рљ': 'K',
        'Р›': 'L',
        'Рњ': 'M',
        'Рќ': 'N',
        'Рћ': 'O',
        'Рџ': 'P',
        'Р ': 'R',
        'РЎ': 'S',
        'Рў': 'T',
        'РЈ': 'U',
        'Р¤': 'F',
        'РҐ': 'Kh',
        'Р¦': 'C',
        'Р§': 'Ch',
        'РЁ': 'Sh',
        'Р©': 'Sh',
        'РЄ': '',
        'Р«': 'Y',
        'Р¬': '',
        'Р­': 'E',
        'Р®': 'Yu',
        'РЇ': 'Ya',

        // Serbian
        'С’': 'dj',
        'С': 'j',
        // 'С™': 'lj',  // duplicate
        // 'Сљ': 'nj', // duplicate
        'С›': 'c',
        'Сџ': 'dz',
        'Р‚': 'Dj',
        'Р€': 'j',
        // 'Р‰': 'Lj', // duplicate
        // 'РЉ': 'Nj', // duplicate
        'Р‹': 'C',
        'РЏ': 'Dz',

        // Slovak
        'Дѕ': 'l',
        'Дє': 'l',
        'Е•': 'r',
        'ДЅ': 'L',
        'Д№': 'L',
        'Е”': 'R',

        // Turkish
        'Еџ': 's',
        'Ећ': 'S',
        'Д±': 'i',
        'Д°': 'I',
        // 'Г§': 'c', // duplicate
        // 'Г‡': 'C', // duplicate
        // 'Гј': 'u', // duplicate, see langCharMap
        // 'Гњ': 'U', // duplicate, see langCharMap
        // 'Г¶': 'o', // duplicate, see langCharMap
        // 'Г–': 'O', // duplicate, see langCharMap
        'Дџ': 'g',
        'Дћ': 'G',

        // Vietnamese
        'бєЈ': 'a',
        'бєў': 'A',
        'бєі': 'a',
        'бєІ': 'A',
        'бє©': 'a',
        'бєЁ': 'A',
        'Д‘': 'd',
        'Дђ': 'D',
        'бє№': 'e',
        'бєё': 'E',
        'бєЅ': 'e',
        'бєј': 'E',
        'бє»': 'e',
        'бєє': 'E',
        'бєї': 'e',
        'бєѕ': 'E',
        'б»Ѓ': 'e',
        'б»Ђ': 'E',
        'б»‡': 'e',
        'б»†': 'E',
        'б»…': 'e',
        'б»„': 'E',
        'б»ѓ': 'e',
        'б»‚': 'E',
        'б»Џ': 'o',
        'б»Ќ': 'o',
        'б»Њ': 'o',
        'б»‘': 'o',
        'б»ђ': 'O',
        'б»“': 'o',
        'б»’': 'O',
        'б»•': 'o',
        'б»”': 'O',
        'б»™': 'o',
        'б»': 'O',
        'б»—': 'o',
        'б»–': 'O',
        'ЖЎ': 'o',
        'Ж ': 'O',
        'б»›': 'o',
        'б»љ': 'O',
        'б»ќ': 'o',
        'б»њ': 'O',
        'б»Ј': 'o',
        'б»ў': 'O',
        'б»Ў': 'o',
        'б» ': 'O',
        'б»ћ': 'o',
        'б»џ': 'o',
        'б»‹': 'i',
        'б»Љ': 'I',
        'Д©': 'i',
        'ДЁ': 'I',
        'б»‰': 'i',
        'б»€': 'i',
        'б»§': 'u',
        'б»¦': 'U',
        'б»Ґ': 'u',
        'б»¤': 'U',
        'Е©': 'u',
        'ЕЁ': 'U',
        'Ж°': 'u',
        'ЖЇ': 'U',
        'б»©': 'u',
        'б»Ё': 'U',
        'б»«': 'u',
        'б»Є': 'U',
        'б»±': 'u',
        'б»°': 'U',
        'б»Ї': 'u',
        'б»®': 'U',
        'б»­': 'u',
        'б»¬': 'Ж°',
        'б»·': 'y',
        'б»¶': 'y',
        'б»і': 'y',
        'б»І': 'Y',
        'б»µ': 'y',
        'б»ґ': 'Y',
        'б»№': 'y',
        'б»ё': 'Y',
        'бєЎ': 'a',
        'бє ': 'A',
        'бєҐ': 'a',
        'бє¤': 'A',
        'бє§': 'a',
        'бє¦': 'A',
        'бє­': 'a',
        'бє¬': 'A',
        'бє«': 'a',
        'бєЄ': 'A',
        // 'Дѓ': 'a', // duplicate
        // 'Д‚': 'A', // duplicate
        'бєЇ': 'a',
        'бє®': 'A',
        'бє±': 'a',
        'бє°': 'A',
        'бє·': 'a',
        'бє¶': 'A',
        'бєµ': 'a',
        'бєґ': 'A',

        // symbols
        'вЂњ': '"',
        'вЂќ': '"',
        'вЂ': "'",
        'вЂ™': "'",
        'в€‚': 'd',
        'Ж’': 'f',
        'в„ў': '(TM)',
        'В©': '(C)',
        'Е“': 'oe',
        'Е’': 'OE',
        'В®': '(R)',
        'вЂ ': '+',
        'в„ ': '(SM)',
        'вЂ¦': '...',
        'Лљ': 'o',
        'Вє': 'o',
        'ВЄ': 'a',
        'вЂў': '*',
        'бЃЉ': ',',
        'бЃ‹': '.',

        // currency
        '$': 'USD',
        'в‚¬': 'EUR',
        'в‚ў': 'BRN',
        'в‚Ј': 'FRF',
        'ВЈ': 'GBP',
        'в‚¤': 'ITL',
        'в‚¦': 'NGN',
        'в‚§': 'ESP',
        'в‚©': 'KRW',
        'в‚Є': 'ILS',
        'в‚«': 'VND',
        'в‚­': 'LAK',
        'в‚®': 'MNT',
        'в‚Ї': 'GRD',
        'в‚±': 'ARS',
        'в‚І': 'PYG',
        'в‚і': 'ARA',
        'в‚ґ': 'UAH',
        'в‚µ': 'GHS',
        'Вў': 'cent',
        'ВҐ': 'CNY',
        'е…ѓ': 'CNY',
        'е††': 'YEN',
        'п·ј': 'IRR',
        'в‚ ': 'EWE',
        'аёї': 'THB',
        'в‚Ё': 'INR',
        'в‚№': 'INR',
        'в‚°': 'PF',
        'в‚є': 'TRY',
        'Ш‹': 'AFN',
        'в‚ј': 'AZN',
        'Р»РІ': 'BGN',
        'бџ›': 'KHR',
        'в‚Ў': 'CRC',
        'в‚ё': 'KZT',
        'РґРµРЅ': 'MKD',
        'zЕ‚': 'PLN',
        'в‚Ѕ': 'RUB',
        'в‚ѕ': 'GEL'

    };

    /**
     * special look ahead character array
     * These characters form with consonants to become 'single'/consonant combo
     * @type [Array]
     */
    var lookAheadCharArray = [
        // burmese
        'бЂє',

        // Dhivehi
        'Ю°'
    ];

    /**
     * diatricMap for languages where transliteration changes entirely as more diatrics are added
     * @type {Object}
     */
    var diatricMap = {
        // Burmese
        // dependent vowels
        'бЂ¬': 'a',
        'бЂ«': 'a',
        'бЂ±': 'e',
        'бЂІ': 'e',
        'бЂ­': 'i',
        'бЂ®': 'i',
        'бЂ­бЂЇ': 'o',
        'бЂЇ': 'u',
        'бЂ°': 'u',
        'бЂ±бЂ«бЂ„бЂє': 'aung',
        'бЂ±бЂ¬': 'aw',
        'бЂ±бЂ¬бЂє': 'aw',
        'бЂ±бЂ«': 'aw',
        'бЂ±бЂ«бЂє': 'aw',
        'бЂє': 'бЂє', // this is special case but the character will be converted to latin in the code
        'бЂЂбЂє': 'et',
        'бЂ­бЂЇбЂЂбЂє': 'aik',
        'бЂ±бЂ¬бЂЂбЂє': 'auk',
        'бЂ„бЂє': 'in',
        'бЂ­бЂЇбЂ„бЂє': 'aing',
        'бЂ±бЂ¬бЂ„бЂє': 'aung',
        'бЂ…бЂє': 'it',
        'бЂЉбЂє': 'i',
        'бЂђбЂє': 'at',
        'бЂ­бЂђбЂє': 'eik',
        'бЂЇбЂђбЂє': 'ok',
        'бЂЅбЂђбЂє': 'ut',
        'бЂ±бЂђбЂє': 'it',
        'бЂ’бЂє': 'd',
        'бЂ­бЂЇбЂ’бЂє': 'ok',
        'бЂЇбЂ’бЂє': 'ait',
        'бЂ”бЂє': 'an',
        'бЂ¬бЂ”бЂє': 'an',
        'бЂ­бЂ”бЂє': 'ein',
        'бЂЇбЂ”бЂє': 'on',
        'бЂЅбЂ”бЂє': 'un',
        'бЂ•бЂє': 'at',
        'бЂ­бЂ•бЂє': 'eik',
        'бЂЇбЂ•бЂє': 'ok',
        'бЂЅбЂ•бЂє': 'ut',
        'бЂ”бЂєбЂЇбЂ•бЂє': 'nub',
        'бЂ™бЂє': 'an',
        'бЂ­бЂ™бЂє': 'ein',
        'бЂЇбЂ™бЂє': 'on',
        'бЂЅбЂ™бЂє': 'un',
        'бЂљбЂє': 'e',
        'бЂ­бЂЇбЂњбЂє': 'ol',
        'бЂ‰бЂє': 'in',
        'бЂ¶': 'an',
        'бЂ­бЂ¶': 'ein',
        'бЂЇбЂ¶': 'on',

        // Dhivehi
        'Ю¦Ю‡Ю°': 'ah',
        'Ю¦ЮЃЮ°': 'ah'
    };

    /**
     * langCharMap language specific characters translations
     * @type   {Object}
     */
    var langCharMap = {
        'en': {}, // default language

        'az': { // Azerbaijani
            'Г§': 'c',
            'Й™': 'e',
            'Дџ': 'g',
            'Д±': 'i',
            'Г¶': 'o',
            'Еџ': 's',
            'Гј': 'u',
            'Г‡': 'C',
            'ЖЏ': 'E',
            'Дћ': 'G',
            'Д°': 'I',
            'Г–': 'O',
            'Ећ': 'S',
            'Гњ': 'U'
        },

        'cs': { // Czech
            'ДЌ': 'c',
            'ДЏ': 'd',
            'Д›': 'e',
            'Е€': 'n',
            'Е™': 'r',
            'ЕЎ': 's',
            'ЕҐ': 't',
            'ЕЇ': 'u',
            'Еѕ': 'z',
            'ДЊ': 'C',
            'ДЋ': 'D',
            'Дљ': 'E',
            'Е‡': 'N',
            'Е': 'R',
            'Е ': 'S',
            'Е¤': 'T',
            'Е®': 'U',
            'ЕЅ': 'Z'
        },

        'fi': { // Finnish
            // 'ГҐ': 'a', duplicate see charMap/latin
            // 'Г…': 'A', duplicate see charMap/latin
            'Г¤': 'a', // ok
            'Г„': 'A', // ok
            'Г¶': 'o', // ok
            'Г–': 'O' // ok
        },

        'hu': { // Hungarian
            'Г¤': 'a', // ok
            'Г„': 'A', // ok
            // 'ГЎ': 'a', duplicate see charMap/latin
            // 'ГЃ': 'A', duplicate see charMap/latin
            'Г¶': 'o', // ok
            'Г–': 'O', // ok
            // 'Е‘': 'o', duplicate see charMap/latin
            // 'Еђ': 'O', duplicate see charMap/latin
            'Гј': 'u',
            'Гњ': 'U',
            'Е±': 'u',
            'Е°': 'U'
        },

        'lt': { // Lithuanian
            'Д…': 'a',
            'ДЌ': 'c',
            'Д™': 'e',
            'Д—': 'e',
            'ДЇ': 'i',
            'ЕЎ': 's',
            'Еі': 'u',
            'Е«': 'u',
            'Еѕ': 'z',
            'Д„': 'A',
            'ДЊ': 'C',
            'Д': 'E',
            'Д–': 'E',
            'Д®': 'I',
            'Е ': 'S',
            'ЕІ': 'U',
            'ЕЄ': 'U'
        },

        'lv': { // Latvian
            'ДЃ': 'a',
            'ДЌ': 'c',
            'Д“': 'e',
            'ДЈ': 'g',
            'Д«': 'i',
            'Д·': 'k',
            'Дј': 'l',
            'Е†': 'n',
            'ЕЎ': 's',
            'Е«': 'u',
            'Еѕ': 'z',
            'ДЂ': 'A',
            'ДЊ': 'C',
            'Д’': 'E',
            'Дў': 'G',
            'ДЄ': 'i',
            'Д¶': 'k',
            'Д»': 'L',
            'Е…': 'N',
            'Е ': 'S',
            'ЕЄ': 'u',
            'ЕЅ': 'Z'
        },

        'pl': { // Polish
            'Д…': 'a',
            'Д‡': 'c',
            'Д™': 'e',
            'Е‚': 'l',
            'Е„': 'n',
            'Гі': 'o',
            'Е›': 's',
            'Еє': 'z',
            'Еј': 'z',
            'Д„': 'A',
            'Д†': 'C',
            'Д': 'e',
            'ЕЃ': 'L',
            'Еѓ': 'N',
            'Г“': 'O',
            'Ељ': 'S',
            'Е№': 'Z',
            'Е»': 'Z'
        },

        'sk': { // Slovak
            'Г¤': 'a',
            'Г„': 'A'
        },

        'sr': { // Serbian
            'С™': 'lj',
            'Сљ': 'nj',
            'Р‰': 'Lj',
            'РЉ': 'Nj',
            'Д‘': 'dj',
            'Дђ': 'Dj'
        },

        'tr': { // Turkish
            'Гњ': 'U',
            'Г–': 'O',
            'Гј': 'u',
            'Г¶': 'o'
        }
    };

    /**
     * symbolMap language specific symbol translations
     * translations must be transliterated already
     * @type   {Object}
     */
    var symbolMap = {
        'ar': {
            'в€†': 'delta',
            'в€ћ': 'la-nihaya',
            'в™Ґ': 'hob',
            '&': 'wa',
            '|': 'aw',
            '<': 'aqal-men',
            '>': 'akbar-men',
            'в€‘': 'majmou',
            'В¤': 'omla'
        },

        'az': {},

        'ca': {
            'в€†': 'delta',
            'в€ћ': 'infinit',
            'в™Ґ': 'amor',
            '&': 'i',
            '|': 'o',
            '<': 'menys que',
            '>': 'mes que',
            'в€‘': 'suma dels',
            'В¤': 'moneda'
        },

        'cs': {
            'в€†': 'delta',
            'в€ћ': 'nekonecno',
            'в™Ґ': 'laska',
            '&': 'a',
            '|': 'nebo',
            '<': 'mensi nez',
            '>': 'vetsi nez',
            'в€‘': 'soucet',
            'В¤': 'mena'
        },

        'de': {
            'в€†': 'delta',
            'в€ћ': 'unendlich',
            'в™Ґ': 'Liebe',
            '&': 'und',
            '|': 'oder',
            '<': 'kleiner als',
            '>': 'groesser als',
            'в€‘': 'Summe von',
            'В¤': 'Waehrung'
        },

        'dv': {
            'в€†': 'delta',
            'в€ћ': 'kolunulaa',
            'в™Ґ': 'loabi',
            '&': 'aai',
            '|': 'noonee',
            '<': 'ah vure kuda',
            '>': 'ah vure bodu',
            'в€‘': 'jumula',
            'В¤': 'faisaa'
        },

        'en': {
            'в€†': 'delta',
            'в€ћ': 'infinity',
            'в™Ґ': 'love',
            '&': 'and',
            '|': 'or',
            '<': 'less than',
            '>': 'greater than',
            'в€‘': 'sum',
            'В¤': 'currency'
        },

        'es': {
            'в€†': 'delta',
            'в€ћ': 'infinito',
            'в™Ґ': 'amor',
            '&': 'y',
            '|': 'u',
            '<': 'menos que',
            '>': 'mas que',
            'в€‘': 'suma de los',
            'В¤': 'moneda'
        },

        'fa': {
            'в€†': 'delta',
            'в€ћ': 'bi-nahayat',
            'в™Ґ': 'eshgh',
            '&': 'va',
            '|': 'ya',
            '<': 'kamtar-az',
            '>': 'bishtar-az',
            'в€‘': 'majmooe',
            'В¤': 'vahed'
        },

        'fi': {
            'в€†': 'delta',
            'в€ћ': 'aarettomyys',
            'в™Ґ': 'rakkaus',
            '&': 'ja',
            '|': 'tai',
            '<': 'pienempi kuin',
            '>': 'suurempi kuin',
            'в€‘': 'summa',
            'В¤': 'valuutta'
        },

        'fr': {
            'в€†': 'delta',
            'в€ћ': 'infiniment',
            'в™Ґ': 'Amour',
            '&': 'et',
            '|': 'ou',
            '<': 'moins que',
            '>': 'superieure a',
            'в€‘': 'somme des',
            'В¤': 'monnaie'
        },

        'ge': {
            'в€†': 'delta',
            'в€ћ': 'usasruloba',
            'в™Ґ': 'siqvaruli',
            '&': 'da',
            '|': 'an',
            '<': 'naklebi',
            '>': 'meti',
            'в€‘': 'jami',
            'В¤': 'valuta'
        },

        'gr': {},

        'hu': {
            'в€†': 'delta',
            'в€ћ': 'vegtelen',
            'в™Ґ': 'szerelem',
            '&': 'es',
            '|': 'vagy',
            '<': 'kisebb mint',
            '>': 'nagyobb mint',
            'в€‘': 'szumma',
            'В¤': 'penznem'
        },

        'it': {
            'в€†': 'delta',
            'в€ћ': 'infinito',
            'в™Ґ': 'amore',
            '&': 'e',
            '|': 'o',
            '<': 'minore di',
            '>': 'maggiore di',
            'в€‘': 'somma',
            'В¤': 'moneta'
        },

        'lt': {
            'в€†': 'delta',
            'в€ћ': 'begalybe',
            'в™Ґ': 'meile',
            '&': 'ir',
            '|': 'ar',
            '<': 'maziau nei',
            '>': 'daugiau nei',
            'в€‘': 'suma',
            'В¤': 'valiuta'
        },

        'lv': {
            'в€†': 'delta',
            'в€ћ': 'bezgaliba',
            'в™Ґ': 'milestiba',
            '&': 'un',
            '|': 'vai',
            '<': 'mazak neka',
            '>': 'lielaks neka',
            'в€‘': 'summa',
            'В¤': 'valuta'
        },

        'my': {
            'в€†': 'kwahkhyaet',
            'в€ћ': 'asaonasme',
            'в™Ґ': 'akhyait',
            '&': 'nhin',
            '|': 'tho',
            '<': 'ngethaw',
            '>': 'kyithaw',
            'в€‘': 'paungld',
            'В¤': 'ngwekye'
        },

        'mk': {},

        'nl': {
            'в€†': 'delta',
            'в€ћ': 'oneindig',
            'в™Ґ': 'liefde',
            '&': 'en',
            '|': 'of',
            '<': 'kleiner dan',
            '>': 'groter dan',
            'в€‘': 'som',
            'В¤': 'valuta'
        },

        'pl': {
            'в€†': 'delta',
            'в€ћ': 'nieskonczonosc',
            'в™Ґ': 'milosc',
            '&': 'i',
            '|': 'lub',
            '<': 'mniejsze niz',
            '>': 'wieksze niz',
            'в€‘': 'suma',
            'В¤': 'waluta'
        },

        'pt': {
            'в€†': 'delta',
            'в€ћ': 'infinito',
            'в™Ґ': 'amor',
            '&': 'e',
            '|': 'ou',
            '<': 'menor que',
            '>': 'maior que',
            'в€‘': 'soma',
            'В¤': 'moeda'
        },

        'ro': {
            'в€†': 'delta',
            'в€ћ': 'infinit',
            'в™Ґ': 'dragoste',
            '&': 'si',
            '|': 'sau',
            '<': 'mai mic ca',
            '>': 'mai mare ca',
            'в€‘': 'suma',
            'В¤': 'valuta'
        },

        'ru': {
            'в€†': 'delta',
            'в€ћ': 'beskonechno',
            'в™Ґ': 'lubov',
            '&': 'i',
            '|': 'ili',
            '<': 'menshe',
            '>': 'bolshe',
            'в€‘': 'summa',
            'В¤': 'valjuta'
        },

        'sk': {
            'в€†': 'delta',
            'в€ћ': 'nekonecno',
            'в™Ґ': 'laska',
            '&': 'a',
            '|': 'alebo',
            '<': 'menej ako',
            '>': 'viac ako',
            'в€‘': 'sucet',
            'В¤': 'mena'
        },

        'sr': {},

        'tr': {
            'в€†': 'delta',
            'в€ћ': 'sonsuzluk',
            'в™Ґ': 'ask',
            '&': 've',
            '|': 'veya',
            '<': 'kucuktur',
            '>': 'buyuktur',
            'в€‘': 'toplam',
            'В¤': 'para birimi'
        },

        'uk': {
            'в€†': 'delta',
            'в€ћ': 'bezkinechnist',
            'в™Ґ': 'lubov',
            '&': 'i',
            '|': 'abo',
            '<': 'menshe',
            '>': 'bilshe',
            'в€‘': 'suma',
            'В¤': 'valjuta'
        },

        'vn': {
            'в€†': 'delta',
            'в€ћ': 'vo cuc',
            'в™Ґ': 'yeu',
            '&': 'va',
            '|': 'hoac',
            '<': 'nho hon',
            '>': 'lon hon',
            'в€‘': 'tong',
            'В¤': 'tien te'
        }
    };

    var uricChars = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'].join('');

    var uricNoSlashChars = [';', '?', ':', '@', '&', '=', '+', '$', ','].join('');

    var markChars = ['.', '!', '~', '*', "'", '(', ')'].join('');

    /**
     * getSlug
     * @param  {string} input input string
     * @param  {object|string} opts config object or separator string/char
     * @api    public
     * @return {string}  sluggified string
     */
    var getSlug = function getSlug(input, opts) {
        var separator = '-';
        var result = '';
        var diatricString = '';
        var convertSymbols = true;
        var customReplacements = {};
        var maintainCase;
        var titleCase;
        var truncate;
        var uricFlag;
        var uricNoSlashFlag;
        var markFlag;
        var symbol;
        var langChar;
        var lucky;
        var i;
        var ch;
        var l;
        var lastCharWasSymbol;
        var lastCharWasDiatric;
        var allowedChars = '';

        if (typeof input !== 'string') {
            return '';
        }

        if (typeof opts === 'string') {
            separator = opts;
        }

        symbol = symbolMap.en;
        langChar = langCharMap.en;

        if (typeof opts === 'object') {
            maintainCase = opts.maintainCase || false;
            customReplacements = (opts.custom && typeof opts.custom === 'object') ? opts.custom : customReplacements;
            truncate = (+opts.truncate > 1 && opts.truncate) || false;
            uricFlag = opts.uric || false;
            uricNoSlashFlag = opts.uricNoSlash || false;
            markFlag = opts.mark || false;
            convertSymbols = (opts.symbols === false || opts.lang === false) ? false : true;
            separator = opts.separator || separator;

            if (uricFlag) {
                allowedChars += uricChars;
            }

            if (uricNoSlashFlag) {
                allowedChars += uricNoSlashChars;
            }

            if (markFlag) {
                allowedChars += markChars;
            }

            symbol = (opts.lang && symbolMap[opts.lang] && convertSymbols) ?
                symbolMap[opts.lang] : (convertSymbols ? symbolMap.en : {});

            langChar = (opts.lang && langCharMap[opts.lang]) ?
                langCharMap[opts.lang] :
                opts.lang === false || opts.lang === true ? {} : langCharMap.en;

            // if titleCase config is an Array, rewrite to object format
            if (opts.titleCase && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
                opts.titleCase.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });

                titleCase = true;
            } else {
                titleCase = !!opts.titleCase;
            }

            // if custom config is an Array, rewrite to object format
            if (opts.custom && typeof opts.custom.length === 'number' && Array.prototype.toString.call(opts.custom)) {
                opts.custom.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });
            }

            // custom replacements
            Object.keys(customReplacements).forEach(function (v) {
                var r;

                if (v.length > 1) {
                    r = new RegExp('\\b' + escapeChars(v) + '\\b', 'gi');
                } else {
                    r = new RegExp(escapeChars(v), 'gi');
                }

                input = input.replace(r, customReplacements[v]);
            });

            // add all custom replacement to allowed charlist
            for (ch in customReplacements) {
                allowedChars += ch;
            }
        }

        allowedChars += separator;

        // escape all necessary chars
        allowedChars = escapeChars(allowedChars);

        // trim whitespaces
        input = input.replace(/(^\s+|\s+$)/g, '');

        lastCharWasSymbol = false;
        lastCharWasDiatric = false;

        for (i = 0, l = input.length; i < l; i++) {
            ch = input[i];

            if (isReplacedCustomChar(ch, customReplacements)) {
                // don't convert a already converted char
                lastCharWasSymbol = false;
            } else if (langChar[ch]) {
                // process language specific diactrics chars conversion
                ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? ' ' + langChar[ch] : langChar[ch];

                lastCharWasSymbol = false;
            } else if (ch in charMap) {
                // the transliteration changes entirely when some special characters are added
                if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
                    diatricString += ch;
                    ch = '';
                } else if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + charMap[ch];
                    diatricString = '';
                } else {
                    // process diactrics chars
                    ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? ' ' + charMap[ch] : charMap[ch];
                }

                lastCharWasSymbol = false;
                lastCharWasDiatric = false;
            } else if (ch in diatricMap) {
                diatricString += ch;
                ch = '';
                // end of string, put the whole meaningful word
                if (i === l - 1) {
                    ch = diatricMap[diatricString];
                }
                lastCharWasDiatric = true;
            } else if (
                // process symbol chars
                symbol[ch] && !(uricFlag && uricChars
                    .indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars
                    // .indexOf(ch) !== -1) && !(markFlag && markChars
                    .indexOf(ch) !== -1)) {
                ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
                ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : '';

                lastCharWasSymbol = true;
            } else {
                if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + ch;
                    diatricString = '';
                    lastCharWasDiatric = false;
                } else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
                    // process latin chars
                    ch = ' ' + ch;
                }
                lastCharWasSymbol = false;
            }

            // add allowed chars
            result += ch.replace(new RegExp('[^\\w\\s' + allowedChars + '_-]', 'g'), separator);
        }

        if (titleCase) {
            result = result.replace(/(\w)(\S*)/g, function (_, i, r) {
                var j = i.toUpperCase() + (r !== null ? r : '');
                return (Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0) ? j : j.toLowerCase();
            });
        }

        // eliminate duplicate separators
        // add separator
        // trim separators from start and end
        result = result.replace(/\s+/g, separator)
            .replace(new RegExp('\\' + separator + '+', 'g'), separator)
            .replace(new RegExp('(^\\' + separator + '+|\\' + separator + '+$)', 'g'), '');

        if (truncate && result.length > truncate) {
            lucky = result.charAt(truncate) === separator;
            result = result.slice(0, truncate);

            if (!lucky) {
                result = result.slice(0, result.lastIndexOf(separator));
            }
        }

        if (!maintainCase && !titleCase) {
            result = result.toLowerCase();
        }

        return result;
    };

    /**
     * createSlug curried(opts)(input)
     * @param   {object|string} opts config object or input string
     * @return  {Function} function getSlugWithConfig()
     **/
    var createSlug = function createSlug(opts) {

        /**
         * getSlugWithConfig
         * @param   {string} input string
         * @return  {string} slug string
         */
        return function getSlugWithConfig(input) {
            return getSlug(input, opts);
        };
    };

    /**
     * escape Chars
     * @param   {string} input string
     */
    var escapeChars = function escapeChars(input) {
        return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
    };

    /**
     * check if the char is an already converted char from custom list
     * @param   {char} ch character to check
     * @param   {object} customReplacements custom translation map
     */
    var isReplacedCustomChar = function (ch, customReplacements) {
        for (var c in customReplacements) {
            if (customReplacements[c] === ch) {
                return true;
            }
        }
    };

    if (typeof module !== 'undefined' && module.exports) {

        // export functions for use in Node
        module.exports = getSlug;
        module.exports.createSlug = createSlug;
    } else if (typeof define !== 'undefined' && define.amd) {

        // export function for use in AMD
        define([], function () {
            return getSlug;
        });
    } else {

        // don't overwrite global if exists
        try {
            if (root.getSlug || root.createSlug) {
                throw 'speakingurl: globals exists /(getSlug|createSlug)/';
            } else {
                root.getSlug = getSlug;
                root.createSlug = createSlug;
            }
        } catch (e) {}
    }
})(this);
