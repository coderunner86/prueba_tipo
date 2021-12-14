/*Script para validar el tipo de archivo independientemente de su extensión
caso de uso: El archivo (python.jpg) inicialmente era un ejecutable, sin embargo, un evento 
cambió su extensión. El usuario puede conocerla a pesar de la modificación.
*/

let mime = require('mime');   
 
const getMimeFromPath = (filePath) => {
    const execSync = require('child_process').execSync;
    const mimeType = execSync('file --mime-type -b "' + filePath + '"').toString();
    return mimeType.trim();
}

filePath = './python.jpg'
res = getMimeFromPath(filePath);

console.log(`El archivo es de tipo ${res}`)

