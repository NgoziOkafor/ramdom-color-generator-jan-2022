import chalk from 'chalk';

function generateRandomColor() {
  const randomNumbers = '0123456789abcdef';

  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomHexColor = Math.floor(Math.random() * randomNumbers.length);
    randomColor += randomNumbers[randomHexColor];
  }
  return randomColor;
}
const hexColor = generateRandomColor();

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
