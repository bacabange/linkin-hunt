import React, { Component } from 'react';
import data from '../../data/links.json';

// Render Prop pattern
class CategoriesData extends Component {
  state = {
    categories: [],
  };

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.categories) {
      return { categories: nextProps.categories };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categories !== this.props.categories) {
      let categories = prevProps.categories;
      this.setState({ categories });
    }
  } */

  componentDidMount() {
    this.setState({
      categories: data.categories,
    });
  }

  render() {
    return this.props.render({
      categories: this.state.categories,
    });
  }
}

export default CategoriesData;

/* function mapStateToProps(state) {
  return {
    categories: state.firebase.data.categories
      ? Object.keys(state.firebase.data.categories).map(i => state.firebase.data.categories[i])
      : [],
  };
}

export default compose(
  firebaseConnect([{ path: '/categories' }]),
  connect(mapStateToProps)
)(CategoriesData); */
