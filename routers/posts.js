const express = require ('express')
const router = express.Router();
	
const posts = require('../controllers/controller');



router.get("/", (req,res)=>{
  let filteredPosts = posts;

  if (req.params.id){
    filteredPosts =posts.filter(
      post => post.id.includes(req.params.id)
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
/* const deletedPost = posts.splice(posts.id); */
res.send(`elimina un post${req.params.id}`);
    
});




module.exports =router;