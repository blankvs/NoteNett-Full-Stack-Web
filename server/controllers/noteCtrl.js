

module.exports = {
    add: async(req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        const { text, completed } = req.body
        const results = await db.addTodo([ id, text, completed ])
        res.status(200).send(results)
    },
    edit: async (req, res) => {
        const db = req.app.get('db')
        const { id, completed } = req.body
        await db.updateTodoStatus( id, completed )
        res.sendStatus(200)
    },
    remove: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.body
        await db.deleteTodos( id ) 
        res.status(200)   
    },
    get: async (req, res) => { 
        const db = req.app.get('db')
        const { id } = req.session.user
        const notes = await db.getTodos( id )
        res.status(200).send(notes)
    }
}