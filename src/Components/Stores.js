import React from 'react';

const Administrator = () => (
  <div id = "manage-accounts">
    <div className ="alert alert-secondary" role="alert">
        <ul id = "manage-buttons" className = "list-inline">
          <li className = "list-inline-item float-left">
            <p className = "h6">Store Management <small> <abbr title = "You're currently signed in as an Administrator">(Administrator)</abbr></small></p>
          </li>
          <li className = "list-inline-item float-right">
          <a href = "/">
            <span className ="oi oi-plus"></span>
          </a>
          </li>
          <li className = "list-inline-item float-right mr-2">
            <a href = "/">
              <span className ="oi oi-bell"></span>
            </a>
          </li>
          <li className = "list-inline-item float-right mr-2">
          <a href = "/">
            <span className="oi oi-bullhorn"></span>
          </a>
          </li>
          <li className = "list-inline-item float-right mr-2">
          <a href = "/">
            <span className ="oi oi-magnifying-glass"></span>
          </a>
          </li>
        </ul>
    </div>
    <table className ="table table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Store Name</th>
          <th scope="col">Store Address</th>
          <th scope="col">Location</th>
          <th scope="col">Last Modified</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Arsenal</th>
          <td>Door 4 QHP Building Arsenal St., City Proper Iloilo City</td>
          <td>
            <button className = "btn btn-success">
              <span className="oi oi-map-marker"></span>
            </button>
          </td>
          <td>2018-06-07 14:13:24</td>
          <td>Active</td>
          <td><button className = "btn btn-info">Update</button></td>
        </tr>
        <tr>
          <th scope="row">Arsenal</th>
          <td>Door 4 QHP Building Arsenal St., City Proper Iloilo City</td>
          <td>
            <button className = "btn btn-success">
              <span className="oi oi-map-marker"></span>
            </button>
          </td>
          <td>2018-06-07 14:13:24</td>
          <td>Active</td>
          <td><button className = "btn btn-info">Update</button></td>
        </tr>
        <tr>
          <th scope="row">Arsenal</th>
          <td>Door 4 QHP Building Arsenal St., City Proper Iloilo City</td>
          <td>
            <button className = "btn btn-success">
              <span className="oi oi-map-marker"></span>
            </button>
          </td>
          <td>2018-06-07 14:13:24</td>
          <td>Active</td>
          <td><button className = "btn btn-info">Update</button></td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation example">
      <ul className ="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1">Previous</a>
        </li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Administrator;
