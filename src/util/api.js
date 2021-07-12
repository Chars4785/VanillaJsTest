const PREFIX ="https://localhost:3000"
async function request({ url,method, body }){
    try{
        const res = await fetch(url ,{
            method,
            body
        })
        if( res.ok ){
            return await res.json()    
        }else{
            throw await res.json();
        }
    }catch(e){
        throw { 
            message: e.message,
            code: e.code
        }
    }
}


// const API = {
//     getFile: async ()=>{
//         try{
//             const data = await request({
//                 url:`${PREFIX}/getFile`,
//                 method:'GET',
//             })
//             return data
//         }catch(e){
//             return e;
//         }
//     },
// }


const API = {
    getFile: async ()=>{
        return [ {name:'고양이',value:'images/sample_image.jpg'},
        {name:'파일',value:'images/file.png'}]
    },
}

export default API