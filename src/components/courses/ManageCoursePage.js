import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";

function ManageCoursePage({courses, authors, loadAuthors, loadCourses}) {

    useEffect(() => {
        if(!courses.length) {
            loadCourses().catch(err => {
                alert("Loading courses failed " + err);
            });
        }

        if(!authors.length) {
            loadAuthors().catch(err => {
                alert("Loading authors failed " + err);
            });
        }
    },[]);

    return (
        <>
            <h2>Manage Course</h2>
        </>
    );

}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}

export default connect( mapStateToProps, mapDispatchToProps )(ManageCoursePage);
