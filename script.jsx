class App extends React.Component{

    constructor(){
        super()

        this.state = {
            todos : todosData,
            task: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnterInput = this.handleEnterInput.bind(this);

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //for the form input and padding

    handleInputChange(event){
        // console.log('Some text changed', event.target.value);
        let newTask = event.target.value;
        // console.log(newTask)

        this.setState({

            task: newTask

        });

    }

    handleEnterInput(event){

        if(event.key === "Enter"){
            // console.log('you pressed enter! new task: ', event.target.value);
            let newTask = event.target.value;
            let allTodos = this.state.todos;

            allTodos.push({
               "task": newTask,
               "done": "false",
               "created_at": moment().format(),
               "updated_at": moment().format()
            })

            this.setState({

                todos: allTodos

            });
        }
    }

    handleClickAdd(event){
        // console.log('you clicked add!', event.target.value);
        let newTask = this.state.task;
        let allTodos = this.state.todos;

        allTodos.push({
           "task": newTask,
           "done": "false",
           "created_at": moment().format(),
           "updated_at": moment().format()
        })

        this.setState({

            todos: allTodos

        });
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
                    onChange={this.handleInputChange}
                    newTask= {this.state.task}/>
                <TodoList
                    todos={this.state.todos}
                    onChange={this.handleChange}/>
                <DeletedItemsList/>
            </div>
        )

    }
}

class Form extends React.Component{

    render(){
        return(
            <div className="add-item">
                <input
                    onChange={(event) => this.props.onChange(event)}
                    onKeyDown={(event) => this.props.onKeyDown(event)}
                    placeholder="New Task"
                    value={this.props.newTask}
                    />
                <button onClick={(event) => this.props.onClick(event)}>Add</button>
            </div>
        )
    }
}

class TodoList extends React.Component{

    render(){
        // console.log('in todos list component');
        // console.log(this.props);
        // console.log(this.props.todos);

        const todoComponents = this.props.todos.map( function(item,index){
            return(
                <TodoItem
                    key = {index}
                    item={item}
                    // onChange={this.props.onChange}
                />
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
        // console.log("in todo item")
        // console.log(this.props)

        let updatedTime = this.props.item.updated_at;
        let displayTime = moment(updatedTime).fromNow();

        return(

            <div
            className={this.props.item.done ? 'list-item completed' : 'list-item' }
            // onChange={() => this.props.onChange(this.props.item.id)}
            >
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
