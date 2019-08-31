
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }

    }
    render(){
        const todoComponents = this.state.todos.map(function(item, index){
            return <TodoItem id={item.id} key={index} item = {item}/>
        })
        return(
            <div>
                {todoComponents }
            </div>
        )
    }
}

class TodoItem extends React.Component{

    render(){
        return(
            <div>
                <input
                    id = {this.props.item.id}
                    type="checkbox"
                    checked = {this.props.item.done}
                    onChange = {function(event){
                        console.log("done " , event.target);
                    }}
                />
                    {this.props.item.task}
            </div>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
