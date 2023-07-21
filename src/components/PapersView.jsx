import CardMini from './CardMini';
import data from '../data'
import { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PapersView() {
    const [id, setId] = useState('')
    const [papers, setPapers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/paper').
            then((res) => {
                setPapers(res.data)
            }).catch((err) => { console.log(err); })

    })


    const cards = papers.map(item => {

        return (
            <Card
                key={item.id}
                item={item}
                onClick={() => {
                    setId(item.id);
                    axios.get(`http://localhost:8000/paper/${item.id}`).
                        then((res) => {
                            const data = res.data[0][0]
                            
                            navigate('/paper',{state:data})
                        }).catch((err) => { console.log(err); })
                }}
                className="w-64 transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader floated={false} className="h-56">
                    <img src={'http://localhost:8000' + item.img} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Grade {item.grade} {item.subject} {item.year} paper
                    </Typography>
                </CardBody>
                {/* <CardFooter className="pt-0 text-center">
                <Button>Read More</Button>
            </CardFooter> */}
            </Card>
        )
    })

    return (
        <div className="flex item-center justify-center min-h-screen container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {cards}
            </div>
        </div>
    )
}