const express = require('express')
const next = require('next')

// const routes = require("../server/routes")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production' //Tells us to read from node env, is a boolean value
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        // server.use("/api", require("./routes/users"))

        server.post('/register', (req, res) => {
            app.render(req, res, '/register', { data: "registering..." })
        })

        server.get("*", (req, res) => { //* getting this wild card means grab any route
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
            .catch(ex => {
                console.error(ex.stack)
                process.exit(1)
            })
    })

