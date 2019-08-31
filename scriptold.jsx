
class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task:"",
      list : [
          {
            "task": "Eat laksa",
            "done": "true",
            "created_at": "2019-08-11T16:06:11+08:00",
            "updated_at": "2019-08-11T16:06:11+08:00"
          },
          {
            "task": "Go swimming",
            "done": "true",
            "created_at": "2019-08-22T16:08:11+08:00",
            "updated_at": "2019-08-22T16:08:11+08:00"
          },
          {
            "task": "Play Mario Kart",
            "done": "false",
            "created_at": "2019-08-25T16:06:11+08:00",
            "updated_at": "2019-08-25T16:06:11+08:00"
          },
          {
            "task": "Sing Karaoke",
            "done": "true",
            "created_at": "2019-08-26T16:08:11+08:00",
            "updated_at": "2019-08-26T16:08:11+08:00"
          },
          {
            "task": "Do homework",
            "done": "false",
            "created_at": "2019-08-28T16:08:11+08:00",
            "updated_at": "2019-08-28T16:08:11+08:00"
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
       "created_at": moment().format(),
       "updated_at": moment().format()
    })

    this.setState({

        list: this.state.list,
        task: ""

    });

    console.log(this.state.list);
  }

  changeHandler(event){
    // debugger;
    // console.log('inside changeHandler. Word: ' + event.target.value);

    this.setState({
        task: event.target.value
    });
  }

  enterHandler(event){
    // debugger;
    // console.log('inside changeHandler. Word: ' + event.target.value);

    // console.log(event.key);
    if (event.key === "Enter"){

        let newTask = this.state.task;
        // console.log('inside add item button. new task: ' + newTask );

        this.state.list.push({
           "task": newTask,
           "done": "false",
           "created_at": moment().format(),
           "updated_at": moment().format()
        })

        this.setState({

            list: this.state.list,
            task: ""

        });

        console.log(this.state.list);

    }
  }

  checkDone(index){
      console.log('clicked checkDone' + index);
      console.log(this.state.list[index].task);

      if (this.state.list[index].done === "false"){
          this.state.list[index].done = "true";
          this.state.list[index].updated_at = moment().format();
      } else if (this.state.list[index].done === "true") {
          this.state.list[index].done = "false";
          this.state.list[index].updated_at = moment().format();

      }

      this.setState({

          list: this.state.list

      });

      console.log(this.state.list);
  }

  delete(index){
      console.log('delete ' + this.state.list[index].task);

      this.state.list.splice(index,1);

      this.setState({

          list: this.state.list

      });
  }

  render() {
      // render the list with a map() here
      let listItems = this.state.list.map( (listItem, index) => {

          let updatedTime = listItem.updated_at;
          let displayTime = moment(updatedTime).fromNow();

          if(listItem.done === "false"){
              return (
                  <div className="list-item" key={index}  onClick={ () => { this.checkDone(index)}}>
                      <i className='bx bx-checkbox'></i>
                     <span className="item-task">{listItem.task}</span>
                     <span className="item-date">{displayTime}</span>
                     <div className="trash"><i className='bx bx-trash-alt' onClick={ () => { this.delete(index)}} ></i></div>
                </div>
                    );
          } else if(listItem.done === "true"){

              return (
                  <div className="list-item completed" key={index} onClick={ () => { this.checkDone(index)}} >
                      <i className='bx bx-checkbox-checked'></i>
                        <span className="item-task">{listItem.task}</span>
                        <span className="item-date">{displayTime}</span>
                        <div className="trash"><i className='bx bx-trash-alt' onClick={ () => { this.delete(index)}} ></i></div>
                    </div>
                );
          }

        });
      // console.log("rendering");
      return (
         <div className="container">
         <h1>To Do List</h1>
            <div className="add-item">
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event)=>{this.enterHandler(event)}} value={this.state.task}/>
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
