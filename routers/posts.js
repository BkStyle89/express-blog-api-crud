const express = require ('express')
const router = express.Router();

// Array of posts
const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content of post 1',
    image: '/images/post1.jpg',
    tags: ['tag1', 'tag2']
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content of post 2',
    image: '/images/post2.jpg',
    tags: ['tag3', 'tag4']
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content of post 3',
    image: '/images/post3.jpg',
    tags: ['tag5', 'tag6']
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Content of post 4',
    image: '/images/post4.jpg',
    tags: ['tag7', 'tag8']
  },
  {
    id: 5,
    title: 'Post 5',
    content: 'Content of post 5',
    image: '/images/post5.jpg',
    tags: ['tag9', 'tag10']
  }
];



router.get("/", (req,res)=>{
  res.send(posts);
  

});



router.get ("/:id", (req,res)=>{
console.log(req.params);
console.log(req.params.id);

  const post = posts.find(post => post.id === parseInt(req.params.id));
  if(post){
    res.json(post);
  } else {
    res.status(404).json({message: "post not found"});
  }
});

router.post ("/",(req,res)=>{
  res.send("creazione nuovo post");
    const newPost = posts.push(posts.index)
    console.log(newPost);
    
});

router.put("/:id",(req,res)=>{
  res.send(`modifica del post${req.params.id}`);
});

router.patch("/:id",(req,res)=>{
  res.send(`modifica parziale del post ${req.params.id}`);
});

router.delete("/:id",(req,res)=>{
/* const deletedPost = posts.splice(posts.id); */
res.send(`elimina un post${req.params.id}`);
    
});




module.exports =router;