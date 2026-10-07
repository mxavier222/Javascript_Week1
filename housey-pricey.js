// Peter

const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;

const peterVolume = peterWidth * peterDepth * peterHeight;

const peterHousePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;

if (peterActualPrice > peterHousePrice) {
  console.log("Peter is paying too much!");
} else {
  console.log("Peter is paying too little!");
}

// Julia

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

const juliaVolume = juliaWidth * juliaDepth * juliaHeight;

const juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaActualPrice > juliaHousePrice) {
  console.log("Julia is paying too much!");
} else {
  console.log("Julia is paying too little!");
}
