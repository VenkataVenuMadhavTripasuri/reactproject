import{Row,Col,Container,Card} from 'react-bootstrap'
import './ArticlePost.css';

export default function ArticlePost(){
    return(
        <>
            <Container className='mt-3' id="myarticle">
                <Row>
                    <Col lg={6}>
                        <h1>Anyone Can Learn to Code</h1>
                        <p>One of the best things about coding is that anyone can learn how to do it. No matter your age, gender, or background, coding is a skill that anyone can pick up.
                            <br></br>
                            <br></br>
                            For a long time, people viewed coding as a skill for math and science geniuses. But that is no longer the case. While it helps to be good at math and have an analytical mindset, you don’t need to be a genius to learn to code. As long as you are willing to put in the time and effort, anyone can learn to code.

                        </p>
                        <h1>You don’t need a computer science degree</h1>
                        <p>In the past, a career in programming or coding generally required a college degree. But that is no longer the case. With the growth of online learning, it is now possible to learn to code without going to college.
                            <br></br>
                            <br></br>
                            There are plenty of free resources available online that can teach you everything you need to know about coding. And many companies are now hiring coders without a college degree. So if you’re looking to get into coding without incurring the cost of college education, it is definitely possible.

                        </p>
                        <h1>Learning to Code Increases Your Earning Potential</h1>
                        <p>Learning to code can help you earn more money. In today’s job market, employers are constantly looking for employees with coding skills.
                                <br></br>
                                <br></br>
                                Even if your job doesn’t require you to write code, being able to understand and work with code will give you an advantage in many adjacent roles. That’s better earning potential, and a leg up over other candidates who don’t have these skills.
                        </p>
                        

                    
                            <Row id="cardbox">
                            
                                    <Col lg={2} className="img-fluid">
                                        <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/03/1646968566jf4@2x-120x120.jpg"/>
                                    </Col>
                                    <Col lg={1}></Col>
                                    <Col lg={9} >
                                        <p><strong>Joel Falconer</strong>
                                            <br></br>
                                            Joel Falconer is the managing editor of SitePoint. In the past he's worked at The Next Web, Envato, DesignCrowd, and AppStorm.</p>
                                    </Col>
                            </Row>
                        </Col>
                    <Col lg={6}></Col>


                </Row>
               
            </Container>
        </>
    );
}