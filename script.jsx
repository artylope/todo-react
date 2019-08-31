
class App extends React.Component{
    render(){
        const todoComponents = todosData.map(function(item, index){
            return <TodoItem key={index} item = {item}/>
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
                <input type="checkbox" checked ={this.props.item.done}/> {this.props.item.task}
            </div>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
