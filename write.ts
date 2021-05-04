const [name, ...rest] = Deno.args

await Deno.writeTextFile(`${name}.txt`, [...rest].join(' '))


