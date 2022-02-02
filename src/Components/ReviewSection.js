import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from "../styles/Layouts"
import Title from "../Components/Title"
import ReviewItem from './ReviewItem'
function ReviewSection() {
    return (
        <InnerLayout>
            <ReviewStyled>

                <Title title={"Reviews"} span={"Reviews"} />

                <div className="reviews">
                    <ReviewItem text={"Nice Work !"} />
                    <ReviewItem text={" Don't comment bad code - rewrite it."} />
                   
                </div>
                <div className="reviews">
                    <ReviewItem text={"One main'scrappy software is another man's full time job."} />
                    <ReviewItem text={" The computer was born to solve problems that did not exist before. "} />
                   
                </div>

            </ReviewStyled>
        </InnerLayout>

    )
}
const ReviewStyled = styled.section`
.reviews{
     padding-top: 3rem ;
     display: flex;
}


`
export default ReviewSection
