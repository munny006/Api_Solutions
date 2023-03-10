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
      displayUser(result);
    });
  };
  
  const displayUser = (data) =>{
    const parent = document.getElementById('user-container');
    data.forEach(user =>{
      fetch(user.followers_url)
    .then(res =>res.json())
    .then(data=>{
     const div = document.createElement("div");
     div.classList.add("card")
     div.innerHTML = `
     <img src="${user.avatar_url}" class="card-img">
     <h4>${user.login}</h4>
     <div>Followers : </div>
     <img src="${data[0].avatar_url}" class="card-imgf">
     <img src="${data[1].avatar_url}" class="card-imgfg">
     `;
     parent.appendChild(div);

    });
    });
  };