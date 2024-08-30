const posts = [
  { title: "Post One", body: "This is Post one" },
  { title: "Post Two", body: "This is Post two" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error : something is wrong");
      }
    }, 2000);
  });
}
fetchUsers();
//   createPost({ title: "Post Three", body: "This is Post three" })
//     .then(getPosts)
//     .catch((err) => console.log(err));
// async function init() {
//   await createPost({ title: "Post Three", body: "This is Post three" });
//   getPosts();
// }
// init();
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
