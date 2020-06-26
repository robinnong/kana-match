const hiragana = [
    {
        kana: "あ",
        romaji: "A",
        type: "basic"
    },
    {
        kana: "い",
        romaji: "I",
        type: "basic"
    },
    {
        kana: "う",
        romaji: "U",
        type: "basic"
    },
    {
        kana: "え",
        romaji: "E",
        type: "basic"
    },
    {
        kana: "お",
        romaji: "O",
        type: "basic"
    },
    {
        kana: "か",
        romaji: "KA",
        type: "basic"
    },
    {
        kana: "き",
        romaji: "KI",
        type: "basic"
    },
    {
        kana: "く",
        romaji: "KU",
        type: "basic"
    },
    {
        kana: "け",
        romaji: "KE",
        type: "basic"
    },
    {
        kana: "こ",
        romaji: "KO",
        type: "basic"
    }, 
    {
        kana: "が",
        romaji: "GA",
        type: "dakuten"
    },
    {
        kana: "ぎ",
        romaji: "GI",
        type: "dakuten"
    },
    {
        kana: "ぐ",
        romaji: "GU",
        type: "dakuten"
    },
    {
        kana: "げ",
        romaji: "GE",
        type: "dakuten"
    },
    {
        kana: "ご",
        romaji: "GO",
        type: "dakuten"
    },
    {
        kana: "さ",
        romaji: "SA",
        type: "basic"
    },
    {
        kana: "し",
        romaji: "SHI",
        type: "basic"
    },
    {
        kana: "す",
        romaji: "SU",
        type: "basic"
    }
    ,
    {
        kana: "せ",
        romaji: "SE",
        type: "basic"
    },
    {
        kana: "そ",
        romaji: "SO",
        type: "basic"
    },
    {
        kana: "ざ",
        romaji: "ZA",
        type: "dakuten"
    },
    {
        kana: "じ",
        romaji: "JI",
        type: "basic"
    },
    {
        kana: "ず",
        romaji: "ZU",
        type: "dakuten"
    }
    ,
    {
        kana: "ぜ",
        romaji: "ZE",
        type: "dakuten"
    },
    {
        kana: "ぞ",
        romaji: "ZO",
        type: "dakuten"
    }, 
    {
        kana: "た",
        romaji: "TA",
        type: "basic"
    },
    {
        kana: "ち",
        romaji: "CHI",
        type: "basic"
    },
    {
        kana: "つ",
        romaji: "TSU",
        type: "basic"
    },
    {
        kana: "て",
        romaji: "TE",
        type: "basic"
    },
    {
        kana: "と",
        romaji: "TO",
        type: "basic"
    },
    {
        kana: "だ",
        romaji: "DA",
        type: "dakuten"
    },
    {
        kana: "ぢ",
        romaji: "JI",
        type: "dakuten"
    },
    {
        kana: "づ",
        romaji: "DZU",
        type: "dakuten"
    },
    {
        kana: "で",
        romaji: "DE",
        type: "dakuten"
    },
    {
        kana: "ど",
        romaji: "DO",
        type: "dakuten"
    }, 
    {
        kana: "な",
        romaji: "NA",
        type: "basic"
    },
    {
        kana: "に",
        romaji: "NI",
        type: "basic"
    },
    {
        kana: "ぬ",
        romaji: "NU", 
        type: "basic"
    },
    {
        kana: "ね",
        romaji: "NE",
        type: "basic"
    },
    {
        kana: "の",
        romaji: "NO",
        type: "basic"
    },
    {
        kana: "は",
        romaji: "HA",
        type: "basic"
    },
    {
        kana: "ひ",
        romaji: "HI",
        type: "basic"
    },
    {
        kana: "ふ",
        romaji: "FU",
        type: "basic"
    },
    {
        kana: "へ",
        romaji: "HE",
        type: "basic"
    },
    {
        kana: "ほ",
        romaji: "HO",
        type: "basic"
    },
    {
        kana: "ば",
        romaji: "BA",
        type: "dakuten"
    },
    {
        kana: "び",
        romaji: "BI",
        type: "dakuten"
    },
    {
        kana: "ぶ",
        romaji: "BU",
        type: "dakuten"
    },
    {
        kana: "べ",
        romaji: "BE",
        type: "dakuten"
    },
    {
        kana: "ぼ",
        romaji: "BO",
        type: "dakuten"
    }, 
    {
        kana: "ぱ",
        romaji: "PA",
        type: "dakuten"
    },
    {
        kana: "ぴ",
        romaji: "PI",
        type: "dakuten"
    },
    {
        kana: "ぷ",
        romaji: "PU",
        type: "dakuten"
    },
    {
        kana: "ぺ",
        romaji: "PE",
        type: "hanadakuten"
    }, 
    {
        kana: "ぽ",
        romaji: "PO",
        type: "hanadakuten"
    }, 
    // ぱぴぷ
    {
        kana: "ま",
        romaji: "MA",
        type: "basic"
    },
    {
        kana: "み",
        romaji: "MI",
        type: "basic"
    },
    {
        kana: "む",
        romaji: "MU",
        type: "basic"
    },
    {
        kana: "め",
        romaji: "ME",
        type: "basic"
    },
    {
        kana: "も",
        romaji: "MO",
        type: "basic"
    },
    {
        kana: "や",
        romaji: "YA",
        type: "basic"
    },
    {
        kana: "ゆ",
        romaji: "YU",
        type: "basic"
    },
    {
        kana: "よ",
        romaji: "YO",
        type: "basic"
    },
    {
        kana: "ら",
        romaji: "RA",
        type: "basic"
    },
    {
        kana: "り",
        romaji: "RI",
        type: "basic"
    },
    {
        kana: "る",
        romaji: "RU",
        type: "basic"
    },
    {
        kana: "れ",
        romaji: "RE",
        type: "basic"
    },
    {
        kana: "ろ",
        romaji: "RO",
        type: "basic"
    },
    {
        kana: "わ",
        romaji: "WA",
        type: "basic"
    },
    {
        kana: "を",
        romaji: "WO",
        type: "basic"
    },
    {
        kana: "ん",
        romaji: "N",
        type: "basic"
    }
]   

export default hiragana;