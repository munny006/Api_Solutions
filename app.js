const handleSearch = () => {
    const inputValue = document.getElementById("input-value").value;
    if (inputValue) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.title === "No Definitions Found") {
            alert(data.message);
          } else {
            displayResult(data);
          }
        });
    } else {
      alert("empty input field ");
    }
  };
  
  const displayResult = (data) => {
    const parent = document.getElementById("audio-container");
    data[0].phonetics.forEach((element) => {
      const audio = document.createElement("audio");
      audio.src = element.audio;
  
      const button = document.createElement("button");
      button.innerHTML = "Play";
      button.onclick = () => {
        audio.play();
      };
      const container = document.createElement("div");
      container.appendChild(button);
      container.appendChild(audio);
  
      parent.appendChild(container);
    });
  };


  const loadGithubUsers = () =>{
    fetch("https://api.github.com/users?per_page=10")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  };