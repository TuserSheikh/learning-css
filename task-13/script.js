const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");

for (let post of posts) {
  let articleEL = document.createElement("article");

  // head
  let divContainerEl = document.createElement("div");
  divContainerEl.classList.add("container");

  let divPostUserEl = document.createElement("div");
  divPostUserEl.classList.add("post-user");

  let divPostUserImgEl = document.createElement("img");
  divPostUserImgEl.classList.add("post-user-img");
  divPostUserImgEl.src = post.avatar;

  let divPostUserDetailsEl = document.createElement("div");
  divPostUserDetailsEl.classList.add("post-user-details");

  let h2NameEl = document.createElement("h2");
  let h2Text = document.createTextNode(post.name);
  h2NameEl.appendChild(h2Text);

  let pLocationEl = document.createElement("p");
  let pText = document.createTextNode(post.location);
  pLocationEl.appendChild(pText);

  divPostUserDetailsEl.appendChild(h2NameEl);
  divPostUserDetailsEl.appendChild(pLocationEl);

  divPostUserEl.appendChild(divPostUserImgEl);
  divPostUserEl.appendChild(divPostUserDetailsEl);

  divContainerEl.appendChild(divPostUserEl);

  articleEL.appendChild(divContainerEl);

  // body
  let divPostImgEl = document.createElement("img");
  divPostImgEl.classList.add("post-img");
  divPostImgEl.src = post.post;

  articleEL.appendChild(divPostImgEl);

  // foot
  let containerEl = document.createElement("div");
  containerEl.classList.add("container");

  let divPostDetailsEl = document.createElement("div");
  divPostDetailsEl.classList.add("post-details");

  let divPostDetailsReactionsEl = document.createElement("div");
  divPostDetailsReactionsEl.classList.add("post-details-reactions");

  let images = ["images/icon-heart.png", "images/icon-comment.png", "images/icon-dm.png"];
  for (let image of images) {
    let img = document.createElement("img");
    img.src = image;
    divPostDetailsReactionsEl.appendChild(img);
  }

  // post details likes
  let pDetailsLikesEl = document.createElement("p");
  pDetailsLikesEl.classList.add("post-details-likes");
  let pDetailsLikesText = document.createTextNode(post.likes + " likes");
  pDetailsLikesEl.appendChild(pDetailsLikesText);

  // post details comments
  let pDetailsCommentsEl = document.createElement("p");
  pDetailsCommentsEl.classList.add("post-details-comments");
  let spanPostDetailsCommentsUserNameEl = document.createElement("span");
  spanPostDetailsCommentsUserNameEl.classList.add("post-details-comments-user-name");
  let spanPostDetailsCommentsUserNameText = document.createTextNode(post.username + " ");
  spanPostDetailsCommentsUserNameEl.appendChild(spanPostDetailsCommentsUserNameText);

  let pDetailsCommentsText = document.createTextNode(post.comment);

  pDetailsCommentsEl.appendChild(spanPostDetailsCommentsUserNameEl);
  pDetailsCommentsEl.appendChild(pDetailsCommentsText);

  divPostDetailsEl.appendChild(divPostDetailsReactionsEl);
  divPostDetailsEl.appendChild(pDetailsLikesEl);
  divPostDetailsEl.appendChild(pDetailsCommentsEl);

  containerEl.appendChild(divPostDetailsEl);

  articleEL.appendChild(containerEl);

  mainEl.appendChild(articleEL);
}
