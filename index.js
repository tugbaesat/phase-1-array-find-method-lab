// code your solution here

function superbowlWin(arr) {
  const winResults = arr.find((item) => {
    return item.result === "W";
  });
  if (winResults) {
      return winResults.year;
  }

}









