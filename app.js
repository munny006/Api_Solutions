const handleSearch = () =>{
    const inputValue = document.getElementById('input-value').value;
    if(inputValue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then((res)=>res.json())
    .then((data)=>{
       if(data.title == 'No Definitions Found' ){
        alert(data.message);
       }
       else{
        displayResult(data)
       }
    });
    }
    else{
        alert('Empty Found');
    }
};
const displayResult = (data) => {
    const parent = document.getElementById('audio-container');
   data[0].phonetics.forEach((element)=>{
    const audio = document.createElement('audio');
    audio.src = element.audio;
    console.log(audio);
    parent.appendChild(audio);
   });
  
}