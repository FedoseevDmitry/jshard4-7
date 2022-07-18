const getBotRange = (startRange, endRange) => {

  let userAnswers = [];
  let userTries = Math.floor((endRange - startRange) * 0.3);
  const botNumber = Math.floor(Math.random() * (endRange - startRange + 1))
  + startRange;

  let botFlag = false;

  while (botFlag === false) {

    let userNumber = Number(prompt(
      `Я загадал число от ${startRange} до ${endRange}. Угадаешь?`, 0));

    if (userTries === 0) {

      alert(`Попытки закончились. Вы проиграли.
      Загаданное число было: ${botNumber}`);

      break;
    };

    if (userNumber === botNumber) {
      botFlag = true;

      alert(`Поздравляю, вы угадали число ${botNumber}`);

      break;
    } if ((userNumber !== botNumber) && (userNumber > botNumber)) {
        if (!userAnswers.includes(userNumber)) {
          userAnswers.push(userNumber);
          userTries--;
        } else {
          alert(`Вы уже вводили число ${userNumber}. Попытка не сгорает.`);
        };

      alert(`Вы не угадали, попробуйте еще раз. Загаданное число меньше.
      Попыток осталось: ${userTries + 1}`);

      } if ((userNumber !== botNumber) && (userNumber < botNumber)) {
          if (!userAnswers.includes(userNumber)) {
            userAnswers.push(userNumber);
            userTries--;
          } else {
            alert(`Вы уже вводили число ${userNumber}. Попытка не сгорает.`);
          };

        alert(`Вы не угадали, попробуйте еще раз. Загаданное число больше.
        Попыток осталось: ${userTries + 1}`);
    };
  };
};

getBotRange(Number(prompt('Укажите первое число:', 0)),
Number(prompt('Укажите второе число:', 100)));