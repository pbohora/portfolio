import React, { Component } from 'react'
import '../portfolio.css'
import blogpost from '../assets/blog.png'
import phonebook from '../assets/phonebook.jpg'

class Portfolio extends Component {
  render() {
    return (
      <div className='' id='portfolio'>
        <div className='container-fluid text-dark'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text-center mt-3 mb-3'>My Works</h1>
            </div>
          </div>
          <div className='project-font'>
            <div className='row border-end'>
              <div className=' col-lg-6 text-center'>
                <h3 className='border-bottom'>Blogpost</h3>
                <p>
                  A full-stack application to post blogs. Users and login, add
                  and/or delete blogs. React and css is used to develop frontend
                  and node/express and mongodb is used for backend. Jest and
                  testing library is used for testing application.
                </p>
                <a
                  href='https://peaceful-ridge-61887.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn button-portfolio'>
                    Go to Web page
                  </button>
                </a>
                <a
                  href='https://github.com/pbohora/Full-Stack-open-2019/tree/master/part4/bloglist'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn button-portfolio'>
                    Github Repository
                  </button>
                </a>
              </div>
              <div className='col-lg-6'>
                <img className='box-height' src={blogpost} alt='' />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <img className='box-height ' src={phonebook} alt='' />
              </div>
              <div className='col-lg-6 text-center'>
                <h3 className='second-app border-bottom'>PhoneBook</h3>
                <p>
                  A simple PhoneBook built with React, Node/express and MongoDb.
                  User can add and delete name and phonenumber, also checks for
                  the validation.
                </p>
                <a
                  href='https://full-stack-phonebook.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn button-portfolio mr'>
                    Go to Web page
                  </button>
                </a>
                <a
                  href='https://github.com/pbohora/Full-Stack-open-2019/tree/master/part%202/phonebook'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn button-portfolio'>
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col text-center'>
                <a
                  href=' https://github.com/pbohora'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-danger button-end'>
                    See more projects in Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
