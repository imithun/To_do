import { Button, CompleteddButton, DeleteButton,  PendingButton, Table } from "../scssStyle/travel"



const Travel = (props) =>{

    // console.log (props.todolist)
    function onClickhandle(index) {
        props.onDelete(index)
    }
    function statusUpdate(title){

        props.statusUpdate(title)

    }

    return(
        <div>
            <Table>
                < thead>
                    <tr>
                        <th>Tasks Todo</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todolist.map((res, index) => (
                            <tr key={index}>
                                <td>{res.title}</td>
                                <td>{res.status ? <CompleteddButton type="button">Completed</CompleteddButton> : <PendingButton type="button" onClick={() => statusUpdate(res.title)}>Pending</PendingButton>} </td>
                                <td><DeleteButton onClick={() => onClickhandle(index)}>Delete</DeleteButton>  
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>

    )

}
export default Travel