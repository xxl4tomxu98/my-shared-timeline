document.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("new-pic").addEventListener("click", () =>{
    document.querySelector(".loader").innerHTML = "Loading...."
    fetch("http://localhost:3000/kitten/image")
    .then(function(res){
      if(!res.ok) {
        throw res;
      }
      return res.json();
    })
   // .then(res => res.json())
    .then(data => {
    console.log(data);
    document.querySelector(".cat-pic").src = data.src;
    document.querySelector(".loader").innerHTML = ""
    })
    .catch( error => {
      //window.alert("Something went wrong. Please try again!");
      handleError(error);
    })
  });


  const option = {
      method: "PATCH", // using PATCH since we'll just be modifying status on server
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "UP vote"
      })
  }


  document.getElementById("upvote").addEventListener("click", () =>{

    fetch("http://localhost:3000/kitten/upvote", option)
        .then(function (res) {
            if (!res.ok) {
              throw res;
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector(".score").innerHTML = data.score;
        })
        .catch(error => {
            handleError(error);
        })
  })

  const optionDown    = {
        method: "PATCH", // using PATCH since we'll just be modifying the book's status
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        status: "Down vote"
        })
  }


  document.getElementById("downvote").addEventListener("click", () =>{

    fetch("http://localhost:3000/kitten/downvote", optionDown)
        .then(function (res) {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector(".score").innerHTML = data.score;
        })
        .catch(error => {
            handleError(error);
        })
  })

  document.querySelector(".comment-form").addEventListener("submit", (event) =>{
    event.preventDefault();
    let userComment = document.getElementById("user-comment").value;
    //let formdata = new FormData(document.querySelector(".comment-form"));
    //let userComment = formdata.get("user-comment");
    let data = JSON.stringify({comment: userComment });

    const optionsForm = {
      method: 'POST',
      body: data,
      headers: {
        "Content-type": "application/json"
      }
    }

      fetch("http://localhost:3000/kitten/comments", optionsForm)
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(objs => {
        let commentForm = document.querySelector(".comments");
        let commentContainer = document.createElement("ul");
        let commentButton = document.createElement("button");
        let newComment = document.createElement("li");
        newComment.innerHTML=objs.comments;
        commentButton.innerHTML="delete";
        commentContainer.appendChild(newComment);
        commentContainer.appendChild(commentButton);
        commentForm.appendChild(commentContainer);
        //receiveComments(objs);
      })
      .then(() => clearInput())
      .catch(error => handleError(error));
  })


    // function receiveComments(objs){
    //     let commentForm = document.querySelector(".comments");
    //     objs.comments.forEach( com => {
    //         let newName = document.createElement("li");
    //         newName.innerHTML = com;
    //         commentForm.appendChild(newName);
    //     })
    // }


    document.querySelector(".comments").addEventListener("click", event =>{
      let commentForm = document.querySelector(".comments");
      let target = event.target;
      let index = commentForm.indexOf(target);
      let data = JSON.stringify({id: index});

      const optionDelete = {
        method: 'PATCH',
        body: data,
        headers: {
          "Content-type": "application/json"
        }
      }

        fetch("http://localhost:3000//kitten/comments/:id", optionDelete)
        .then(res => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then(objs => {
          let commentForm = document.querySelector(".comments");
          let commentContainer = document.createElement("ul");
          let commentButton = document.createElement("button");
          let newComment = document.createElement("li");
          newComment.innerHTML=objs.comments;
          commentButton.innerHTML="delete";
          commentContainer.appendChild(newComment);
          commentContainer.appendChild(commentButton);
          commentForm.appendChild(commentContainer);
          //receiveComments(objs);
        })
        .then(() => clearInput())
        .catch(error => handleError(error));
    })





  function clearInput() {
    let input = document.getElementById('user-comment');
    input.value = '';
  }

  function handleError(err) {
    let randomMessage = document.createElement("div");
    randomMessage.setAttribute("class", "error");
    if(err.json){
      err.json()
      .then(errRes => {
        document.querySelector(".error").innerHTML = errRes.message;
      })
    } else {
      console.log(err);
    }
  }
});
