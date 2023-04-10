import * as fs from 'fs'
export default async function handler(req,res){
    let message = ''
    if(req.method === "POST"){
        let data = await fs.promises.readdir('contactData')
        message = msg(req.body.name,req.body.email,req.body.message)
        fs.promises.writeFile(`contactData/${data.length+1}.json`, message)
        res.status(200).json(message)
    }
}
function msg(name,email,message){
    return`Name:${name}\nEmail:${email}\nMessage:${message}\nDateTime:${new Date().toLocaleString()}`
}