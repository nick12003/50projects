import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
            "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
            'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
            "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
            "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
            "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text:
            'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
            'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
    }
]

const Container = ({ className }) => {
    const [index, setIndex] = useState(0);
    const timer = useRef();

    useEffect(() => {
        timer.current = setInterval(() => {
            if (index === testimonials.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 10000);
        return () => {
            clearInterval(timer.current);
        };
    }, [index]);

    return (
        <div className={className}>
            <div className="testimonial-container">
                <div className="progress-bar"></div>
                <div className="fas fa-quote-right fa-quote"></div>
                <div className="fas fa-quote-left fa-quote"></div>
                <p className="testimonial">
                    {testimonials[index].text}
                </p>
                <div className="user">
                    <img
                        src={testimonials[index].photo}
                        alt="user"
                        className="user-image"
                    />
                    <div className="user-details">
                        <h4 className="username">{testimonials[index].name}</h4>
                        <p className="role">{testimonials[index].position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TestimonialBoxSwitcher = styled(Container)`
    & {
        background-color: #f4f4f4;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
        padding: 10px;
    }

    p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .testimonial-container {
        background-color: #476ce4;
        color: #fff;
        border-radius: 15px;
        margin: 20px auto;
        padding: 50px 80px;
        max-width: 768px;
        position: relative;
    }
    
    .fa-quote {
        color: rgba(255, 255, 255, 0.3);
        font-size: 28px;
        position: absolute;
        top: 70px;
    }
    
    .fa-quote-right {
        left: 40px;
    }
    
    .fa-quote-left {
        right: 40px;
    }
    
    .testimonial {
        line-height: 28px;
        text-align: justify;
    }
    
    .user {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .user .user-image {
        border-radius: 50%;
        height: 75px;
        width: 75px;
        object-fit: cover;
    }
    
    .user .user-details {
        margin-left: 10px;
    }
    
    .user .username {
        margin: 0;
    }
    
    .user .role {
        font-weight: normal;
        margin: 10px 0;
    }
    
    .progress-bar {
        background-color: #fff;
        height: 4px;
        width: 100%;
        animation: grow 10s linear infinite;
        transform-origin: left;
    }
    
    @keyframes grow {
        0% {
        transform: scaleX(0);
        }
    }
    
    @media (max-width: 768px) {
        .testimonial-container {
        padding: 20px 30px;
        }
    
        .fa-quote {
        display: none;
        }
    }
`

export default TestimonialBoxSwitcher
