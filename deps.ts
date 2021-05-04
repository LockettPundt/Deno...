// deps.ts allows you import all deps into one place and use for exporting instead of importing from the url in random files.

import Ask from "https://deno.land/x/ask@1.0.5/mod.ts"; // /ask/ gets latest version but doesn't pin it to a specific version. ask@1.0.5 keeps it at that version
import * as Oak from 'https://deno.land/x/oak@v7.3.0/mod.ts'


export {
  Ask,
  Oak,
}