function ConvertingFunction(input) {
  const divisionStep = input.length / 10;
  // console.log(divisionStep);

  const firstPartOfText = input.slice(0, Math.floor(divisionStep));
  const secondPartOfText = input.slice(
    Math.floor(divisionStep),
    Math.floor(divisionStep) * 2
  );
  const thirdPartOfText = input.slice(
    Math.floor(divisionStep) * 2,
    Math.floor(divisionStep) * 3
  );
  const fourthPartOfText = input.slice(
    Math.floor(divisionStep) * 3,
    Math.floor(divisionStep) * 4
  );
  const fifthPartOfText = input.slice(
    Math.floor(divisionStep) * 4,
    Math.floor(divisionStep) * 5
  );
  const sixthPartOfText = input.slice(
    Math.floor(divisionStep) * 5,
    Math.floor(divisionStep) * 6
  );
  const seventhPartOfText = input.slice(
    Math.floor(divisionStep) * 6,
    Math.floor(divisionStep) * 7
  );
  const eightPartOfText = input.slice(
    Math.floor(divisionStep) * 7,
    Math.floor(divisionStep) * 8
  );
  const ninthPartOfText = input.slice(
    Math.floor(divisionStep) * 8,
    Math.floor(divisionStep) * 9
  );
  const tenthPartOfText = input.slice(Math.floor(divisionStep) * 9);

const replacingStepTen = () => {
    const hiraganaWa = /wa/gi;
    const hiraganaWo = /wo/gi;
    const hiraganaN = /n+/gi;
    let waStep = tenthPartOfText.replace(hiraganaWa, "わ");
    let woStep = waStep.replace(hiraganaWo, "を");
    let partTen = woStep.replace(hiraganaN, "ん");
    return partTen;
};


const replacingStepNine = (lastPart) => {
  const hiraganaYa = /ya|ja/gi;
  const hiraganaYu = /yu/gi;
  const hiraganaYo = /yo/gi;

  const addedParts = ninthPartOfText + lastPart;
    let yaStep = addedParts.replace(hiraganaYa, "や");
    let yuStep = yaStep.replace(hiraganaYu, "ゆ");
    let partNine = yuStep.replace(hiraganaYo, "よ");
    return partNine;
  };

  const replacingStepEight = (partNine) => {
    const hiraganaRa = /ra/gi;
    const hiraganaRi = /ri/gi;
    const hiraganaRu = /ru/gi;
    const hiraganaRe = /re/gi;
    const hiraganaRo = /ro/gi;
  
    const addedParts = eightPartOfText + partNine;

      let raStep = addedParts.replace(hiraganaRa, "ら");
      let riStep = raStep.replace(hiraganaRi, "り");
      let ruStep = riStep.replace(hiraganaRu, "る");
      let reStep = ruStep.replace(hiraganaRe, "れ");
      let partEight = reStep.replace(hiraganaRo, "ろ");
      return partEight;
    };
   
    const replacingStepSeven = (partEight) => {
      const hiraganaMa = /ma/gi;
      const hiraganaMi = /mi/gi;
      const hiraganaMu = /mu/gi;
      const hiraganaMe = /me/gi;
      const hiraganaMo = /mo/gi;
    
      const addedParts = seventhPartOfText + partEight;

        let maStep = addedParts.replace(hiraganaMa, "ま");
        let miStep = maStep.replace(hiraganaMi, "み");
        let muStep = miStep.replace(hiraganaMu, "む");
        let meStep = muStep.replace(hiraganaMe, "め");
        let partSeven = meStep.replace(hiraganaMo, "も");
        return partSeven;
      };
  


 const replacingStepSix = (partSeven) => {
    const hiraganaHa = /ha/gi;
    const hiraganaHi = /hi/gi;
    const hiraganaHu = /hu/gi;
    const hiraganaHe = /he/gi;
    const hiraganaHo = /ho/gi;
      
    const addedParts = sixthPartOfText + partSeven;

    let haStep = addedParts.replace(hiraganaHa, "は");
    let hiStep = haStep.replace(hiraganaHi, "ひ");
    let huStep = hiStep.replace(hiraganaHu, "ふ");
    let heStep = huStep.replace(hiraganaHe, "へ");
    let partSix = heStep.replace(hiraganaHo, "ほ");
    return partSix;
  };


  const replacingStepFive = (partSix) => {
    const hiraganaNa = /na/gi;
    const hiraganaNi = /ni/gi;
    const hiraganaNu = /nu/gi;
    const hiraganaNe = /ne/gi;
    const hiraganaNo = /no/gi;
  
    const addedParts = fifthPartOfText + partSix;

      let naStep = addedParts.replace(hiraganaNa, "な");
      let niStep = naStep.replace(hiraganaNi, "に");
      let nuStep = niStep.replace(hiraganaNu, "ぬ");
      let neStep = nuStep.replace(hiraganaNe, "ね");
      let partFive = neStep.replace(hiraganaNo, "の");
      return partFive;
    };

    const replacingStepFour = (partFive) => {
      const hiraganaTa = /ta/gi;
      const hiraganaTi = /ti|chi/gi;
      const hiraganaTu = /tu|tsu/gi;
      const hiraganaTe = /te/gi;
      const hiraganaTo = /to/gi;
    
      const addedParts = fourthPartOfText + partFive;

        let taStep = addedParts.replace(hiraganaTa, "た");
        let tiStep = taStep.replace(hiraganaTi, "ち");
        let tuStep = tiStep.replace(hiraganaTu, "つ");
        let teStep = tuStep.replace(hiraganaTe, "て");
        let partFour = teStep.replace(hiraganaTo, "と");
    
        return partFour;
      };
     
      const replacingStepThree = (partFour) => {
        const hiraganaSa = /sa/gi;
        const hiraganaShi = /si|shi/gi;
        const hiraganaSu = /su/gi;
        const hiraganaSe = /se/gi;
        const hiraganaSo = /so/gi;
      
        const addedParts = thirdPartOfText + partFour;

          let saStep = addedParts.replace(hiraganaSa, "さ");
          let siStep = saStep.replace(hiraganaShi, "し");
          let suStep = siStep.replace(hiraganaSu, "す");
          let seStep = suStep.replace(hiraganaSe, "そ");
          let partThree = seStep.replace(hiraganaSo, "そ");
          return partThree;
        };

const replacingStepTwo = (partThree) => {
  const hiraganaKa = /ka/gi;
  const hiraganaKi = /ki/gi;
  const hiraganaKu = /ku/gi;
  const hiraganaKe = /ke/gi;
  const hiraganaKo = /ko/gi;
  
  const addedParts = secondPartOfText + partThree;

  let kaStep = addedParts.replace(hiraganaKa, "か");
  let kiStep = kaStep.replace(hiraganaKi, "き");
  let kuStep = kiStep.replace(hiraganaKu, "く");
  let keStep = kuStep.replace(hiraganaKe, "け");
  let partTwo = keStep.replace(hiraganaKo, "こ");
  return partTwo;
  };

  const replacingStepOne = (partTwo) => {
  const hiraganaA = /\sa/gi;
  const hiraganaI = /\si/gi;
  const hiraganaU = /\su/gi;
  const hiraganaE = /\se/gi;
  const hiraganaO = /\so/gi;

  const addedParts = firstPartOfText + partTwo;

    let aStep = addedParts.replace(hiraganaA, " あ");
    let iStep = aStep.replace(hiraganaI, " い");
    let uStep = iStep.replace(hiraganaU, " う");
    let eStep = uStep.replace(hiraganaE, " え");
    let lastStep = eStep.replace(hiraganaO, " お");
    return lastStep;
  };
    
const lastPart = replacingStepTen();
const partNine = replacingStepNine(lastPart);
const partEight = replacingStepEight(partNine);
const partSeven = replacingStepSeven(partEight);
const partSix = replacingStepSix(partSeven);
const partFive = replacingStepFive(partSix);
const partFour = replacingStepFour(partFive);
const partThree = replacingStepThree(partFour);
const partTwo = replacingStepTwo(partThree);
const fullText = replacingStepOne(partTwo);

  return fullText;
}

export default ConvertingFunction;
