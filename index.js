async function quiz() {
  const response = eval(await (await fetch('//cdn.jsdelivr.net/npm/sweetalert2@11')).text());
}

quiz();
