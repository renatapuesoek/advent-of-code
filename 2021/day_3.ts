export function calculatePowerConsumption(input) {
  const diagnosticReport = input.split("\n");
  const numBits = diagnosticReport[0].length;

  // Calculate the gamma rate by finding the most common bit at each position
  let gammaRate = "";
  for (let i = 0; i < numBits; i++) {
    const bitCounts = [0, 0];
    for (let j = 0; j < diagnosticReport.length; j++) {
      const bit = Number(diagnosticReport[j].charAt(i));
      bitCounts[bit]++;
    }
    const bitToUse = bitCounts[0] > bitCounts[1] ? 0 : 1;
    gammaRate += bitToUse;
  }

  // Calculate the epsilon rate by finding the least common bit at each position
  let epsilonRate = "";
  for (let i = 0; i < numBits; i++) {
    const bitCounts = [0, 0];
    for (let j = 0; j < diagnosticReport.length; j++) {
      const bit = Number(diagnosticReport[j].charAt(i));
      bitCounts[bit]++;
    }
    const bitToUse = bitCounts[0] < bitCounts[1] ? 0 : 1;
    epsilonRate += bitToUse;
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

/* To find oxygen generator rating, determine the most common value (0 or 1) in the current bit position, and keep only numbers with that bit in that position. If 0 and 1 are equally common, keep values with a 1 in the position being considered.
To find CO2 scrubber rating, determine the least common value (0 or 1) in the current bit position, and keep only numbers with that bit in that position. If 0 and 1 are equally common, keep values with a 0 in the position being considered. */

export function getLifeSupportRating(input) {
  const diagnosticReport = input.split("\n");
  const numBits = diagnosticReport[0].length;

  let oxygenGeneratorRating = [...diagnosticReport];

  for (let i = 0; i < numBits; i++) {
    const bitCounts = [0, 0];
    for (let j = 0; j < oxygenGeneratorRating.length; j++) {
      const bit = Number(oxygenGeneratorRating[j].charAt(i));
      bitCounts[bit]++;
    }
    const bitToUse = bitCounts[0] > bitCounts[1] ? "0" : "1";
    oxygenGeneratorRating = oxygenGeneratorRating.filter(
      (r) => r[i] === bitToUse
    );
    if (oxygenGeneratorRating.length === 1) {
      break;
    }
  }

  let CO2ScrubberRating = [...diagnosticReport];

  for (let i = 0; i < numBits; i++) {
    const bitCounts = [0, 0];
    for (let j = 0; j < CO2ScrubberRating.length; j++) {
      const bit = Number(CO2ScrubberRating[j].charAt(i));
      bitCounts[bit]++;
    }
    const bitToUse = bitCounts[0] <= bitCounts[1] ? "0" : "1";
    CO2ScrubberRating = CO2ScrubberRating.filter((r) => r[i] === bitToUse);
    if (CO2ScrubberRating.length === 1) {
      break;
    }
  }

  return (
    parseInt(oxygenGeneratorRating[0], 2) * parseInt(CO2ScrubberRating[0], 2)
  );
}
