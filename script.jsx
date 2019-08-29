
class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task:"",
      list : [
          {
            "task": "Eat laksa",
            "done": "done",
            "created_at": "August 29th 2019, 1:40:58 pm",
            "updated_at": "August 29th 2019, 1:40:58 pm"
          },
          {
            "task": "Go swimming",
            "done": "done",
            "created_at": "August 29th 2019, 1:40:58 pm",
            "updated_at": "August 29th 2019, 1:40:58 pm"
          },

      ]
    }
  }

  addItem(event){
    // debugger;
    let newTask = this.state.task;
    // console.log('inside add item button. new task: ' + newTask );

    this.state.list.push({
       "task": newTask,
       "done": "false",
       "created_at": moment().format('MMMM Do YYYY, h:mm:ss a'),
       "updated_at": moment().format('MMMM Do YYYY, h:mm:ss a')
    })

    this.setState({

        list: this.state.list,
        task: "" 

    });

    // console.log(this.state.list);
  }

  changeHandler(){
    // debugger;
    // console.log('inside changeHandler. Word: ' + event.target.value);

    this.setState({
        task: event.target.value
    });
  }

  render() {
      // render the list with a map() here
      let listItems = this.state.list.map( (listTtem, index) => {

          if(listTtem.done === "false"){
              return (
                  <div className="list-item" key={index} >
                      <i class='bx bx-checkbox'></i>
                        {listTtem.task}
                </div>
                    );
          } else if(listTtem.done === "done"){
              return (
                  <div className="list-item completed" key={index} >
                      <i class='bx bx-checkbox-checked' ></i>
                        {listTtem.task}
                    </div>
                );
          }

        });
      // console.log("rendering");
      return (
         <div class="container">
            <div class="add-item">
                <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.task}/>
                <button onClick={(event)=>{this.addItem(event)}}>Add</button>
            </div>
            <div className="list">
                {listItems}
            </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
