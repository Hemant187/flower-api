const express = require('express')
const app = express()
const cors = require('cors')
const PORT  = 8000
app.use(cors())
const flower = [
    {'id':'1',
     'url':'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'2',
     'url':'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'3',
     'url':'https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'4',
     'url':'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'5',
     'url':'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'6',
     'url':'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'7',
     'url':'https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'8',
     'url':'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'9',
     'url':'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'10',
     'url':'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'11',
     'url':'https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'12',
     'url':'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'13',
     'url':'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'14',
     'url':'https://images.pexels.com/photos/70330/pexels-photo-70330.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'15',
     'url':'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'16',
     'url':'https://images.pexels.com/photos/122734/pexels-photo-122734.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'17',
     'url':'https://images.pexels.com/photos/1369068/pexels-photo-1369068.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'18',
     'url':'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'19',
     'url':'https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {'id':'20',
     'url':'https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    
    
]

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/flower', (request, response) => {
    response.json(flower)
})

app.get('/api/flower/random', (request,response) => {
    response.json(flower[Math.ceil(Math.random() * 20) - 1])
})
app.listen(process.env.PORT || PORT)