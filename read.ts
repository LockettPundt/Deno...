const fileNames = Deno.args

if (fileNames.length > 0) {
  for (const filename of fileNames) {
    const file = await Deno.readTextFile(filename)
    console.log(file)
  }
} else {
  console.log('Enter an argument')
}
