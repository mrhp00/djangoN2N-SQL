import React from 'react'
import axios from "axios";


class AddCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            courses: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/blog/courses/add")
            .then((res) => {

                this.setState({courses: res.data.data.courses})
                this.setState({students:res.data.data.students})

            }).catch(() => {
        })
    }

    render() {
        return (
            <>
                <div className={"container col-4 justify-content-center"}>
                    <input type={"hidden"} className={"textInput"} name={"id"} id={"id"}/><br/>
                    Title: <br/>
                    <input type={"text"} className={"textInput"} name={"title"} id={"title"}
                           placeholder={"Course Title"}/><br/>
                    Duration: <br/>
                    <input type={"number"} className={"textInput"} name={"duration"} id={"duration"}
                           placeholder={"Duration Hour"}/><br/><br/>
                    <table className={"table table-striped"}>
                        <tr className={"text-danger"}>
                            <th>.</th>
                            <th>Name</th>
                            <th>Family</th>
                        </tr>

                        {this.state.students.map((v) => (
                            <tr>
                                <td>
                                    <input type="checkbox" value={v.id} name="students[]" id={v.id}/>
                                </td>
                                <td>{v.name}</td>
                                <td>{v.family}</td>
                            </tr>
                        ))}
                    </table>
                    <button className={"btn btn-primary"}>Save</button>
                </div>
            </>
        )
    }
}

export default AddCourses