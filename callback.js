function addition(nombre, cb ) {
    cb(nombre + 10)
}


function main() {
  addition(12, function(result) {
        console.log(result)
  })
}

main()