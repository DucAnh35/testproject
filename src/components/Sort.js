import React, {Component} from 'react';

class Sort extends Component {
    
    onClick = (sortBy, sortValue) => {
        
        this.props.onSort(sortBy,sortValue);
    }
    render() {

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-primary dropdow-toggle"
                        id="dropdownmMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true">
                        Sắp xếp
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownmMenu1">

                        <li onClick= {() => this.onClick('name',1)}>
                            <a
                                role="button"
                                className = {
                                    (this.props.sortBy === 'name' && this.props.sortValue === 1) 
                                    ? 'sort-selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>

                        <li onClick= {() => this.onClick('name',-1)}>
                            <a
                                role="button"
                                className = {
                                    (this.props.sortBy === 'name' && this.props.sortValue === -1) 
                                    ? 'sort-selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                                
                        </li>

                        <li role="separator" className="divider"></li>

                        <li onClick= {() => this.onClick('status',1)}>
                            <a
                                role="button"
                                className = {
                                    (this.props.sortBy === 'status' && this.props.sortValue === 1) 
                                    ? 'sort-selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Trạng Thái Kích Hoạt
                                </span>
                            </a>
                        </li>

                        <li onClick= {() => this.onClick('status',-1)}>
                            <a
                                role="button"
                                className = {
                                    (this.props.sortBy === 'status' && this.props.sortValue === -1) 
                                    ? 'sort-selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Trạng Thái Ẩn
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sort;
