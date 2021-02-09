const spinner = (time) => {
  const arr = ['|', '/', '-', '\\', '|', '/', '-'];
  for (let char of arr) {
    setTimeout(() => {
      process.stdout.write(`\r${char}  `);
    }, time);
    //how long it takes to spin
    time += 100;
  }
}

//time to start the spinner
spinner(1000)

