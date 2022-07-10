function ConvertingFunction(input) {
  let counter = 0;

  const hiraganaA = /\sa/gi;
  const hiraganaI = /\si/gi;
  const hiraganaU = /\su/gi;
  const hiraganaE = /\se/gi;
  const hiraganaO = /\so/gi;

  const hiraganaKa = /ka/gi;
  const hiraganaKi = /ki/gi;
  const hiraganaKu = /ku/gi;
  const hiraganaKe = /ke/gi;
  const hiraganaKo = /ko/gi;

  const hiraganaSa = /sa/gi;
  const hiraganaShi = /si|shi/gi;
  const hiraganaSu = /su/gi;
  const hiraganaSe = /se/gi;
  const hiraganaSo = /so/gi;

  const hiraganaTa = /ta/gi;
  const hiraganaTi = /ti|chi/gi;
  const hiraganaTu = /tu|tsu/gi;
  const hiraganaTe = /te/gi;
  const hiraganaTo = /to/gi;

  const hiraganaNa = /na/gi;
  const hiraganaNi = /ni/gi;
  const hiraganaNu = /nu/gi;
  const hiraganaNe = /ne/gi;
  const hiraganaNo = /no/gi;

  const hiraganaHa = /ha/gi;
  const hiraganaHi = /hi/gi;
  const hiraganaHu = /hu/gi;
  const hiraganaHe = /he/gi;
  const hiraganaHo = /ho/gi;

  const hiraganaMa = /ma/gi;
  const hiraganaMi = /mi/gi;
  const hiraganaMu = /mu/gi;
  const hiraganaMe = /me/gi;
  const hiraganaMo = /mo/gi;

  const hiraganaRa = /ra/gi;
  const hiraganaRi = /ri/gi;
  const hiraganaRu = /ru/gi;
  const hiraganaRe = /re/gi;
  const hiraganaRo = /ro/gi;

  const hiraganaYa = /ya|ja/gi;
  const hiraganaYu = /yu/gi;
  const hiraganaYo = /yo/gi;

  const hiraganaWa = /wa/gi;
  const hiraganaWo = /wo/gi;

  const hiraganaN = /n+/gi;

  let step1 = input.replace(hiraganaA, " あ");
  let step2 = step1.replace(hiraganaI, " い");
  let step3 = step2.replace(hiraganaU, " う");
  let step4 = step3.replace(hiraganaE, " え");
  let step5 = step4.replace(hiraganaO, " お");

  let step6 = step5.replace(hiraganaKa, "か");
  let step7 = step6.replace(hiraganaKi, "き");
  let step8 = step7.replace(hiraganaKu, "く");
  let step9 = step8.replace(hiraganaKe, "け");
  let step10 = step9.replace(hiraganaKo, "こ");

  let step11 = step10.replace(hiraganaSa, "さ");
  let step12 = step11.replace(hiraganaShi, "し");
  let step13 = step12.replace(hiraganaSu, "す");
  let step14 = step13.replace(hiraganaSe, "そ");
  let step15 = step14.replace(hiraganaSo, "そ");

  let step16 = step15.replace(hiraganaTa, "た");
  let step17 = step16.replace(hiraganaTi, "ち");
  let step18 = step17.replace(hiraganaTu, "つ");
  let step19 = step18.replace(hiraganaTe, "て");
  let step20 = step19.replace(hiraganaTo, "と");

  let step21 = step20.replace(hiraganaNa, "な");
  let step22 = step21.replace(hiraganaNi, "に");
  let step23 = step22.replace(hiraganaNu, "ぬ");
  let step24 = step23.replace(hiraganaNe, "ね");
  let step25 = step24.replace(hiraganaNo, "の");

  let step26 = step25.replace(hiraganaHa, "は");
  let step27 = step26.replace(hiraganaHi, "ひ");
  let step28 = step27.replace(hiraganaHu, "ふ");
  let step29 = step28.replace(hiraganaHe, "へ");
  let step30 = step29.replace(hiraganaHo, "ほ");

  let step31 = step30.replace(hiraganaMa, "ま");
  let step32 = step31.replace(hiraganaMi, "み");
  let step33 = step32.replace(hiraganaMu, "む");
  let step34 = step33.replace(hiraganaMe, "め");
  let step35 = step34.replace(hiraganaMo, "も");

  let step36 = step35.replace(hiraganaRa, "ら");
  let step37 = step36.replace(hiraganaRi, "り");
  let step38 = step37.replace(hiraganaRu, "る");
  let step39 = step38.replace(hiraganaRe, "れ");
  let step40 = step39.replace(hiraganaRo, "ろ");

  let step41 = step40.replace(hiraganaYa, "や");
  let step42 = step41.replace(hiraganaYu, "ゆ");
  let step43 = step42.replace(hiraganaYo, "よ");

  let step44 = step43.replace(hiraganaWa, "わ");
  let step45 = step44.replace(hiraganaWo, "を");

  let step46 = step45.replace(hiraganaN, "ん");

  return step46;
}

export default ConvertingFunction;