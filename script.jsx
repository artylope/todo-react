class App extends React.Component{

    constructor(){
        super()

        this.state = {
            todos : todosData
        }
    }

    render(){
        return(

            <div className="container">
                this is container
                <Form/>
                <TodoList todos={this.state.todos}/>
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
        console.log('in todos list component');
        console.log(this.props.todos);

        const todoComponents = this.props.todos.map( function(item,index){
            return(
                <TodoItem key = {index} item={item}/>
            )
        })

        return(
            <div className="list">
            <h1>Todo list</h1>
                {todoComponents}
            </div>
        )
    }
}

class TodoItem extends React.Component{

    render(){
        console.log(this.props.item.task)

        let updatedTime = this.props.item.updated_at;
        let displayTime = moment(updatedTime).fromNow();

        return(

            <div className={this.props.item.done ? 'list-item completed' : 'list-item' }>
                <i className={this.props.item.done ? 'bx bx-checkbox-checked' : 'bx bx-checkbox' }></i>
                <span className="item-task">{this.props.item.task}</span>
                <span className="item-date">{displayTime}</span>
                <div className="trash"><i className='bx bx-trash-alt'></i></div>
            </div>
            
        )
    }
}

class DeletedItemsList extends React.Component{

    render(){
        return(
            <div className="deleted-list">
                <h2>Deleted Items</h2>

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
