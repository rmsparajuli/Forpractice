let x = 0;
while (x < 10) {
  x++;
  if (x == 5) {
    // 5 will not print because it calls direct while loop from here;
    continue;
  }
  console.log(x);
}
