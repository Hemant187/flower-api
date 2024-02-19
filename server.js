const express = require('express')
const app = express()
const cors = require('cors')
const PORT  = 8000
app.use(cors())
const flower = [
    {'id':'1',
     'url':'https://www.pexels.com/photo/close-up-photo-of-blue-hydrangeas-in-bloom-53135/'
    },
    {'id':'2',
     'url':'https://www.pexels.com/photo/close-view-of-pink-flowers-with-water-droplets-2251822/'
    },
    {'id':'3',
     'url':'https://www.pexels.com/photo/pink-red-yellow-petaled-flower-in-close-up-shot-85773/'
    },
    {'id':'4',
     'url':'https://www.pexels.com/photo/close-up-photograph-of-flowers-931177/'
    },
    {'id':'5',
     'url':'https://www.pexels.com/photo/yellow-sunflower-macro-photographyt-46216/'
    },
    {'id':'6',
     'url':'https://www.pexels.com/photo/red-roses-1187079/'
    },
    {'id':'7',
     'url':'https://www.pexels.com/photo/red-squirrel-on-brown-table-top-460775/'
    },
    {'id':'8',
     'url':'https://www.pexels.com/photo/white-daisy-flower-67857/'
    },
    {'id':'9',
     'url':'https://www.pexels.com/photo/person-holding-yellow-black-eyed-susan-flowers-in-bloom-1697912/'
    },
    {'id':'10',
     'url':'https://www.pexels.com/photo/photo-of-red-and-white-petaled-flowers-1369068/'
    },
    {'id':'11',
     'url':'https://www.pexels.com/photo/photo-of-daisy-flowers-1477166/'
    },
    {'id':'12',
     'url':'https://www.pexels.com/photo/red-rose-53141/'
    },
    {'id':'13',
     'url':'https://www.pexels.com/photo/close-up-of-pink-flowers-4622976/'
    },
    {'id':'14',
     'url':'https://www.pexels.com/photo/bed-of-orange-petaled-flower-462402/'
    },
    {'id':'15',
     'url':'https://www.pexels.com/photo/close-up-photography-of-multi-petaled-plants-in-clear-glass-vase-74512/'
    },
    {'id':'16',
     'url':'https://www.pexels.com/photo/red-and-pink-flower-wreath-3671650/'
    },
    {'id':'17',
     'url':'https://www.pexels.com/photo/close-up-photography-of-roses-1167050/'
    },
    {'id':'18',
     'url':'https://www.pexels.com/photo/close-up-photography-of-roses-1167050/'
    },
    {'id':'19',
     'url':'https://www.pexels.com/photo/selective-focus-photography-of-pink-peony-flowers-617967/'
    },
    {'id':'20',
     'url':'https://www.pexels.com/photo/white-red-orange-and-brown-flowers-931168/'
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