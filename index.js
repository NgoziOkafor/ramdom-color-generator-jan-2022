import chalk from 'chalk';
import randomColor from 'randomcolor';

function generateRandomColor() {
  const randomNumbers = '0123456789abcdef';

  let generatedRandomColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomHexColor = Math.floor(Math.random() * randomNumbers.length);
    generatedRandomColor += randomNumbers[randomHexColor];
  }
  return generatedRandomColor;
}
const hexColor = generateRandomColor();

if (!process.argv[2]) {
  const colorBox = `###############################
###############################
###############################
######                    #####
######   (${hexColor})        #####
######                    #####
###############################
###############################
###############################`;

  console.log(chalk.hex(hexColor)(colorBox));
} else if (process.argv.length >= 2) {
  if (process.argv[2] && process.argv[3]) {
    const colorHue = process.argv[2];
    const colorLuminosity = process.argv[3];
    const hueColorHashes = randomColor({
      luminosity: colorLuminosity,
      hue: colorHue,
    });

    const colorBoxHashes = `###############################
###############################
###############################
######                    #####
######   (${hueColorHashes})        #####
######                    #####
###############################
###############################
###############################`;

    console.log(chalk.hex(hueColorHashes)(colorBoxHashes));
  } else {
    const colorHue = process.argv[2];
    const hueColorHashes = randomColor({
      hue: colorHue,
    });
    const colorBoxHashes = `###############################
###############################
###############################
######                    #####
######   (${hueColorHashes})        #####
######                    #####
###############################
###############################
###############################`;

    console.log(chalk.hex(hueColorHashes)(colorBoxHashes));
  }
}
