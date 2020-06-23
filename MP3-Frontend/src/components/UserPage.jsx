import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaEllipsisV } from 'react-icons/fa';

class UserPage extends Component {

    constructor(props){
        super(props)
    }

    render() {
        if (this.props.data){
            return (
                <div>
                    <div className="section">
                        <h3>Danh sách các bài hát bạn đã thích ạ</h3>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        } else {
            return <></>
        }
        
    }
}


export default UserPage;