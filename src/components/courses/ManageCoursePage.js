import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";

class ManageCoursePage extends React.Component {

    componentDidMount() {
        const {courses, authors, actions} = this.props;

        if(!courses.length) {
            actions.loadCourses().catch(err => {
                alert("Loading courses failed " + err);
            });
        }

        if(!authors.length) {
            actions.loadAuthors().catch(err => {
                alert("Loading authors failed " + err);
            });
        }
    }


    render() {
        return (
            <>
                <h2>Manage Course</h2>
            </>
        );
    }
}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(ManageCoursePage);
