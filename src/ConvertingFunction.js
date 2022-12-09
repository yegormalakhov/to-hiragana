function ConvertingFunction(input) {
  // let counter = 0;
  // const divisionStep = input.length / 10;
  // console.log(divisionStep);

  // const firstPartOfText = input.slice(0, Math.floor(divisionStep));
  // const secondtPartOfText = input.slice(
  //   Math.floor(divisionStep),
  //   Math.floor(divisionStep) * 2
  // );
  // const thirdPartOfText = input.slice(
  //   Math.floor(divisionStep) * 2,
  //   Math.floor(divisionStep) * 3
  // );
  // const fourthPartOfText = input.slice(
  //   Math.floor(divisionStep) * 3,
  //   Math.floor(divisionStep) * 4
  // );
  // const fifthPartOfText = input.slice(
  //   Math.floor(divisionStep) * 4,
  //   Math.floor(divisionStep) * 5
  // );
  // const sixthPartOfText = input.slice(
  //   Math.floor(divisionStep) * 5,
  //   Math.floor(divisionStep) * 6
  // );
  // const seventhPartOfText = input.slice(
  //   Math.floor(divisionStep) * 6,
  //   Math.floor(divisionStep) * 7
  // );
  // const eightPartOfText = input.slice(
  //   Math.floor(divisionStep) * 7,
  //   Math.floor(divisionStep) * 8
  // );
  // const ninethPartOfText = input.slice(
  //   Math.floor(divisionStep) * 8,
  //   Math.floor(divisionStep) * 9
  // );
  // const tenthtPartOfText = input.slice(Math.floor(divisionStep) * 9);

  // const replacingStepOne = () => {
  const hiraganaA = /\sa/gi;
  const hiraganaI = /\si/gi;
  const hiraganaU = /\su/gi;
  const hiraganaE = /\se/gi;
  const hiraganaO = /\so/gi;

  //   let step1 = firstPartOfText.replace(hiraganaA, " あ");
  //   let step2 = step1.replace(hiraganaI, " い");
  //   let step3 = step2.replace(hiraganaU, " う");
  //   let step4 = step3.replace(hiraganaE, " え");
  //   let partOne = step4.replace(hiraganaO, " お");
  //   return partOne;
  // };
  // const replacingStepTwo = () => {
  const hiraganaKa = /ka/gi;
  const hiraganaKi = /ki/gi;
  const hiraganaKu = /ku/gi;
  const hiraganaKe = /ke/gi;
  const hiraganaKo = /ko/gi;

  //   let step6 = secondtPartOfText.replace(hiraganaKa, "か");
  //   let step7 = step6.replace(hiraganaKi, "き");
  //   let step8 = step7.replace(hiraganaKu, "く");
  //   let step9 = step8.replace(hiraganaKe, "け");
  //   let partTwo = step9.replace(hiraganaKo, "こ");
  //   return partTwo;
  // };
  // const replacingStepThree = () => {
  const hiraganaSa = /sa/gi;
  const hiraganaShi = /si|shi/gi;
  const hiraganaSu = /su/gi;
  const hiraganaSe = /se/gi;
  const hiraganaSo = /so/gi;

  //   let step11 = thirdPartOfText.replace(hiraganaSa, "さ");
  //   let step12 = step11.replace(hiraganaShi, "し");
  //   let step13 = step12.replace(hiraganaSu, "す");
  //   let step14 = step13.replace(hiraganaSe, "そ");
  //   let partThree = step14.replace(hiraganaSo, "そ");
  //   return partThree;
  // };
  // const replacingStepFour = () => {
  const hiraganaTa = /ta/gi;
  const hiraganaTi = /ti|chi/gi;
  const hiraganaTu = /tu|tsu/gi;
  const hiraganaTe = /te/gi;
  const hiraganaTo = /to/gi;

  //   let step16 = fourthPartOfText.replace(hiraganaTa, "た");
  //   let step17 = step16.replace(hiraganaTi, "ち");
  //   let step18 = step17.replace(hiraganaTu, "つ");
  //   let step19 = step18.replace(hiraganaTe, "て");
  //   let partFour = step19.replace(hiraganaTo, "と");

  //   return partFour;
  // };
  // const replacingStepFive = () => {
  const hiraganaNa = /na/gi;
  const hiraganaNi = /ni/gi;
  const hiraganaNu = /nu/gi;
  const hiraganaNe = /ne/gi;
  const hiraganaNo = /no/gi;

  //   let step21 = fifthPartOfText.replace(hiraganaNa, "な");
  //   let step22 = step21.replace(hiraganaNi, "に");
  //   let step23 = step22.replace(hiraganaNu, "ぬ");
  //   let step24 = step23.replace(hiraganaNe, "ね");
  //   let partFive = step24.replace(hiraganaNo, "の");
  //   return partFive;
  // };

  // const replacingStepSix = () => {
  const hiraganaHa = /ha/gi;
  const hiraganaHi = /hi/gi;
  const hiraganaHu = /hu/gi;
  const hiraganaHe = /he/gi;
  const hiraganaHo = /ho/gi;

  //   let step26 = sixthPartOfText.replace(hiraganaHa, "は");
  //   let step27 = step26.replace(hiraganaHi, "ひ");
  //   let step28 = step27.replace(hiraganaHu, "ふ");
  //   let step29 = step28.replace(hiraganaHe, "へ");
  //   let partSix = step29.replace(hiraganaHo, "ほ");
  //   return partSix;
  // };
  // const replacingStepSeven = () => {
  const hiraganaMa = /ma/gi;
  const hiraganaMi = /mi/gi;
  const hiraganaMu = /mu/gi;
  const hiraganaMe = /me/gi;
  const hiraganaMo = /mo/gi;

  //   let step31 = seventhPartOfText.replace(hiraganaMa, "ま");
  //   let step32 = step31.replace(hiraganaMi, "み");
  //   let step33 = step32.replace(hiraganaMu, "む");
  //   let step34 = step33.replace(hiraganaMe, "め");
  //   let partSeven = step34.replace(hiraganaMo, "も");
  //   return partSeven;
  // };
  // const replacingStepEight = () => {
  const hiraganaRa = /ra/gi;
  const hiraganaRi = /ri/gi;
  const hiraganaRu = /ru/gi;
  const hiraganaRe = /re/gi;
  const hiraganaRo = /ro/gi;

  //   let step36 = eightPartOfText.replace(hiraganaRa, "ら");
  //   let step37 = step36.replace(hiraganaRi, "り");
  //   let step38 = step37.replace(hiraganaRu, "る");
  //   let step39 = step38.replace(hiraganaRe, "れ");
  //   let partEight = step39.replace(hiraganaRo, "ろ");
  //   return partEight;
  // };
  // const replacingStepNine = () => {
  const hiraganaYa = /ya|ja/gi;
  const hiraganaYu = /yu/gi;
  const hiraganaYo = /yo/gi;

  //   let step41 = ninethPartOfText.replace(hiraganaYa, "や");
  //   let step42 = step41.replace(hiraganaYu, "ゆ");
  //   let partNine = step42.replace(hiraganaYo, "よ");
  //   return partNine;
  // };
  // const replacingStepTen = () => {
  const hiraganaWa = /wa/gi;
  const hiraganaWo = /wo/gi;

  const hiraganaN = /n+/gi;

  //   let step44 = tenthtPartOfText.replace(hiraganaWa, "わ");
  //   let step45 = step44.replace(hiraganaWo, "を");

  //   let partTen = step45.replace(hiraganaN, "ん");
  //   return partTen;
  // };

  // const fullText =
  //   replacingStepTen() +
  //   replacingStepTwo() +
  //   replacingStepThree() +
  //   replacingStepFour() +
  //   replacingStepFive() +
  //   replacingStepSix() +
  //   replacingStepSeven() +
  //   replacingStepEight() +
  //   replacingStepNine() +
  //   replacingStepTen();
  // console.log(fullText);
  // return fullText;

  //just a test for updating git token
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
