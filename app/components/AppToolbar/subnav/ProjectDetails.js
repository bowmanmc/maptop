import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProjectDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {

    }

    render() {
        return (
            <div className="ProjectDetails">
                <div className="FormInput">
                    <label>Map Title</label>
                    <input onChange={this.onFieldChange}
                        type="text"
                        name="title"
                        placeholder="Map Title"
                        value={this.props.project.title} />
                </div>

                <div className="FormInput">
                    <label>Author</label>
                    <input onChange={this.onFieldChange}
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={this.props.project.author} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditProject: (changes) => {
            dispatch(actions.editProject(changes));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);