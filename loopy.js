function loopy(min, max){
    var start = min;
    while(start <= max){
      if(start % 3 === 0){ console.log("Loopy") }
      if(start % 4 === 0){ console.log("Lighthouse") }
      if(start % 3 === 0 && start % 4 === 0){ console.log("LoopyLighthouse") }
      console.log(start)
      start++
    }
  }
  loopy(100, 200)