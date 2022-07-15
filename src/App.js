import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      main: [],
      name:"",
      Last_name:"",
      Position:"",
      Contak:"",
      currentIndex:null
    }
  }
  
  AddFun(){
    let arre = this.state.main

    arre.push({
      name:this.state.name,
      Last_name:this.state.Last_name,
      Position:this.state.Position,
      Contak:this.state.Contak
    })

    this.setState({
      main:arre,
      name:"",
      Last_name:"",
      Position:"",
      Contak:""
    })
  }

  Edite(){
    let arre = this.state.main
    
    arre[this.state.currentIndex]={
      name:this.state.name,
      Last_name:this.state.Last_name,
      Position:this.state.Position,
      Contak:this.state.Contak
    }

    this.setState({
      main:arre,
      name:"",
      Last_name:"",
      Position:"",
      Contak:""
    })
  }

  deleteFun(index){
    let arre = this.state.main
    arre.splice(index,1)
    this.setState({main:arre})
  }

  editeFun(index){
    let arre = this.state.main
    this.setState({name:arre[index].name,
      Last_name:arre[index].Last_name,
      Position:arre[index].Position,
      Contak:arre[index].Contak,
      currentIndex:index})
  }
  
  render() {

    return (
      <div className="App container mt-5">
        <div className='row'>
          <div className='col-3'>
            <input value={this.state.name} onChange={(val)=>{this.setState({name:val.target.value})}} placeholder="Name" className="me-3  inputMain form-control my-2 "/>
          </div>
          <div className='col-3'>
            <input value={this.state.Last_name} onChange={(val)=>{this.setState({Last_name:val.target.value})}} placeholder="Last name"  className="me-3  inputMain form-control my-2 "/>
          </div >
          <div className='col-3'>
            <input value={this.state.Position} onChange={(val)=>{this.setState({Position:val.target.value})}} placeholder="Position"  className="me-3  inputMain form-control my-2 "/>
          </div>
          <div className='col-3'> 
            <input type="number" value={this.state.Contak} onChange={(val)=>{this.setState({Contak:val.target.value})}} placeholder="Contak"  className="me-4  inputMain form-control my-2 "/>
          </div>
        </div>
        <div className='mainBtn mt-2'>
            <button onClick={()=>this.AddFun()} className="btn btn-primary " >Add</button>
            <button onClick={()=>this.Edite()} className="btn btn-success ms-4" >Edite</button>
        </div>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last name</th>
            <th scope="col">Position</th>
            <th scope="col">Contak</th>
            <th scope="col">Edite / Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.main.map((i,index)=>{
              return(
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{i.name}</td>
                  <td>{i.Last_name}</td>
                  <td>{i.Position}</td>
                  <td>{i.Contak}</td>
                  <td className='my-2'>
                    <button className="btn  btn-success me-2" onClick={()=>this.editeFun(index)}>Edite</button>
                    <button className="btn btn-danger " onClick={()=>this.deleteFun(index)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    )
  }
}
