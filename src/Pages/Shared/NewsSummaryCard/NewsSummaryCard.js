import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, image_url, details, total_view, rating
    } = news;
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image className='me-2' style={{ height: '60px' }} roundedCircle src={author?.img} />
                    <div >
                        <p className='mb-0'>{author?.name ? author.name : 'Name not found'}</p>
                        <p className='mb-0'>{author?.published_date.slice(0, 10)}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/new/${_id}`}>Read More</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted d-flex justify-content-between align-items-center'>
                <div>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number} </span>
                </div>
                <div>
                    <FaEye className='me-2' />
                    <span>{total_view}</span>
                </div>


            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;