if (process.argv.length < 4 || process.argv.length > 5) {
  console.log('2 or 3 parameters needed')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

if (!isNaN(process.argv[3])) {
  console.log(`Error: ${process.argv[3]} is not a string.`)
  process.exit(1)
}

if (!isNaN(process.argv[4])) {
  console.log(`Error: ${process.argv[4]} is not a string.`)
  process.exit(1)
}

if (process.argv.length === 5 && process.argv[4] !== '-r') {
  console.log(`Error: ${process.argv[4]} is not the correct reverse string`)
  process.exit(1)
}


const pyramid = (nbBase, string, r) => {
  if (!r) {
    for (let i = 1; i <= nbBase; i++) {
      console.log(string.repeat(i))
    }
  }
  else {
    for (let i = nbBase; i >= 1; i--) {
      console.log(string.repeat(i))
    }
  }
}


const nbBase = Number(process.argv[2])
const string = process.argv[3]
const r = process.argv.length === 5 ? true : false

pyramid(nbBase, string, r)
