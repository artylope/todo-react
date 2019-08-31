class App extends React.Component{

    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(

            <div className="container">
                this is container
                <Form/>
                <TodoList/>
                <DeletedItemsList/>
            </div>
        )

    }
}

class Form extends React.Component{

    render(){
        return(
            <div className="add-item">
                <input placeholder="New Task"/>
                <button>Add</button>
            </div>
        )
    }
}

class TodoList extends React.Component{

    render(){
        return(
            <div className="list">
            <h1>Todo list</h1>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}

class TodoItem extends React.Component{

    render(){
        return(
            <div className="list-item">
                x This is an item
            </div>
        )
    }
}

class DeletedItemsList extends React.Component{

    render(){
        return(
            <div className="deleted-list">
                <h2>Deleted Items</h2>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
