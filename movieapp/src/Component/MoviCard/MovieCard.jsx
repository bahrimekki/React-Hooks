import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import "./MoviCard.css";

function MovieCard({ movie }) {
    let start = "★";
    return (
        <Card
            className="MoviCard"
            data-tip
            data-for={movie.title}
            style={{ minWidth: "340px" }}
        >
            <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <h3 style={{ color: "#ffd700" }}>{start.repeat(movie.rat)}</h3>
            <Button variant="primary">Go somewhere</Button>

            <ReactTooltip id={movie.title}>
                <img
                    src={movie.gif}
                    alt={movie.title}
                    style={{ height: "100px" }}
                />
            </ReactTooltip>
        </Card>
    );
}
export default MovieCard;
