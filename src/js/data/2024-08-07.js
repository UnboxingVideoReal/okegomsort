dataSetVersion = "2024-08-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Manga & Animations", key: "manga" },
      { name: "Mogeko Castle", tooltip: "モゲコキャッスル", key: "MC" },
      { name: "The Grey Garden", tooltip: "灰色庭園", key: "TGG" },
      { name: "Wadanohara and the Great Blue Sea", tooltip: "大海原と大海原", key: "WatGBS" },
      { name: "Mogeko Castle (Remake)", tooltip: "モゲコキャッスル", key: "MCR" },
      { name: "Garden Grey The", tooltip: "園庭色灰", key: "GGT" },
      { name: "Wadanohara and the Great Blue Sea (Reboot)", tooltip: "大海原と大海原 -Reboot-", key: "WatGBSR" },
      { name: "Ice Scream", tooltip: "アイス・スクリーム", key: "IS" },
      ]
  },
  // {
  //   name: "Filter by Stage Enemy Appearances",
  //   key: "stage",
  //   tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
  //   checked: false,
  //   sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
  //   ]
  // },
  {
    name: "Remove Future Works",
    key: "future",
    tooltip: "Check this to remove characters introduced in future works."
  },
  {
    name: "Remove Non-Females",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters.",
    checked: false
  },
  {
    name: "Remove Non-Males",
    key: "notboy",
    tooltip: "Check this to remove all non-female characters.",
    checked: false
  },
  {
    name: "Remove Forms",
    key: "form",
    tooltip: "Check this to remove all forms of characters.",
    checked: false
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  },
  {
    name: "Remove Appearance-less Characters",
    key: "notlook",
    tooltip: "Check this to remove all characters without appearances.",
    checked: false
  }

];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nakata Kurokawa",
    img: "vTWVKaO.png",
    opts: {
      series: [ "MC", "MCR" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Killisaki",
    img: "ps0ac67.png",
    opts: {
      series: [ ],
      notlook: true,
      notgirl: true
    }
  },
  {
    name: "If",
    img: "nGdgpld.png",
    opts: {
      series: [ ],
      notlook: true,
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Kurotsuno",
    img: "xV2yr12.png",
    opts: {
      series: [ "manga", "MC", "MCR" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Olivia",
    img: "MLfxixP.png",
    opts: {
      series: [ "manga", "MC", "MCR" ],
      notgirl: false,
      notboy: true,
      form: true
    }
  },
  {
    name: "Bis",
    img: "hI0yINx.png",
    opts: {
      series: [ "manga" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Elena",
    img: "GcHmglL.png",
    opts: {
      series: [ ],
      notlook: true,
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Reina",
    img: "kFJogw2.png",
    opts: {
      series: [ "manga" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Met",
    img: "AMxHPVZ.png",
    opts: {
      series: [ "manga", "MC", "MCR", "TGG", "WatGBS", "WatGBSR" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Rika Momijibayashi",
    img: "wjO0Gea.png",
    opts: {
      series: [ "manga" ],
      form: true,
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Hanten",
    img: "8UFT9n4.png",
    opts: {
      series: [ "manga", "MC", "MCR" ],
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Hanten (Original)",
    img: "dUMSVV4.png",
    opts: {
      series: [ "manga" ],
      form: true,
      notgirl: false,
      notboy: true
    }
  },
  {
    name: "Sullivan",
    img: "rArDtDC.png",
    opts: {
      series: [ "manga", "MCR", "WatGBS", "WatGBSR" ],
      notboy: false,
      notgirl: true
    }
  },
];
