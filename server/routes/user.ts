import Router = require('koa-router')

const router = new Router()

const users = [
    {
        id: 1,
        name: "인우",
        age: 28
    },
    {
        id: 2,
        name: "주원",
        age: 23
    }
]

router.get('/', ctx => {
    if (ctx.request.query.name) {
        const userToDisplay = users.filter(user => user.name === ctx.request.query.name)
        console.log(userToDisplay)
        if (userToDisplay.length > 0) {
            return ctx.body = userToDisplay
        }
        ctx.throw(404, '해당 이름의 유저가 없습니다')
    } else {
        return ctx.body = users
    }

})

router.get('/:id', ctx => {
    ctx.body = users[ctx.params.id]
})

router.post('/', ctx => {
    console.log(ctx.request.body)
    const { id, name, age } = ctx.request.body
    if (!id) {
        ctx.throw(400, 'id is required field')
    }
    if (!name) {
        ctx.throw(400, 'name is required field')
    }
    if (!age) {
        ctx.throw(400, 'content is required field')
    }
    users.push(ctx.request.body)
    ctx.response.body = users;
})

router.delete('/:id', ctx => {
    const indexOfUser = users.findIndex((user, index, array) => {
        return user.id === parseInt(ctx.params.id)
    })
    if (indexOfUser < 0) {
        return ctx.throw(404, "해당 id의 유저가 존재하지 않습니다.")
    }
    ctx.body = users.splice(indexOfUser, 1)
})

export default router

