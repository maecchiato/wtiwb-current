import React from 'react';

const Administrator = () => (
    <div id = "admin-administrator" className = "container-fluid">
      <div className = "row">
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <table className ="table table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>

      </div>

    </div>
)

export default Administrator;
