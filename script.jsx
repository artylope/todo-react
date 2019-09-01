class App extends React.Component{

    constructor(){
        super()

        this.state = {
            todos : todosData,
            deletedTodos : []
        }
    }

    //for the form input and padding

    handleInputChange(){
        console.log('Some text changed');
    }

    handleEnterInput(event){
        if(event.key === "Enter"){
            console.log('you pressed enter!');
        }
    }

    handleClickAdd(){
        console.log('you clicked add!');
    }


    //for interacting with the list item
    handleChange(){
        console.log('you checked/unchecked done');
    }

    handleDelete(){
        console.log('you deleted this todo');
    }


    render(){
        return(

            <div className="container">
                this is container
                <Form
                    onClick= {this.handleClickAdd}
                    onKeyDown= {this.handleEnterInput}
                    onChange={this.handleInputChange}/>
                <TodoList todos={this.state.todos} onChange={this.handleChange}/>
                <DeletedItemsList/>
            </div>
        )

    }
}

class Form extends React.Component{

    render(){
        return(
            <div className="add-item">
                <input onChange={this.props.onChange} onKeyDown={this.props.onKeyDown} placeholder="New Task"/>
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}

class TodoList extends React.Component{

    render(){
        console.log('in todos list component');
        console.log(this.props);
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
        console.log("in todo item")
        console.log(this.props)

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
