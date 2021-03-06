import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

// Own components
import Header from '../../components/Layout/Header';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import LinkList from '../../components/LinkList/LinkList';
import LinkData from '../../components/LinkData/LinkData';
import CategoriesData from '../../components/CategoriesData/CategoriesData';
import Footer from '../../components/Layout/Footer';
import { AuthUserContext } from '../../components/Session';

import { FirebaseContext } from '../../components/Firebase';
import SignoutButton from '../../components/SignoutButton/SignoutButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      isModalShow: false,
    };
  }

  handleLogout = () => {
    window.location.reload();
  };

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <div>
              <section className="section">
                <div className="container is-fluid">
                  <Header isLogged={false} />

                  <div className="columns">
                    <div className="column is-3">
                      <aside className="menu">
                        <p className="menu-label">CATEGORIES</p>

                        <CategoriesData render={({ categories }) => <CategoriesList categories={categories} />} />
                      </aside>
                    </div>

                    <div className="column is-6">
                      <LinkData
                        render={({ links }) => (
                          <div className="notification">
                            It was found <strong>{links.length}</strong> bookmarks
                          </div>
                        )}
                      />

                      <LinkData render={props => <LinkList {...props} />} />

                      <div className="columns">
                        <div className="column">
                          <nav className="pagination" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" title="This is the first page" disabled>
                              Previous
                            </a>
                            <a className="pagination-next">Next page</a>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="column is-3">
                      <AuthUserContext.Consumer>
                        {authUser =>
                          authUser ? (
                            <div className="columns">
                              <div className="column">
                                <div className="card">
                                  <div className="card-content has-text-centered">
                                    <figure className="image is-128x128" style={{ margin: '0 auto 1em auto' }}>
                                      <img
                                        alt="User"
                                        className="is-rounded"
                                        src="https://bulma.io/images/placeholders/128x128.png"
                                      />
                                    </figure>
                                    <div className="content">
                                      <h5 className="title">{authUser.displayName}</h5>
                                      <p className="subtitle">
                                        <i>no bio</i>
                                      </p>
                                    </div>
                                  </div>

                                  <footer className="card-footer">
                                    <a href="#" className="card-footer-item">
                                      Profile
                                    </a>
                                    <SignoutButton />
                                  </footer>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="columns">
                              <div className="column">
                                <div className="card">
                                  <div className="card-content has-text-centered">
                                    <div className="content">
                                      <h5 className="title">Hi, Join us!</h5>
                                      We are a community of Developers, Designers or Anyone interesed to tech.
                                    </div>
                                  </div>

                                  <footer className="card-footer">
                                    <Link to="/login" className="card-footer-item">
                                      Sign in
                                    </Link>
                                    <Link
                                      to="/register"
                                      className="card-footer-item has-text-white has-background-primary"
                                    >
                                      Sign Up
                                    </Link>
                                  </footer>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </AuthUserContext.Consumer>
                    </div>
                  </div>
                </div>
              </section>

              <Footer />
            </div>
          );
        }}
      </FirebaseContext.Consumer>
    );
  }
}

export default Home;
