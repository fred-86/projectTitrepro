let startingIndex = 0;
const sliderLength = 3;

const swipe = (side) => {
  if (side === "left") {
    startingIndex--;

    startingIndex = startingIndex < 0 ? images.length -1 : startingIndex;
  }
  else {
    startingIndex++;
    
    startingIndex = startingIndex > images.length -1 ? 0 : startingIndex;
  }

  let indexList = [];
  let suppIndex = 0;

  for (let i = startingIndex; i < startingIndex + sliderLength; i++) {
    if (typeof images[i] !== "undefined") {
      indexList.push(i);
    }
    else {
      indexList.push(suppIndex);
      suppIndex++;
    }
  }
  console.log(indexList);
  return indexList;
};
