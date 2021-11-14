import React from 'react'
import axios from "axios";
import 'react-bootstrap'

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/blog/courses")
            .then((res) => {
                this.setState({courses: res.data.data.courses})

            }).catch(() => {
        })
    }

    render() {
        return (
            <>
                <table className={"table table-striped"}>
                    <tr className={"text-danger"}>
                        <th>Title</th>
                        <th className={"text-center"}>Duration</th>
                        <th className={"text-center"}>...</th>
                    </tr>
                    {
                        this.state.courses.map((v)=>(
                            <tr>
                                <td>{v.title}</td>
                                <td className={"text-center"}>{v.duration}</td>
                                <td className={"text-center"}>
                                    <a className={"btn btn-outline-success"} href={"#"}>Edit</a>
                                    <a className={"btn btn-outline-warning"} href={"#"}>Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                {/*{console.log(this.state.courses)}*/}
            </>
        )
    }
}

export default Courses