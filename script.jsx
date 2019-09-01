class App extends React.Component{

    constructor(){
        super()

        this.state = {
            todos : todosData,
            task: "",
            deletedTodos: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnterInput = this.handleEnterInput.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);

        this.handleCheckDone = this.handleCheckDone.bind(this);
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
    handleCheckDone(index){
        // console.log('you checked/unchecked done', index);

        let allTodos = this.state.todos;

        if(allTodos[index].done === true){
            allTodos[index].done = false;
            allTodos[index].updated_at = moment().format();
        } else if (allTodos[index].done === false){
            allTodos[index].done = true;
            allTodos[index].updated_at = moment().format();
        }

        this.setState({

            todos: allTodos

        });

    }

    handleDelete(index){
        // console.log('you deleted this todo', index);



        let allTodos = this.state.todos;
        let deletedTodo = allTodos[index];
        let deletedTodos = this.state.deletedTodos;

        //update the time of the deleted todo
        deletedTodo.updated_at = moment().format();

        deletedTodos.push(deletedTodo);

        allTodos.splice(index,1);

        this.setState({

            todos: allTodos,
            deletedTodos: deletedTodos

        });

        console.log('deleted todos ');
        console.log(this.state.deletedTodos);

    }


    render(){
        return(

            <div className="container">
                <Form
                    onClick= {this.handleClickAdd}
                    onKeyDown= {this.handleEnterInput}
                    onChange={this.handleInputChange}
                    newTask= {this.state.task}/>
                <TodoList
                    todos={this.state.todos}
                    handleCheckDone={this.handleCheckDone}
                    handleDelete={this.handleDelete}
                    />
                <DeletedItemsList
                    deletedTodos={this.state.deletedTodos}
                />
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
        console.log('in todos list component');
        console.log(this.props);
        // console.log(this.props.todos);

        const todoComponents = this.props.todos.map( (item,index) => {
            return(
                <TodoItem
                    key = {index}
                    index = {index}
                    item = {item}
                    handleCheckDone={this.props.handleCheckDone}
                    handleDelete = {this.props.handleDelete}
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
        console.log("in todo item")
        console.log(this.props)

        let updatedTime = this.props.item.updated_at;
        let displayTime = moment(updatedTime).fromNow();
        let index = this.props.index;
        let item = this.props.item;

        return(

            <div
            className={item.done ? 'list-item completed' : 'list-item' }>
                <i
                    className={item.done ? 'bx bx-checkbox-checked' : 'bx bx-checkbox' }
                    onClick={()=>{this.props.handleCheckDone(index)}}></i>
                <span
                    className="item-task"
                    onClick={()=>{this.props.handleCheckDone(index)}}>{item.task}</span>
                <span className="item-date">{displayTime}</span>
                <div
                 className="trash"
                 onClick={()=>{this.props.handleDelete(index)}}>
                 <i className='bx bx-trash-alt'></i></div>
            </div>

        )
    }
}

class DeletedItemsList extends React.Component{

    render(){

        const deletedTodoComponents = this.props.deletedTodos.map( (item,index) => {
            return(
                <TodoItem
                    key = {index}
                    index = {index}
                    item = {item}
                    handleCheckDone={this.props.handleCheckDone}
                    handleDelete = {this.props.handleDelete}
                    />

            )
        })

        return(
            <div className="deleted-list">
                <h2>Deleted Items</h2>
                {deletedTodoComponents}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
