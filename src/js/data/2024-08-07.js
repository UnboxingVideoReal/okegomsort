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
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  },
  {
    name: "Remove Appearance-less Characters",
    key: "nolook",
    tooltip: "Check this to remove all characters without appearances.",
    checked: false
  }

];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nakata Kurokawa",
    img: "Dkx6deN.png",
    opts: {
      series: [ "MC", "MCR" ],
      notboy: true
    }
  },
];
