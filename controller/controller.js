const express = require ('express')
const router = express.Router();
	
const posts = require('../posts/posts');



router.get("/", (req,res)=>{
  let filteredPosts = posts;

  if (req.query.tags){
    filteredPosts =posts.filter(
      post => post.tags.includes(req.query.tags)
    );
  }
  
  res.json(filteredPosts);
  

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

  const id= parseInt(req.params.id)

  const post = posts.find(post => post.id ===id)

  if (!post){
    res.status(404);
    
    return res.json({
      status: 404,
      error: "not found",
      message: "post non trovato"
    })
  }

  posts.splice(posts.indexOf(post), 1);

res.sendStatus(204);
    
});





module.exports =router;