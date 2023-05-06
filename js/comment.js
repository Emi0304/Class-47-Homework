document.getElementById("submitBtn").addEventListener("click" , function( ){
    const newComment = document.getElementById("commentText");
    const p = document.createElement("p");
    p.innerText = newComment.value;

    const commentSection = document.getElementById("comment-section");
    commentSection.appendChild(p);

    const textArea = document.getElementById("commentText");
    textArea.value = ""
  })

