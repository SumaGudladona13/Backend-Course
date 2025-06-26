import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors());
app.get('/api/jokes',(req,res)=>{
    const jokes=[
    {
        id:1,
        title:'A joke',
        content:'This is a joke'
    },
    {
        id:2,
        title:'Another joke',
        content:'This is a second joke'
    },
    {
        id:3,
        title:'Third joke',
        content:'This is a third joke'
    },
    {
        id:4,
        title:'Fourth joke',
        content:'This is a fourth joke'
    }
];
res.send(jokes);
});

app.get('/', (req,res)=>{
    res.send('Server is Ready!');
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});