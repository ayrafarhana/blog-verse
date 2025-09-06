const sampleData = async()=>{
    try{
        let response=await fetch("htttps://wwww.google.com")
        console.log(response)
    }catch(err){
        console.log("error accessing google:"+err)
    }
}
sampleData()