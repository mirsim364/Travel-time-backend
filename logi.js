app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Pikwares')
  .then(() => console.log('Connected!'));

  const db=mongoose.connection

  app.use(express.json())

  const storage = multer.memoryStorage(); // Store files in memory
  const upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 }, });


  const verifyToken=(req,res,next)=>{
    const token= req.headers['authorization'];
    // console.log(token,'token');

    if(!token){
        return res.status(403).json({ message: 'Token is not provided'})
    }

    jwt.verify(token,'abc',(err,decoded)=>{
        if(err){
            return res.status(401).json({message: 'Unauthorized: Invalid token'})
        }
        req.decoded= decoded
        console.log(req.decoded);
        next();
    });
  };

  const verifyAdmin = async (req, res, next) => {

    if (req.body.email === "admin@gmail.com" && req.body.password === "11111") {
      const token = jwt.sign({ id: express.response.id, email: express.response.email }, 'abc');
      res.locals.adminToken = token
      console.log('token: ',token);
    }
    next();

  };