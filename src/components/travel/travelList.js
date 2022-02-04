import React from "react";
import Travel from "../table/travel";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

class TravelList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            todolist: [{ title: 'Update Timesheet', status: true }, { title: 'Visit Goa', status: false }]
        }

    }

    // status-update
    statusUpdate = (title) => {
        let todolist = this.state.todolist;
        let updatedtodo = todolist.map(item => {
            if (item.title === title) {
                item.status = true;
            }
            return item
        })
        this.setState(({ todolist: updatedtodo }))
    }

    //delete-function
    onDelete = (index) => {
        let updatedtodo = this.state.todolist;
        updatedtodo.splice(index, 1)

        this.setState(({ todolist: updatedtodo }))
    }

    setData = (event) => {
        this.setState({ title: event.target.value })
    }
    //save-function
    saveData = () => {
        const todolist = {
            title: this.state.title,
            status: false
        }
        this.setState((prevState) => ({ todolist: [...prevState.todolist, todolist], title: '' }))

    }
    render() {
        return (
            <>
                <div>

                    <div className="input-card">
                        <div className="search-align">
                            <TextField className="textf-width" id="outlined-basic" label="Add task" variant="outlined" value={this.state.title} onChange={this.setData} />
                            <div>
                                <Button variant="contained" className="btn-pad" onClick={this.saveData}> ADD </Button>
                            </div>
                        </div>

                    </div>

                    <div className="card">
                        <Travel todolist={this.state.todolist} onDelete={this.onDelete} statusUpdate={this.statusUpdate} />
                    </div>


                </div>
            </>



        )
    }
}

export default TravelList