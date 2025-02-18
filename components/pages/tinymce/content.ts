export const TinyMCEReadme = `
install tinymce and its setup
\`\`\`
npm i tinymce // current version is 7.6.1
npm i @tinymce/tinymce-react // 5.1.1
npm i fs-extra
\`\`\`
note there are fs-extra for self-hosting tinymce setup (free version).

create \`postinstall.js\` script to copy TinyMCE to public directory
\`\`\`js
import fse from 'fs-extra';
import path from 'path';
const topDir = import.meta.dirname;
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), { overwrite: true });
\`\`\` 
update other files

\`package.json\` 
\`\`\`json
{
  "scripts": {
    // ...
    "postinstall": "node ./postinstall.js"
  }
}
\`\`\`
\`.gitignore\`
\`\`\`
/public/tinymce/
\`\`\`

run \`npm run postinstall\`

You're ready to go!
`