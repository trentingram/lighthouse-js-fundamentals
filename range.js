function range(start, end, step){
    var args = [...arguments];
    if(args.includes("undefined")){return []}
    if(start < 0 || start > end) { return [] }
    var arr = []
    for( var i = start; i <= end; i += step){
      arr.push(i)
    }
    
    return arr
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));