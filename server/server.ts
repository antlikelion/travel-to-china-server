import config from './config/development'
import http from 'http'
import Koa from 'koa'
import router from './routes'
import bodyParser from 'koa-bodyparser'

const server = new Koa()

const {
    server: { httpPort }
} = config

server.use(bodyParser()).use(router.routes()).use(router.allowedMethods())
// 라우팅된 시점에서 바디파서를 쓸 수 있어야 하기 때문에 당연히 바디파서를 먼저 호출해야 함

export const initServer = () => {
    console.log(`서버 구동 환경 : ${process.env.NODE_ENV} PORT : ${httpPort}`)
    http.createServer(server.callback()).listen(httpPort, () => {
        console.log(`[${process.env.NODE_ENV}] HTTP Server on Port ${httpPort}`)
    })
}

