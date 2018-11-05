const printInFrame = (size, header) => {
    console.log('*'.repeat(size));
    console.log(header);
    console.log('*'.repeat(size));
    console.log(''.blink('Test'))
  };

  printInFrame(5, 'Hey')