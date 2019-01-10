import React, { Component } from 'react';



class Sort extends Component {
  onSort = () =>{
    this.props.onSort(this.props.tasks.id);
  }
  render() {
    return (
     
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button 
                  type="button" 
                  className="btn btn-primary dropdow-toggle"
                  id = "dropdownmMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  onClick = {this.onSort}>
                  Sắp xếp 
                  <span className="fa fa-caret-square-o-down ml-5"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownmMenu1">
              
              <li>
                <a role="button" className="sort-selected">
                  <span className="fa fa-sort-alpha-asc pr-5">
                    Tên A-Z
                  </span>
                </a>
              </li>

              <li>
                <a role="button" >
                  <span className="fa fa-sort-alpha-desc pr-5">
                    Tên Z-A
                  </span>
                </a>
              </li>

              <li role="separator" className="divider"></li>
              
              <li>
                <a role="button" >
                  Trạng Thái Kích Hoạt
                </a>
              </li>

              <li>
                <a role="button" >
                  Trạng Thái Ẩn 
                </a>
              </li>
            </ul>
          </div>
        </div>
  
      
      
    );
  }
}

export default Sort;
