require('dotenv').config

const express = require('express')
const app = express()
const port = 3000

const gitbhubData={
  "login": "SumaGudladona13",
  "id": 183385725,
  "node_id": "U_kgDOCu4-fQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/183385725?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SumaGudladona13",
  "html_url": "https://github.com/SumaGudladona13",
  "followers_url": "https://api.github.com/users/SumaGudladona13/followers",
  "following_url": "https://api.github.com/users/SumaGudladona13/following{/other_user}",
  "gists_url": "https://api.github.com/users/SumaGudladona13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SumaGudladona13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SumaGudladona13/subscriptions",
  "organizations_url": "https://api.github.com/users/SumaGudladona13/orgs",
  "repos_url": "https://api.github.com/users/SumaGudladona13/repos",
  "events_url": "https://api.github.com/users/SumaGudladona13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SumaGudladona13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-30T12:54:20Z",
  "updated_at": "2025-06-25T13:55:30Z"
}

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('sumadotcom')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login on this web!</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai and Code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(gitbhubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
