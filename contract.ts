import { Ask } from "./deps.ts"; 

const ask = new Ask()

const contractInfo = await ask.prompt([
  {
    name: 'customer',
    type: 'input',
    message: 'Who is the customer?'
  },
  {
    name: 'freelancer',
    type: 'input',
    message: 'Who is the freelancer?'
  },
  {
    name: 'date',
    type: 'input',
    message: 'What is the effective date?'
  },
  {
    name: 'services',
    type: 'input',
    message: 'Who are the services provided?'
  },
])

const contractTemplate = await Deno.readTextFile('./template.txt')

const contract = Object.entries(contractInfo).reduce((result, [a, b]) => result.replaceAll(`[${a}]`, b), contractTemplate)


await Deno.writeTextFile(`${contractInfo.customer}-${contractInfo.date}-contract.txt`, contract)


console.log('file successfully written')